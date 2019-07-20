import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {addTask} from "../actions/taskActions";

class AdditionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			text: ""
		};
	}

	onChange = ev => {
		this.setState({ [ev.target.name]: ev.target.value });
    };

    onSubmit = () => {
        const form = new FormData();
        form.append("username", this.state.username);
        form.append("email", this.state.email)
        form.append("text", this.state.text);
        this.props.addTask(form)
    }

	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<Label for="username">Username</Label>
						<Input
							type="text"
							name="username"
							placeholder="Enter your username"
							value={this.state.username}
							onChange={this.onChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="email">E-mail</Label>
						<Input
							type="email"
							name="email"
							placeholder="Enter your E-mail"
							value={this.state.email}
							onChange={this.onChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="text">Task</Label>
						<Input
							type="textarea"
							onChange={this.onChange}
							value={this.state.task}
							name="text"
						/>
					</FormGroup>

					<Button onClick={this.onSubmit}>Add</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{addTask}
)(AdditionForm);
