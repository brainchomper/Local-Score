import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
const axios = require("axios");

class FormsPage extends React.Component {
	constructor(props){
	super(props)
	
	this.state = {
		FirstName: "",
		LastName: "",
		SocialKey: "",
		Image: ""
	}
};
	
	submit = event => {
		event.preventDefault();
		const user = {
			FirstName: this.state.FirstName,
			LastName: this.state.LastName,
			SocialKey: this.state.SocialKey,
			Image: this.state.Image
		}
		axios.put("/api/transactions/newUser", {user } ).then(results => console.log("results", results));
	}

	render() {
		return (
			<Container>
				<Row>
					<Col md="6">
						<form>
							<p className="h4 text-center mb-4">User Creation</p>
							<label htmlFor="fName" className="grey-text">First Name</label>
							<input type="text" id="fName" className="form-control" />
							<br />
							<label htmlFor="lName" className="grey-text">Last Name</label>
							<input type="text" id="lName" className="form-control" />
							<br />
							<label htmlFor="social" className="grey-text">Social Key</label>
							<input type="text" id="social" className="form-control" />
							<br />
							<label htmlFor="image" className="grey-text">Image</label>
							<input type="text" id="image" className="form-control" />
							<div className="text-center mt-4">
								<button className="btn btn-outline-warning" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
							</div>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default FormsPage;