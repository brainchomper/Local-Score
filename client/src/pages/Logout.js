import React from 'react';

import { deleteLocal } from '../utils/LocalStorage';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
constructor(props) {
	super(props) 
	this.updateParentState = props.propFn.bind(this);
	this.updateParentLogin = this.updateParentLogin.bind(this);
	this.state = {
		LoggedOut: false
	}
}
	// this is the only time in the entire app that updateParentLogin is called without arguments and to set the values to false / basic strings
updateParentLogin = () => {
	this.updateParentState(false, 'FirstName', 'LastName', '_id', 'Picture')
}

componentDidMount() {
	// clear out the local storage
	deleteLocal("localScoreLoggedIn")
	deleteLocal("LSUserValues")
	// update the state
	this.setState({
		LoggedOut: true
	},
	//update the parent login
	this.updateParentLogin())
}

render() {
	if (this.state.LoggedOut) {
		return (<Redirect to ="/" /> )
	}
	else {
		return (<div>Need a loading gif </div>)
	}
}

}

export default Logout