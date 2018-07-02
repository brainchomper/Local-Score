import {React, Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import BoardingSurvey from "../../components/BoardingSurvey";
import SellingSurvey from "../../components/SellingSurvey";
import TransformingSurvey from "../../components/TransformingSurvey";
const axios = require('axios');



class TransactionPage extends Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
			dropdownValue: "Select a Value",
			txnDetails: {
				item: "",
				price: "",
				customer: ""
			},
			userVerified: false,
			q1Answered: false,
			allCustomers: []
		}
	};

	componentDidMount (){
		axios.get("/api/Users/all")
		.then(usersData => {
			this.setState( {allCustomers: usersData})
		} )
	};

	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value
		});
	};

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	};

	surveyRender(stateEval) {
		switch (stateEval) {
			case "Boarding":
				return <BoardingSurvey data ={this.handleInputChange} />;
				break;
			case "Selling":
				return <SellingSurvey data ={this.handleInputChange} />;
				break;
			case "Transforming":
				return <TransformingSurvey data ={this.handleInputChange} />
				break;
			default:
				return console.log("The " + stateEval + "hasn't been set yet.")
				break;
		}
	};


	render() {
		return (
			<Container>
				<h2>
					Will You Be Selling the Product, Boarding It, or Transforming it?
			</h2>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret color="primary">
						{this.state.dropdownValue}
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem value="Boarding" onClick={this.setState({ surveyValue: "Boarding" })} >Boarding Product (I originate this item or bought it from a vendor not using localScore)</DropdownItem>
						<DropdownItem value="Selling" onClick={this.setState({ surveyValue: "Selling" })}>Selling Product (Selling an Existing Product I Own to my Customer)</DropdownItem>
						<DropdownItem value="Transforming" onClick={this.setState({ surveyValue: "Transforming" })}>Transforming Product (I am taking a product and altering it) </DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Row>
			{this.surveyRender(this.state.dropdownValue, this.handleInputChange)}
				</Row>
			</Container>
		)
	}


};
export default TransactionPage;
