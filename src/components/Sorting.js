import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";

export class Sorting extends Component {

    onSelect = (ev) => {
        console.log(ev.target.value)
    }

    render() {
		return (
			<div>
				<FormGroup>
					<Label for="exampleSelect">Sort by: </Label>
					<Input onChange={this.onSelect} type="select" name="sortby">
						<option value="email">E-mail</option>
						<option value="username">Username</option>
						<option value="status">Status</option>
						<option value="id">ID</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="exampleSelect">Sort direction: </Label>
					<Input type="select" name="sortdir">
						<option>Ascending</option>
						<option>Descending</option>
					</Input>
				</FormGroup>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect()(Sorting);
