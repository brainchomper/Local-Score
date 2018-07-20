import React, { Component } from 'react';
import { Container, Row, Col, Button, Section} from 'mdbreact';
import { Redirect } from 'react-router-dom';
import AccountTabs from "./AccountTabs.js";
import { localCheck } from '../utils/LocalStorage';


class ContactPage extends Component {
	constructor(props){
		super(props);
		this.updateParentState = props.propFn.bind(this);
		this.updateParentLogin = this.updateParentLogin.bind(this);
		console.log(props)
	}

	updateParentLogin = (FirstName, LastName, Picture, _id) => {
		this.updateParentState(true, FirstName, LastName, _id, Picture)
	}

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			this.updateParentLogin(fn, ln, id, p)
		})
	}

	render() {
		return (
			<Container className="pt-2">
			<section className="text-center" >
			<img className="pt-3 pb-2" src="./images/main-logo-light-bk-bg.png" alt="Local Score"/>

			
						<h2 className="h2-responsive font-weight-bold text-center p-2 ">Get Started</h2>
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