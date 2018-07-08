import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Button, CardBody, CardTitle, InputNumeric } from 'mdbreact';
import {PlaceHolderProducts, PlaceHolderUsers, ProductDropDown, UserDropDown} from '../../components/DropDownItems';
const axios = require('axios');


class TransactionPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			CustomerDropdown: false,
			ProductDropdown: false,
			OtherUsers: [],
			UsersAvailable: false,
			Products: [],
			ProductsAvailable: false,
		};
	}
	toggle() {
		this.setState({
			CustomerDropdown: !this.state.CustomerDropdown,
			ProductDropdown: !this.state.ProductDropdown
		});
	}

	componentDidMount() {
		// check if the users are available.  if they are not, then go get them
		this.state.usersAvailable ? console.log("Users available now") : this.getUsers ;
		//then check if the products are available.  if they aren't then go get them. 
		this.state.productsAvailable ? console.log("Products available now") : this.getProducts ;
	}

	getUsers() {
		axios
		.get("/api/users/All")
		.then(userResults => {
			this.setState({
				OtherUsers: userResults,
				UsersAvailable: true
			})
	})}

	getProducts() {
		axios
		.get("/api/products/All")
		.then(productResults => {
			this.setState({
				Products: productResults,
				ProductsAvailable: true
			})
		})
	}

	renderUserOptions(){
		return	this.state.OtherUsers.map(eachUser => <UserDropDown data = {eachUser}/>)
	}

	renderProductOptions(){
		return this.state.Products.map(eachProduct => <ProductDropDown data = {eachProduct} />)
	}

	render() {
		return (
			<div className="row mx-auto"  style={{ maxWidth: '50%' }}>
			<div className="col mt-4">
			<Card>
				<CardBody>
					<CardTitle className="text-center">Create New Transaction</CardTitle>

					<div className="row text-center">
						<div className="col">
							<Dropdown isOpen={this.state.CustomerDropdown} toggle={this.toggle} size="lg">
								<DropdownToggle caret color="primary">
									Customer
          </DropdownToggle>
								<DropdownMenu>
									{this.state.usersAvailable ?  this.renderUserOptions : <PlaceHolderUsers /> }
								</DropdownMenu>
							</Dropdown>
						</div>
						<div className="col">
							<Dropdown isOpen={this.state.ProductDropdown} toggle={this.toggle} size="lg">
								<DropdownToggle caret color="primary">
									Product
          </DropdownToggle>
								<DropdownMenu>
									{this.state.ProductsAvailable ? this.renderProductOptions : <PlaceHolderProducts />}
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>

					<h3 className="text-center">Item Price $</h3>
					<InputNumeric precision={2} value={10} step={0.01} className="mb-2" color="success"/>

					<Button block color="success" size="lg" href="#">Submit New Transaction</Button>
				</CardBody>

			</Card>
			</div>
			</div>
			

		);
	}
}
export default TransactionPage;