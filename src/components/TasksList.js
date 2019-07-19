import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";
import Task from "./Task";


export class TasksList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }
	render() {
        const { tasks } = this.props;
		return (tasks ? <div>
            {tasks.map(elem => <Task username={elem.username} key={elem.id} status={elem.status} email={elem.email} text={elem.text} />)}
        </div> : <p>Loading</p>);
	}
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
})

export default connect(
	mapStateToProps,
	{getTasks}
)(TasksList);
