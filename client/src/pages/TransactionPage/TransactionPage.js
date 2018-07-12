import React from 'react';
import { Card, Button, CardBody, CardTitle, InputNumeric } from 'mdbreact';
import UserAutoSearch from "../../components/UserAutoSearch";
import ProductAutoSearch from "../../components/ProductAutoSearch";
const axios = require('axios');


class TransactionPage extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.cLogState = this.cLogState.bind(this);
		this.updateCustomer = this.updateCustomer.bind(this);
		this.updateProduct = this.updateProduct.bind(this);
		this.submitTxn = this.submitTxn.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.state = {
			CustomerLock: false,
			ProductLock: false,
			PriceLock: false,
			Price: 10,
			Customer: "",
			Product: "",
			Party1: "5b45699cc4777613b8084d18"
		};
	}

	cLogState() {
		console.log("the state is currently:");
		console.log(this.state)
	}

	updateCustomer = (thing) => {
		console.log("updating the customer", thing)
		this.setState({
			Customer: thing,
			CustomerLock: true
		})
	};

	updateProduct = (thing) => {
		console.log("updating the product", thing)
		this.setState({
			Product: thing,
			ProductLock: true
		})
	}

	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value
		});
	};

	submitTxn() {
		// destructure
		console.log(this.state)
		const { Price, Customer, Product, ProductLock, CustomerLock, PriceLock } = this.state;
		//check if the user has locked in their product and customer and price
		if (ProductLock && CustomerLock && PriceLock) {
			// run the api query to post the transaction
			const newTxn = {
				Party1: "Pull me in",
				Party2: Customer,
				ProductID: Product,
				Price: 10
			}
			return axios
				.post("/api/transactions/newTransaction", { newTxn })
				.then(console.log("the txn posted correctly"))
		}
		else {
			return console.log("not everything is locked yet")
		}

	}

	render() {
		return (

			<div className="row mx-auto" style={{ maxWidth: '50%' }}>
				<div className="col mt-4">
					<Card>
						<CardBody>
							<CardTitle className="text-center">Create New Transaction</CardTitle>
							<hr />
							<div className="row text-center">
								<div className="col">
									<h4>Select User</h4>
									<UserAutoSearch updateCustomer={this.updateCustomer} userId={this.state.Party1} />
								</div>
								<div className="col">
									<h4>Select Product</h4>

									<ProductAutoSearch updateProduct={this.updateProduct} />
								</div>
							</div>

							<h5 className="text-center">Item Price $</h5>
							<InputNumeric name="Price" precision={2} value={this.state.Price} step={0.01} className="mb-2" color="success" />

							<Button block color="success" size="lg" onClick={this.submitTxn}>Submit New Transaction</Button>
						</CardBody>

					</Card>
				</div>
			</div>


		);
	}
}
export default TransactionPage;