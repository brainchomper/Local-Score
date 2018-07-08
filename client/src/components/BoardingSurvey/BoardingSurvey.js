import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input, FormInline } from 'mdbreact';
import axios from "axios";


class BoardingSurvey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ProductName: "",
			Roast: "DARK",
			Ground: false
		}
		this.onClick1 = this.onClick1.bind(this);
		this.onClick2 = this.onClick2.bind(this);
		this.onClick3 = this.onClick3.bind(this);
		this.onClick4 = this.onClick4.bind(this);

	}

	onClick1() {
		this.setState({ Roast: "DARK" });
	}

	onClick2() {
		this.setState({ Roast: "LIGHT" });
	}

	onClick3() {
		// sets the ground boolean to true
		this.setState({ Ground: true });
	}
	onClick4() {
		//sets the ground boolean to false
		this.setState({ Ground: false });
	}

	handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

	submitProduct = event => {
		//prevent the button from reloading the page
		event.preventDefault();
		// destructure the state
		const {ProductName, Roast, Ground} = this.state
		//use the state to build an object to pass through the call
		const newProduct = {
			Name: ProductName,
			Roast: Roast,
			Ground: Ground,
			CreatedBy: "Need to pass from parent"
		};
		axios.post("/api/products/newProduct", {newProduct})
				 .then(results => {console.log(results);
					console.log("This is where Kevin's sideover thing will come in")
				})
		
	}

	render() {
		return (
			<Container>
				<Card>
					{/* product name */}
<div className="row">
<div className="col">
<Input name="ProductName" value={this.state.ProductName} onChange={this.handleInputChange} placeholder="Enter Product Name Here"/>
</div>
</div>

					{/* type */}
					<div className="row">
					<div className="col-6 text-center">
						<h6>Roast:</h6>
						<Input onClick={this.onClick1} checked={this.state.Roast === "DARK" ? true : false} label="Dark Roast" type="radio" id="dark"  />
						<Input onClick={this.onClick2} checked={this.state.Roast === "LIGHT" ? true : false} label="Light Roast" type="radio" id="light" />
					</div>
					<div className="col-6 text-center">
					<h6>Grind Type:</h6>
						<Input onClick={this.onClick3} checked={this.state.Ground ? true : false} label="Ground" type="radio" id="ground" />
						<Input onClick={this.onClick4} checked={!this.state.Ground ? true : false} label="Whole Bean" type="radio" id="whole"  />
					</div>
					</div>
					<Button block color="primary" onClick = {this.submitProduct}>Submit Product</Button>
				</Card>
			</Container>

		);
	}
}


export default BoardingSurvey;