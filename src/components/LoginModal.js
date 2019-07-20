import React, { Component } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback
} from "reactstrap";
import { loginUser } from "../actions/userActions";
import { connect } from "react-redux";

export class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			username: "",
			password: ""
		};
	}

	onChange = ev => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	componentDidUpdate(prevProps) {
		if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
			this.toggle();
		}
	}

	onSubmit = () => {
		const formdata = new FormData();
		formdata.append("username", this.state.username);
		formdata.append("password", this.state.password);
		this.props.loginUser(formdata);
	};

	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	render() {
		const { errors } = this.props;
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>
					Login
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Login</ModalHeader>
					<ModalBody>
						<Form>
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
							<FormGroup>
								<Label for="password">E-mail</Label>
								<Input
									invalid={Boolean(errors.password)}
									type="password"
									name="password"
									placeholder="Enter your password"
									value={this.state.password}
									onChange={this.onChange}
								/>
								<FormFeedback>{errors.password}</FormFeedback>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.onSubmit}>
							Login
						</Button>{" "}
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated,
	errors: state.errors.login
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(LoginModal);
