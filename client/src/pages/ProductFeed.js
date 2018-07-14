import React, { Component } from 'react';
import axios from 'axios';
import CompletedList from './CompletedList';
import { localCheck } from '../utils/LocalStorage';


class ProductFeed extends Component {
	constructor(props) {
		super(props)
		console.log(this.state)

		this.state = {
			COMPLETED: [],
			queriesComplete: false,
			FirstName: "",
			LastName: "",
			Picture: "",
			userID: ""
		}
	};

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			console.log(id)
			axios
				.get("/api/transactions/feed")
				.then(queryResults =>{
					console.log(queryResults.data)
					this.setState({
						FirstName: fn,
						LastName: ln,
						Picture: p,
						userID: id,
						COMPLETED: queryResults.data,
						queriesComplete: true
					}
					)})
		})

	}
	// render statement
	render() {
		return <CompletedList props={this.state} />
	}
}


export default ProductFeed;