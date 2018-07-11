import React, { Component } from 'react';
import { Container } from 'mdbreact';
import AccountTabs from "./AccountTabs.js";
import TransactionFeed from "./TransactionFeed.js"

class ContactPage extends Component {
	render() {
		return (
			<Container>
				<AccountTabs />
				<hr />
			</Container>
		);
	};
}

export default ContactPage;