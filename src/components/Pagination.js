import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { connect } from "react-redux";
import { changePage } from "../actions/taskActions";

export class PaginationSteps extends Component {
	renderPages = num => {
		let pages = [];
		for (let i = 1; i <= Math.ceil(num / 3); i++) {
			pages.push(
				<PaginationItem key={i} active={this.props.page === i}>
					<PaginationLink onClick={() => this.props.changePage(i)}>
						{i}
					</PaginationLink>
				</PaginationItem>
			);
		}

		return <Pagination size="md">{pages}</Pagination>;
	};

	render() {
		return <div>{this.renderPages(this.props.number)}</div>;
	}
}

const mapStateToProps = state => ({
	page: state.tasks.page
});

export default connect(
	mapStateToProps,
	{ changePage }
)(PaginationSteps);
