import React from "react";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

const Task = props => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle>Created by: {props.username}</CardTitle>
					<CardText>
						{props.text}
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default Task;
