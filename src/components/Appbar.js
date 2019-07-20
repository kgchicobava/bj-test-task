import React, { Component } from "react";
import LoginModal from "./LoginModal";
import { logoutUser } from "../actions/userActions";
import { connect } from "react-redux";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	Button
} from "reactstrap";

export class Appbar extends Component {
	render() {
		const { isAuthenticated } = this.props;
		return (
			<Navbar color="primary" light expand="md">
				<NavbarBrand href="/">TODO App</NavbarBrand>
				<Nav className="ml-auto" navbar>
					<NavItem>
						{isAuthenticated ? (
							<Button
								onClick={() => this.props.logoutUser()}
								color="danger">
								Logout
							</Button>
						) : (
							<LoginModal />
						)}
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Appbar);
