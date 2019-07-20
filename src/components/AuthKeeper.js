import React, { Component } from "react";
import LoginModal from "./LoginModal";
import { logoutUser } from "../actions/userActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";

export class AuthKeeper extends Component {
	render() {
		const { isAuthenticated } = this.props;
		return isAuthenticated ? (
			<Button onClick={() => this.props.logoutUser()} color="primary">
				Logout
			</Button>
		) : (
			<LoginModal />
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(AuthKeeper);
