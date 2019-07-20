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
	Input
} from "reactstrap";
import {loginUser} from "../actions/userActions";
import { connect } from 'react-redux'

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
									type="text"
									name="username"
									placeholder="Enter your username"
									value={this.state.username}
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">E-mail</Label>
								<Input
									type="password"
									name="password"
									placeholder="Enter your password"
									value={this.state.password}
									onChange={this.onChange}
								/>
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
})


export default connect(mapStateToProps, {loginUser})(LoginModal);
