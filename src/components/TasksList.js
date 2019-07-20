import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";
import Task from "./Task";
import { Alert, Spinner } from "reactstrap";
import PaginationSteps from "./Pagination";
import Sorting from "./Sorting";

export class TasksList extends Component {
	componentDidMount() {
		this.props.getTasks();
	}
	render() {
		const { tasks, numOfTasks, errors } = this.props;
		return tasks ? (
			<div>
				<Sorting />
				{errors && <Alert color="danger">{errors}</Alert>}
				{tasks.map(elem => (
					<Task
						username={elem.username}
						key={elem.id}
						id={elem.id}
						status={elem.status}
						email={elem.email}
						text={elem.text}
					/>
				))}
				<PaginationSteps number={numOfTasks} />
			</div>
		) : (
			<Spinner type="grow" color="warning" />
		);
	}
}

const mapStateToProps = state => ({
	tasks: state.tasks.tasks,
	numOfTasks: state.tasks.numOfTasks,
	errors: state.errors.edit
});

export default connect(
	mapStateToProps,
	{ getTasks }
)(TasksList);
