import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card } from 'mdbreact';
import "./Login.css";
import { Redirect, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { setLocal } from '../utils/LocalStorage';
const axios = require('axios');

class FormsPage extends React.Component {
	constructor(props) {
		super(props)
		console.log("Here are the props")
		console.log(props)
		this.responseGoogle = this.responseGoogle.bind(this);
	}

	updateParentLogin = (FirstName, LastName, Picture, _id) => {
		this.props.propFn(true, FirstName, LastName, _id, Picture)
	}

	responseGoogle = (response) => {
		console.log(response);
		const { profileObj } = response
		const { familyName, givenName, googleId, imageUrl, email } = profileObj;
		const user = {
			FirstName: givenName,
			LastName: familyName,
			SocialKey: googleId,
			Picture: imageUrl,
			Email: email
		}
		axios
			.put("/api/users/UserLogin", { user })
			.then(response => {
				if (response.validate = true) {
					// { this.LoginUserState(response, true) }
					console.log("ugh")
					console.log(this.props.propFn);
					const { data } = response;
					console.log(data)
					const { FirstName, LastName, Picture, _id } = data;
					const LSUserValues = {
						fn: FirstName,
						ln: LastName,
						p: Picture,
						id: _id
					}
					setLocal("localScoreLoggedIn", true);
					setLocal("LSUserValues", JSON.stringify(LSUserValues))
					this.updateParentLogin(FirstName, LastName, Picture, _id)
				} else (console.log("the user login was unsuccesful"))
			}
			)
	}
	render() {
		return (
			<Container className="mx-auto">
				<section className="form-dark">
					<Card className="card-image animated hoverable" style={{ backgroundImage: 'url(images/coffee-beans.jpg)' }}>
						<div className="text-white rgba-stylish-light py-5 px-5 z-depth-4">
							<div className="text-center">
								<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> / <strong> IN</strong></h3>
								<div className="row my-3 d-flex justify-content-center">
								
									<GoogleLogin
										clientId="159481047934-p3svhsktles2sgevg3rg2iab3dlgkd3a.apps.googleusercontent.com"
										buttonText="Login With Google"
										onSuccess={this.responseGoogle}
										onFailure={this.responseGoogle}
									/>
								</div>
							</div>

							<Input className=" animated hoverable text-white" label="Your email" group type="text" validate />
							<Input label="Your password" className="animated hoverable text-white" group type="password" validate />

							<Row className="d-flex align-items-center mb-4">
								<div className="text-center mb-3 col-md-12">
									<Button color="success" size="lg"rounded type="button" className="btn-block z-depth-1 hoverable">Sign in</Button>
									<div className="text-center">
										<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>NOT A MEMBER?</strong></h3>
									</div>
									<Button color="primary" size="lg" block href="/register" rounded type="button" className="btn-block z-depth-1 hoverable">Register</Button>
								{/* <Link to="/register"> </Link> */}
								{/* <div className="text-center">
									<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>OR</strong></h3>
								</div> */}
								</div>
							</Row>
							<Col md="12">
								
								{/* <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2 white-text"> or Sign in with:</p> */}

							</Col>
						</div>
					</Card>
				</section>
			</Container>
		);
	}
};

export default FormsPage;