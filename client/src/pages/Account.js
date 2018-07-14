import React, { Component } from 'react';
import { Container, Row, Col, Button, Section} from 'mdbreact';
import AccountTabs from "./AccountTabs.js";


class ContactPage extends Component {
	render() {
		return (
			<Container className="pt-2">
			<section className="text-center" >
						<h1 className="h1-responsive font-weight-bold text-center my-5 mt-3">Get Started</h1>
						<Row>
							<Col><a href="/new-product" className="mx-auto">
							<Button size="lg" color="info" rounded>Create A Product</Button>
						</a></Col>
							<Col><a href="/transactions" className="mx-auto">
							<Button size="lg" color="success" rounded>Start A Transaction</Button>
						</a></Col>
							
						</Row>
					</section>
				<AccountTabs />
			</Container>
		);
	};
}

export default ContactPage;