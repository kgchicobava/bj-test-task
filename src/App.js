import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AdditionForm from "./components/AdditionForm"
import TasksList from "./components/TasksList";
import AuthKeeper from "./components/AuthKeeper"
import { LOGIN_USER } from "./actions/constants";

if (localStorage.token) {
	store.dispatch({type: LOGIN_USER})
}

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="root" className="container">
					<AuthKeeper />
					<AdditionForm />
					<TasksList />
				</div>
			</Provider>
		);
	}
}

export default App;
