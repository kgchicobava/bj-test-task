import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App" />
			</Provider>
		);
	}
}

export default App;
