import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'


class Loggedin extends Component {
	// constructor(props){
	// 	super(props);

	// 	this.state={
	// 		Loggedin: this.props.props.props
	// 	}
	// }

	renderConditionally() {
		if (!this.state.Loggedin){
			<Redirect to="/landing" />
		}
	}
render (){
	return this.renderConditionally
}
}
export default Loggedin;