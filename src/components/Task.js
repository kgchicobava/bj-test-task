import React, { Component } from "react";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	FormGroup,
	CardSubtitle,
	Button,
	Label,
	Input,
	Row,
	Col
} from "reactstrap";
import { connect } from "react-redux";
import { changeTask } from "../actions/taskActions";

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editText: this.props.text,
			allowEdit: false
		};
	}
	onCheck = ev => {
		const convert = {
			true: 10,
			false: 0
		};
		const formdata = new FormData();
		formdata.append("token", localStorage.token);
		formdata.append("status", convert[ev.target.checked.toString()]);
		this.props.changeTask(this.props.id, formdata);
	};

	onChange = ev => {
		this.setState({ editText: ev.target.value });
	};

	onSave = () => {
		const formdata = new FormData();
		formdata.append("token", localStorage.token);
		formdata.append("text", this.state.editText);
		this.props.changeTask(this.props.id, formdata);
		this.allowEdit();
	};

	onCancel = () => {
		this.setState({ editText: this.props.text });
		this.allowEdit();
	};

	allowEdit = () => {
		this.setState({ allowEdit: !this.state.allowEdit });
	};

	render() {
		const completed = +this.props.status === 10;
		console.log(this.props)
		const { isAuthenticated } = this.props;
		return (
			<div>
				<Card>
					<CardBody>
						<div className="grid-container">
							{isAuthenticated && (
								<div className="checkbox">
									<Input
										onChange={this.onCheck}
										checked={Boolean(+this.props.status)}
										name="complete"
										type="checkbox"
										size="lg"
									/>
								</div>
							) }
							<div className="task-content">
								<CardTitle className={`task-bold ${completed && "completed"}`}>{this.props.text}</CardTitle>
								<CardSubtitle>
									Created by: {this.props.username}
								</CardSubtitle>
								<CardText>Email: {this.props.email}</CardText>
							</div>
							<div className="task-edit">
								{!this.state.allowEdit && isAuthenticated && (
									<Button
										color="primary"
										onClick={this.allowEdit}>
										Edit
									</Button>
								)}
							</div>
						</div>
						{this.state.allowEdit && (
							<FormGroup>
								<Label for="text">Edit:</Label>
								<Input
									type="textarea"
									onChange={this.onChange}
									value={this.state.editText}
									name="text"
								/>
								<div className="edit-controls">
									<Button
										color="success"
										onClick={this.onSave}>
										Save
									</Button>
									<Button
										color="danger"
										onClick={this.onCancel}>
										Cancel
									</Button>
								</div>
							</FormGroup>
						)}
					</CardBody>
				</Card>
				<br/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ changeTask }
)(Task);
