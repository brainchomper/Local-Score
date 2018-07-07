import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Button } from 'mdbreact';
import axios from 'axios';
import { TransactionFeed } from './TransactionFeed';

class ProductFeed extends Component {
	constructor (props) {
		super(props) 
		this.state = {
			transactions : []
		}
	};
	renderTransactions = (dataSet) => dataSet.map(each => <TransactionFeed data = {each} />) 
  componentDidMount() {
		//call the api 
// axios.get("/api/transactionfeed").then((res) => console.log('asjdf'))
console.log("Howdy");
axios.get("api/transactions/All").then(data => 
{this.setState({dataState: data})}
)
	};
	// render statement
	render() {
		return (
			<div>
			<p>
We need to put a loading gif in here or something			</p>
		{this.state.transactions.length === 0 ?  console.log("No Data"): this.renderTransactions(this.state.transactions)   } 
			</div>
		)
	}

}

export default ProductFeed;