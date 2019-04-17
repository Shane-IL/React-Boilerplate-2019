import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Content1 from './Content1.jsx';
import Content2 from './Content2.jsx';

import '../../css/main.sass';

const Main = props => (
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component={Home} />
			<Route path="/Content1" component={Content1} />
			<Route path="/Content2" component={Content2} />
		</div>
	</Router>
);

export default Main;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
