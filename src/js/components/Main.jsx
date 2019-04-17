import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Input from './Input.jsx';

import '../../css/main.sass';

const Main = props => {
	const [title, setTitle] = useState("");

	function handleChange(event) {
		setTitle(event.target.value);
	}

	return (
		<Fragment>
			<div>{title}</div>
			<form id="article-form">
				<Input
					text="Title"
					label="Title"
					type="text"
					id="title"
					value={title}
					handleChange={handleChange}
				/>
			</form>
		</Fragment>
	);
};

export default Main;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
