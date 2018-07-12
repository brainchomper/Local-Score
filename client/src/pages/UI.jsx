import React, { Component, ReactFragment } from 'react';
import { Container, Row } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import SideBar from "./SideBar";
import ProductFeed from "./ProductFeed";
import TeamPage from './TeamPage';
import Landing from '../components/Landing';
import Account from './Account.js';
import TransactionPage from "./TransactionPage";
import BoardingSurvey from "../components/BoardingSurvey"




class UI extends Component {
	
	render() {
		{console.log(this.props.props)}
		if (!this.props.props.LoggedIn) {
			return (<Redirect to="/" />)
		} else {
			return (
<SideBar> 
<Container className="mt-5">


</Container>

</SideBar>

		);
	};
}}


export default UI;



