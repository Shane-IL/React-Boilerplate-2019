import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from '../Nav';
import Home from '../Home';
import Content1 from '../Content1';
import Content2 from '../Content2';

import './style.sass';

function Main(){
	return (
		<Router>
			<div>
				<Nav />
				<Route exact path="/" component={Home} />
				<Route path="/Content1" component={Content1} />
				<Route path="/Content2" component={Content2} />
			</div>
		</Router>
	);
}

export default Main;

const wrapper = document.body;
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
