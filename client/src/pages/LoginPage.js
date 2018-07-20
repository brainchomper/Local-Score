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
	
			return (<Login props = {this.state} propFn = {this.propFn}/> )
		}
	

}
export default LoginPage;