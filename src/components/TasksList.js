import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";
import Task from "./Task";
import PaginationSteps from "./Pagination";
import Sorting from "./Sorting";

export class TasksList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }
	render() {
        const { tasks, numOfTasks } = this.props;
		return (tasks ? <div>
            <Sorting />
            {tasks.map(elem => <Task username={elem.username} key={elem.id} id={elem.id} status={elem.status} email={elem.email} text={elem.text} />)}
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
