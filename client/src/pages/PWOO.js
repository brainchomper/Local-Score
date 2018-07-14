import React from 'react';
import { Container, Fa,  CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import {Link} from 'react-router-dom';
const axios = import("axios");

export const PWOO = props => {
	const { data } = props;
	const { Party2, ProductID } = data;
	console.log(data)
	console.log("/././././././././././.")
	const groundState = ProductID.Ground ? "ground" : "not ground";
	const HistoryURL = ("/ProductHistoryFeed/" + ProductID._id);
	const RejectURL = ("/api/transactions/rejectTxn/" + data._id);

	// const rejectTxn = () => axios.post(RejectURL).then( response =>console.log("Modal Pop", response));
return (
	<Container style={{ maxWidth: '80%' }}>
		<Card cascade>
			<CardBody cascade>
				<CardTitle>Transaction {data._id}</CardTitle>
				<CardText>You are currently waiting on {Party2.FirstName} {Party2.LastName} to approve this transaction of purchasing {ProductID.Name} for {data.Price}.</CardText>
				<CardText>{ProductID.Name} is a {ProductID.Roast} coffee that is {groundState}.</CardText>Í
				<Link to={HistoryURL}>See all transactions associated with this product</Link>
				<Button>Reject This Transaction </Button>
			</CardBody>
			<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
				<ul className="list-unstyled list-inline font-small">
					<li className="list-inline-item pr-2 white-text"><Fa icon="clock-o"></Fa> 05/10/2015</li>
				</ul>
			</div>
		</Card>
	</Container>
)
}
export default PWOO;