import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import { sortTasks } from "../actions/taskActions";

export class Sorting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: "sort_field=",
			direction: "sort_direction="
		};
	}
	onSelect = ev => {
		this.setState({ [ev.target.name]: ev.target.value });
		this.props.sortTasks(`${this.state.field}&${this.state.direction}`);
	};

	render() {
		return (
			<div>
				{/* <br/> */}
				<hr/>
				<Row form>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleSelect">Sort by: </Label>
							<Input
								onChange={this.onSelect}
								type="select"
								name="field">
								<option value="sort_field=" />
								<option value="sort_field=email">E-mail</option>
								<option value="sort_field=username">
									Username
								</option>
								<option value="sort_field=status">
									Status
								</option>
								<option value="sort_field=id">ID</option>
							</Input>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="exampleSelect">Sort direction: </Label>
							<Input
								type="select"
								onChange={this.onSelect}
								name="direction">
								<option value="sort_direction=" />
								<option value="sort_direction=asc">
									Ascending
								</option>
								<option value="sort_direction=desc">
									Descending
								</option>
							</Input>
						</FormGroup>
					</Col>
				</Row>
			</div>
		);
	}
}

export default connect(
	null,
	{ sortTasks }
)(Sorting);
