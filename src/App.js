import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import setRoute from './containers/reducers';
import changeRoute from './containers/actions';

const mapStateToProps = (state) => {
	return {
		route: state.route
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRouteChange: (event) => {dispatch(changeRoute(event))}
	}
}

class App extends Component {

  render() {

  	const { route, onRouteChange } = this.props
    return (
    	<Router>
	    	<div className="app">
	    		<NavBar />
	    		<div className="contentContainer">
					<Route path="/" exact component={AboutMe} />
				    <Route path="/portfolio/" exact component={Portfolio} />
				    <Route path="/contact/" exact component={ContactMe} />
	    		</div>
	    	</div>
    	</Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
