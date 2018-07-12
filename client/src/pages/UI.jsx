import React, { Component, ReactFragment } from 'react';
import { Container, Row } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import SideBar from "./SideBar";



class UI extends Component {
	
	render() {
		{console.log(this.props.props)}
		if (!this.props.props.LoggedIn) {
			return (<Redirect to="/" />)
		} else {
			return (
<SideBar> 
<Container>
</Container>

</SideBar>

		);
	};
}}


export default UI;



