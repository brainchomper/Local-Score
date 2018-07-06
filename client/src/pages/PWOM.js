import React, { Component } from 'react';
import { Container, Row, Col, Fa, CardFooter, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import Link from 'react-router-dom';

export const PWOM = props => {
	const { data } = props;
	const { Party1, Product } = data;
	const groundState = Product.Ground ? "ground" : "not ground";
	const HistoryURL = ("/ProductHistoryFeed/" + Product._id);
	<Container style={{ maxWidth: '80%' }}>
		<Card cascade>
			<CardBody cascade>
				<CardTitle>Transaction {data._id}</CardTitle>
				<CardText>{FirstName} {LastName} is currently waiting on you to approve this transaction of purchasing {Product.Name} for {data.Price}.</CardText>
				<CardText>{Product.Name} is a {Product.Roast} coffee that is {groundState}.</CardText>
				<Link>See all transactions associated with this product</Link>
				<Row>
					<CardText>I verify that this transaction is correct:</CardText>
					<Button tag="a" floating gradient="blue"><Fa icon="check" /></Button>
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