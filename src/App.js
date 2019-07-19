import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AdditionForm from "./components/AdditionForm"
import TasksList from "./components/TasksList";

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="root" className="container">
					<AdditionForm />
					<TasksList />
				</div>
			</Provider>
		);
	}
}

export default App;
