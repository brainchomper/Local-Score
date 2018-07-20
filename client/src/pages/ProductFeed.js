import React, { Component } from 'react';
import axios from 'axios';
import CompletedList from './CompletedList';
import { localCheck } from '../utils/LocalStorage';


class ProductFeed extends Component {
	constructor(props) {
		super(props)
		this.updateParentState = props.propFn.bind(this);
		this.updateParentLogin = this.updateParentLogin.bind(this);
			console.log(this.updateParentState)
		this.state = {
			COMPLETED: [],
			queriesComplete: false,
			FirstName: "",
			LastName: "",
			Picture: "",
			userID: ""
		}
	};

	updateParentLogin = (FirstName, LastName, Picture, _id) => {
		this.updateParentState(true, FirstName, LastName, _id, Picture)
	}

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			axios
				.get("/api/transactions/feed")
				.then(queryResults =>{
					console.log(fn, ln, p, id)
					console.log("fn, ln, p, id")
					this.setState({
						FirstName: fn,
						LastName: ln,
						Picture: p,
						userID: id,
						COMPLETED: queryResults.data,
						queriesComplete: true
					}, this.updateParentLogin( fn, ln, p, id)
					)})
		})

	}
	// render statement
	render() {
		return <CompletedList props={this.state} propFn = {this.updateParentState} />
	}
}


export default ProductFeed;