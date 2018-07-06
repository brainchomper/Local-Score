import React, { Component } from 'react';
import { Container, Row, Col, Fa, CardFooter, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import Link from 'react-router-dom';

export const PWOO = props => {
	const { data } = props;
	const { Party2, Product } = data;
	const groundState = Product.Ground ? "ground" : "not ground";
	const HistoryURL = ("/ProductHistoryFeed/" + Product._id);
	<Container style={{ maxWidth: '80%' }}>
		<Card cascade>
			<CardBody cascade>
				<CardTitle>Transaction {data._id}</CardTitle>
				<CardText>You are currently waiting on {FirstName} {LastName} to approve this transaction of purchasing {Product.Name} for {data.Price}.</CardText>
				<CardText>{Product.Name} is a {Product.Roast} coffee that is {groundState}.</CardText>Í
				<Link>See all transactions associated with this product</Link>
			</CardBody>
			<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
				<ul className="list-unstyled list-inline font-small">
					<li className="list-inline-item pr-2 white-text"><Fa icon="clock-o"></Fa> 05/10/2015</li>
				</ul>
			</div>
		</Card>
	</Container>

}

export default PWOO;