import React from 'react';
import { Container, Row, Fa, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import {Link} from 'react-router-dom';
const axios = import("axios");


export const PWOM = props => {
	const {data} = props;
	const { Party1, ProductID } = data;
	const groundState = ProductID.Ground ? "ground" : "not ground";
	const HistoryURL = ("/ProductHistoryFeed/" + ProductID._id);
	const RejectURL = ("/api/transactions/rejectTxn/" + data._id);
	const AcceptURL = ("/api/transactions/acceptTxn/" + data._id);

	const rejectTxn = (RejectURL) => axios(RejectURL).then( response =>console.log("Modal Pop", response));

	const acceptTxn = (AcceptURL) => axios(RejectURL.then( response => console.log(response)));

	<Container style={{ maxWidth: '80%' }}>
		<Card cascade>
			<CardBody cascade>
				<CardTitle>Transaction {data._id}</CardTitle>
				<CardText>{Party1.FirstName} {Party1.LastName} is currently waiting on you to approve this transaction of purchasing {ProductID.Name} for {data.Price}.</CardText>
				<CardText>{ProductID.Name} is a {ProductID.Roast} coffee that is {groundState}.</CardText>
				<Link>See all transactions associated with this product</Link>
				<Row>
					<CardText>I verify that this transaction is correct:</CardText>
					<Button tag="a" floating gradient="blue" onClick = {this.acceptTxn(AcceptURL)}><Fa icon="check" /></Button>
					<Button onClick = {this.rejectTxn({RejectURL})}>Reject This Transaction </Button>

				</Row>
			</CardBody>
			<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
				<ul className="list-unstyled list-inline font-small">
					<li className="list-inline-item pr-2 white-text"><Fa icon="clock-o"></Fa> 05/10/2015</li>
				</ul>
			</div>
		</Card>
	</Container>
};

export default PWOM;