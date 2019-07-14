import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';



class App extends Component {

  render() {
    return (
    	<Router>
	    	<div className="app">
	    		<NavBar />
	    		<div className="contentContainer">
	    			<Switch>
						<Route path="/" exact component={AboutMe} />
					    <Route path="/portfolio/" component={Portfolio} />
				    </Switch>
	    		</div>
	    		<ContactMe />
	    	</div>
    	</Router>
    );
  }
}

export default App;
