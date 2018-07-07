import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
const axios = require("axios");


class FormsPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			FirstName: "",
			LastName: "",
			SocialKey: "",
			Image: ""
		}
	};

	handleInputChange(event) {
		const target = event.target;
		const { name, value } = target;
		this.setState({
			[name]: value
		});
	}
	submit = event => {
		event.preventDefault();
		const user = {
			FirstName: this.state.FirstName,
			LastName: this.state.LastName,
			SocialKey: this.state.SocialKey,
			Image: this.state.Image
		}
		axios.put("/api/users/UserLogin", { user }).then(results => console.log("results", results));
	}

	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;

		// Updating the input's state
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();

		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
		this.setState({
			FirstName: "",
			LastName: "",
			SocialKey: "",
			Image: ""
		});
	}


	render() {
		return (
			<Container>
				<Row>
					<Col md="6">
						<form>
							<p className="h4 text-center mb-4">User Creation</p>
							<label htmlFor="FirstName" className="grey-text">First Name</label>
							<input type="text" id="FirstName" className="form-control"
								value={this.state.firstName}
								name="FirstName"
								onChange={this.handleInputChange}
							/>
							<br />
							<label htmlFor="LastName" className="grey-text">Last Name</label>
							<input type="text" id="LastName" className="form-control" value={this.state.LastName} name="LastName" onChange={this.handleInputChange} />
							<br />
							<label htmlFor="SocialKey" className="grey-text">Social Key</label>
							<input type="text" id="SocialKey" className="form-control" value={this.state.SocialKey} name="SocialKey" onChange={this.handleInputChange} />
							<br />
							<label htmlFor="Image" className="grey-text">Image</label>
							<input type="text" id="Image" className="form-control" value={this.state.Image} name="Image" onChange={this.handleInputChange} />
							<div className="text-center mt-4">
								<button className="btn btn-outline-warning" type="submit">Send<i className="fa fa-paper-plane-o ml-2" onClick={this.handleFormSubmit}></i></button>
							</div>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default FormsPage;