import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";
import Task from "./Task";
import PaginationSteps from "./Pagination";
import { FormGroup, Label, Input } from 'reactstrap';

export class TasksList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }
	render() {
        const { tasks, numOfTasks } = this.props;
		return (tasks ? <div>
            <FormGroup>
          <Label for="exampleSelect">Sort by: </Label>
          <Input type="select" name="sortby">
            <option>E-mail</option>
            <option>Username</option>
            <option>Status</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Sort direction: </Label>
          <Input type="select" name="sortdir">
            <option>Ascending</option>
            <option>Descending</option>
          </Input>
        </FormGroup>
            {tasks.map(elem => <Task username={elem.username} key={elem.id} status={elem.status} email={elem.email} text={elem.text} />)}
            <PaginationSteps number={5} />
        </div> : <p>Loading</p>);
	}
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    numOfTasks: state.tasks.numOfTasks
})

export default connect(
	mapStateToProps,
	{getTasks}
)(TasksList);
