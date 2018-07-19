import React from 'react';
import Login from './Login' ;
import {Redirect} from "react-router-dom"

class LoginPage extends React.Component {

	constructor(props) {
		super(props)
		console.log("Here are the props in the loginpage")
		console.log(props.propFn)	
		this.propFn = props.propFn
		this.state = {
			LoggedIn : props.props.LoggedIn,
			FirstName: props.props.FirstName,
			LastName: props.props.LastName,
			Picture: props.props.Picture,
			userID: props.props.userID
		}
	}

	render() {
		if (this.state.LoggedIn === false  || this.state.LoggedIn === "undefined" || this.state.Login ===  true) {
			console.log("Yas it's false")
			return (<Login props = {this.state} propFn = {this.propFn}/> )
		}
	// 	else {
	// 		console.log("Y U NO UPDATE")
	// 		return (<Redirect to="/products" />)
	// 	}
	}

}
export default LoginPage;