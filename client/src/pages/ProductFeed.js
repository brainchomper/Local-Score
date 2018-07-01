import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Button } from 'mdbreact';
import axios from 'axios';

class ProductFeed extends Component {
	constructor (props) {
		super(props) 
		this.state = {
			dataState : null
		}
	};

  componentDidMount() {
		//call the api 
// axios.get("/api/transactionfeed").then((res) => console.log('asjdf'))
console.log("Howdy");
axios.get("api/transactionfeed/").then(data => console.log(data));

// ,  (data) => 
// {this.setState({dataState: response}
// )
// console.log('hello')}) 
		//does this work?
		
	};

	test() {
		console.log('howdy');
		const yas = "fghjkuytgyujbgu";
		console.log(yas)
	}
	// render statement
	render() {
		return (
			<div>
			<p>
We need to put a loading gif in here or something			</p>
		{this.state.dataState === null ? "" : "There is data, placeholder for a callback on the response const"   } 
			</div>
		)
	}

}

export default ProductFeed;