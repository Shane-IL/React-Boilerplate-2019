import React, {Fragment, useState} from "react";
import Input from './Input.jsx';

const Home = props => {
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

export default Home;