import React, { Component } from 'react';
import { Container, Row } from 'mdbreact';
import LoggedIn from "../components/LoggedIn"; 

class UI extends Component {
	
	render() {

		return (
<LoggedIn >
<Container className="my-5">
<h4>this is ui page</h4>
			</Container>
			</LoggedIn>
		);
	};
}


export default UI;



