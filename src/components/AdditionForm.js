import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Col,
	Row
} from "reactstrap";
import { addTask } from "../actions/taskActions";

class AdditionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			text: ""
		};
	}

	componentDidUpdate(prevProps) {
		if (+prevProps.numOfTasks !== +this.props.numOfTasks) {
			this.setState({
				username: "",
				email: "",
				text: ""
			});
		}
	}

	onChange = ev => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	onSubmit = () => {
		const form = new FormData();
		form.append("username", this.state.username);
		form.append("email", this.state.email);
		form.append("text", this.state.text);
		this.props.addTask(form);
	};

	render() {
		const { errors } = this.props;
		return (
			<div>
				<br />
				<Form>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="username">Username</Label>
								<Input
									invalid={Boolean(errors.username)}
									type="text"
									name="username"
									placeholder="Enter your username"
									value={this.state.username}
									onChange={this.onChange}
								/>
								<FormFeedback>{errors.username}</FormFeedback>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="email">E-mail</Label>
								<Input
									invalid={Boolean(errors.email)}
									type="email"
									name="email"
									placeholder="Enter your E-mail"
									value={this.state.email}
									onChange={this.onChange}
								/>
								<FormFeedback>{errors.email}</FormFeedback>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label for="text">Task</Label>
						<Input
							invalid={Boolean(errors.text)}
							type="textarea"
							onChange={this.onChange}
							value={this.state.text}
							name="text"
							placeholder="Enter your task..."
						/>
						<FormFeedback>{errors.text}</FormFeedback>
					</FormGroup>

					<Button
						outline
						color="success"
						block
						onClick={this.onSubmit}>
						Add Task
					</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors.adding,
	numOfTasks: state.tasks.numOfTasks
});

export default connect(
	mapStateToProps,
	{ addTask }
)(AdditionForm);
