import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import "./Login.css";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
const axios = require('axios');



class FormsPage extends React.Component {
	render() {
		
		const responseGoogle = (response) => {
			console.log(response);
			const {profileObj} = response
			const {familyName, givenName, googleId, imageUrl} = profileObj;
			const user = {
				FirstName: givenName,
				LastName: familyName,
				SocialKey:googleId,
				Picture: imageUrl
			}
			axios.put("/api/users/UserLogin", {user}).then(console.log("herpderp"))
		}

		return (
			<Container className="mx-auto">
				<section className="form-dark">
					<Card className="card-image animated hoverable" style={{ backgroundImage: 'url(../../../public/img/coffee-login.png)' }}>
						<div className="text-white rgba-stylish-light py-5 px-5 z-depth-4">
							<div className="text-center">
								<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a className="green-text font-weight-bold"><strong> UP</strong></a><strong> /</strong><a className="green-text font-weight-bold"><strong> IN</strong></a></h3>
							</div>
							<Input className=" animated hoverable text-white" label="Your email" group type="text" validate />
							<Input label="Your password" className="animated hoverable text-white" group type="password" validate />
							<div className="md-form pb-3">
								<div className="form-check my-4">
									<input className="form-check-input" type="checkbox" value="" id="defaultCheck17" />
									<label className="form-check-label white-text" htmlFor="defaultCheck17">Accept the<a href="#" className="green-text font-weight-bold"> Terms and Conditions</a></label>
								</div>
							</div>
							<Row className="d-flex align-items-center mb-4">
								<div className="text-center mb-3 col-md-12">
									<Button color="success" rounded type="button" className="btn-block z-depth-1  animated hoverable">Sign in</Button>
								</div>
							</Row>
							<Col md="12">
								<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2 white-text"> or Sign in with:</p>
								<div className="row my-3 d-flex justify-content-center">
									<Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
									
									<GoogleLogin
										clientId="159481047934-p3svhsktles2sgevg3rg2iab3dlgkd3a.apps.googleusercontent.com"
										buttonText="Login"
										onSuccess={responseGoogle}
										onFailure={responseGoogle}
									/>
								</div>
							</Col>
						</div>
					</Card>
				</section>
			</Container>
		);
	}
};

export default FormsPage;