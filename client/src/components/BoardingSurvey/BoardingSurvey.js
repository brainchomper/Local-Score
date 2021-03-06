import React from 'react';
import { Container, Card, Button, Input } from 'mdbreact';
import { localCheck } from '../../utils/LocalStorage';
const axios = require('axios');


class BoardingSurvey extends React.Component {
	constructor(props) {
		super(props);
		this.onClick1 = this.onClick1.bind(this);
		this.onClick2 = this.onClick2.bind(this);
		this.onClick3 = this.onClick3.bind(this);
		this.onClick4 = this.onClick4.bind(this);
		this.updateParentState = props.propFn.bind(this);
		this.updateParentLogin = this.updateParentLogin.bind(this);

		this.state = {
			ProductName: "",
			Roast: "DARK",
			Ground: true,
			FirstName: "",
			LastName: "",
			Picture: "",
			userID: ""
		}

	}

	updateParentLogin = (FirstName, LastName, Picture, _id) => {
		this.updateParentState(true, FirstName, LastName, _id, Picture)
	}

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			this.setState(
				{
					FirstName: fn,
					LastName: ln,
					Picture: p,
					userID: id,
				}, this.updateParentLogin(fn, ln, p, id)
			)
		})
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
		const { ProductName, Roast, Ground, userID } = this.state;
		const npm = ProductName.toUpperCase()
		//use the state to build an object to pass through the call
		const newProduct = {
			Name: npm,
			Roast: Roast,
			Ground: Ground,
			CreatedBy: userID
		};
		axios.post("/api/products/newProduct", { newProduct })
			.then(results => {
				this.setState({
					ProductName: "",
					Roast: "DARK",
					Ground: true,
				})
			})
		// console.log("newproduct")
		// console.log(newProduct)
	}

	render() {
		return (
			<Container className="pt-3">
				<Card>
					{/* product name */}

					<div className="row px-5 text-center">
						<div className="col">
							<h4 className="pt-2">Add Product</h4>

							<Input type="text" name="ProductName" value={this.state.ProductName} onChange={this.handleInputChange} label="Enter Product Name Here" />
						</div>

					</div>

					{/* type */}
					<div className="row text-center">
						<div className="col-6">
							<h6>Roast:</h6>
							<Input onClick={this.onClick1} checked={this.state.Roast === "DARK" ? true : false} label="Dark Roast" type="radio" id="dark" />
							<Input onClick={this.onClick2} checked={this.state.Roast === "LIGHT" ? true : false} label="Light Roast" type="radio" id="light" />
						</div>
						<div className="col-6">
							<h6>Grind Type:</h6>
							<Input onClick={this.onClick3} checked={this.state.Ground ? true : false} label="Ground" type="radio" id="ground" />
							<Input onClick={this.onClick4} checked={!this.state.Ground ? true : false} label="Whole Bean" type="radio" id="whole" />
						</div>
					</div>

					<Button size="lg" color="success" rounded onClick={this.submitProduct}>Submit Product</Button>


					{/* <Button block color="primary" onClick={this.submitProduct}>Submit Product</Button> */}
				</Card>
			</Container>

		);
	}
}


export default BoardingSurvey;