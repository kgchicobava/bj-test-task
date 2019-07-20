import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, FormGroup, CardSubtitle, Button, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { changeTask } from "../actions/taskActions";

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editText: this.props.text,
			allowEdit: false
		}
	}
	onCheck = (ev) => {
		const convert = {
			"true": 10,
			"false": 0
		}
		const formdata = new FormData();
		formdata.append("token", localStorage.token);
		formdata.append("status", convert[ev.target.checked.toString()])
		this.props.changeTask(this.props.id, formdata)
		console.log(ev.target.name)
	}

	onChange = (ev) => {
		this.setState({editText: ev.target.value})
	}

	onSave = () => {
		const formdata = new FormData();
		formdata.append("token", localStorage.token);
		formdata.append("text", this.state.editText)
		this.props.changeTask(this.props.id, formdata);
		this.allowEdit();
	}

	onCancel = () => {
		this.setState({editText: this.props.text})
		this.allowEdit()
	}

	allowEdit = () => {
		this.setState({allowEdit: !this.state.allowEdit})
	}

	render() {
		const {isAuthenticated} = this.props;
		return (
			<div>
				<Card>
					<CardBody>
						{isAuthenticated ? <Label check>
								<Input onChange={this.onCheck} checked={Boolean(+this.props.status)} name="complete" type="checkbox" />
							</Label> : ""}
							{!this.state.allowEdit && isAuthenticated && <Button onClick={this.allowEdit}>Edit</Button>}

						<CardTitle>Created by: {this.props.username}</CardTitle>
						<CardSubtitle>Email: {this.props.email}</CardSubtitle>
						<CardText>{this.props.text}</CardText>
						{this.state.allowEdit && <FormGroup>
						<Label for="text">Edit:</Label>
						<Input
							type="textarea"
							onChange={this.onChange}
							value={this.state.editText}
							name="text"
						/>
						<Button onClick={this.onSave}>Save</Button>
						<Button onClick={this.onCancel}>Cancel</Button>
					</FormGroup>}
					</CardBody>
				</Card>
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
