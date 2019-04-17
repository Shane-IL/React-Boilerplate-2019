import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Input from './TestInput.jsx';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<div>{this.state.title}</div>
				<form id="article-form">
					<Input
						text="Title"
						label="Title"
						type="text"
						id="title"
						value={this.state.title}
						handleChange={this.handleChange}
					/>
				</form>
			</Fragment>
		);
	}
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;