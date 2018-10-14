import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
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
    	<div className="app">
    		<NavBar routeChange={onRouteChange}/>
    		<div className="contentContainer">
    		{route === 'aboutMe'
	    		?
	    		<AboutMe />
	    		: route ===  'portfolio' ?
	    		<Portfolio />
	    		: route === 'resume' ?
	    		<Resume />
	    		: route === 'contactMe' ?
	    		<ContactMe />
	    		: 'no'
    		}
    		</div>
    	</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
