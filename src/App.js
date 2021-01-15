// React imports
import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component imports
import Home from './containers/Home/Home';
import Landing from './containers/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

const App = () => (
	<div className="App">
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route exact path="/" component={Landing} />
			</Switch>
		</BrowserRouter>
	</div>
);

export { App as default };
