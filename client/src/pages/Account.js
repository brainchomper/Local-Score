import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import AccountTabs from "./AccountTabs.js";
import TransactionFeed from "./TransactionFeed.js"
import TransactionPage from './TransactionPage/TransactionPage.js';

class ContactPage extends Component {
	render() {
		return (
			<Container>
				<AccountTabs />
<hr/>
				<TransactionFeed />

			</Container>
		);
	};
}

export default ContactPage;