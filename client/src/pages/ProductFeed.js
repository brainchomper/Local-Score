import React, { Component } from 'react';
import axios from 'axios';
import  CompletedList  from './CompletedList';


class ProductFeed extends Component {
	constructor(props) {
		super(props)
		console.log(props)
		const params = this.props.match.params.id

		this.state = {
			COMPLETED: [],
			params: params,
			userID: "",
			queryResults: false
		}
	};

	componentDidMount() {
		//call the api 
		console.log("the params of the page rendering (AKA /transactionfeed/:id", this.props.match.params.id)
		console.log("Howdy");
		axios
			.get("/api/transactions/feed")
			.then(queryResults =>
				this.setState({
					COMPLETED: queryResults.data,
					queriesComplete: true
				}))
	}
// render statement
render() {
	return (
		<CompletedList props={this.state} />
		)
	}
}


export default ProductFeed;