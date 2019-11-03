import React from 'react';
import { Link } from "react-router-dom";

const Nav = props => (
	<ul>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/Content1">Content 1</Link>
		</li>
		<li>
			<Link to="/Content2">Content 2</Link>
		</li>
	</ul>
);

export default Nav;