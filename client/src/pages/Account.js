import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import AccountTabs from "./AccountTabs.js";

class ContactPage extends Component {
	render() {
		return (
			<Container>
				<AccountTabs />
			</Container>
		);
	};
}

export default ContactPage;