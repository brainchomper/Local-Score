import React, { Component } from 'react';
import axios from 'axios';
import CompletedList from './CompletedList';
import { Redirect } from 'react-router-dom';



class ProductFeed extends Component {
	constructor(props) {
		super(props)
		console.log(props)

		this.state = {
			COMPLETED: [],
			userID: "",
			queryResults: false
		}
	};

	componentDidMount() {
		//call the api 
		// console.log("the params of the page rendering (AKA /transactionfeed/:id", this.props.match.params.id)
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
		{console.log(this.props.props)}
		if (!this.props.props.LoggedIn) {
			return (<Redirect to="/" />)
		} else {
			return (
				<CompletedList props={this.state} />
			)
		}
	}
}


export default ProductFeed;