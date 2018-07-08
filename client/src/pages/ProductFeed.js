import React, { Component } from 'react';
import axios from 'axios';
import { TransactionFeed } from './TransactionFeed';

class ProductFeed extends Component {
	constructor (props) {
		super(props) 

		const params =  this.props.match.params.id

		this.state = {
			transactions : [],
			params: params
		}
	};
	renderTransactions = (dataSet) => dataSet.map(each => <TransactionFeed data = {each} />) 
  componentDidMount() {
		//call the api 
// axios.get("/api/transactionfeed").then((res) => console.log('asjdf'))
console.log("the params of the page rendering (AKA /transactionfeed/:id", this.props.match.params.id)
console.log("Howdy");

const paramParseURL = this.state.params === null ? "api/transactions/All" : ("api/transactions/" + this.state.params);

axios.get(paramParseURL).then(data => 
{this.setState({transactions: data})}
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