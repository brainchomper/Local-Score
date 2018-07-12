import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Button, CardBody, CardTitle, InputNumeric } from 'mdbreact';
import {PlaceHolderProducts, PlaceHolderUsers, ProductDropDown, UserDropDown} from '../../components/DropDownItems';
import UserAutoSearch from "../../components/UserAutoSearch";
import ProductAutoSearch from "../../components/ProductAutoSearch";
const axios = require('axios');


class TransactionPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggleProduct = this.toggleProduct.bind(this);
		this.cLogState = this.cLogState.bind(this);
		this.updateCustomer = this.updateCustomer.bind(this);
		this.updateProduct = this.updateProduct.bind(this);
		this.state = {
			CustomerLock: false,
			ProductLock: false,
			Price: "",
			Customer: "",
			Product: "",
			Party1: "pass me from state"
		};
	}
	toggle() {
		this.setState({
			CustomerDropdown: !this.state.CustomerDropdown,
		});
	}
	toggleProduct() {
		this.setState({
			ProductDropdown: !this.state.ProductDropdown,
		});
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
			Product : thing,
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
		const { Price, Customer, Product } = this.state;
		const newTxn = {
			Party1: "Pull me in",
			Party2: Customer,
			ProductID: Product,
			Price: ""
		}
		axios
			.post("/api/transactions/newTransaction", { newTxn })
			.then(console.log("the txn posted correctly"))
	}

	render() {
		return (

			<div className="row mx-auto"  style={{ maxWidth: '50%' }}>
			<div className="col mt-4">
			<Card>
				<CardBody>
					<CardTitle className="text-center">Create New Transaction</CardTitle>
<hr/>
					<div className="row text-center">
						<div className="col">
						<h4>Select User</h4>
						<UserAutoSearch updateCustomer = {this.updateCustomer}/>
						</div>
						<div className="col">
						<h4>Select Product</h4>

						<ProductAutoSearch updateProduct = {this.updateProduct} />
						</div>
					</div>

					<h5 className="text-center">Item Price $</h5>
							<InputNumeric name="Price" precision={2} value={10} step={0.01} className="mb-2" color="success" onChange={this.handleInputChange} />

							<Button block color="success" size="lg" onClick={this.cLogState}>Submit New Transaction</Button>
						</CardBody>

					</Card>
				</div>
			</div>


		);
	}
}
export default TransactionPage;