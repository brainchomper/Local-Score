import React from 'react';
import { Container, Row, Col, Input, Button, Card } from 'mdbreact';
import "./Login.css";
import { Link, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { setLocal, checkLogin } from '../utils/LocalStorage';
const axios = require('axios');

class FormsPage extends React.Component {
	constructor(props) {
		super(props)
		console.log("Here are the props")
		console.log(props)
		this.responseGoogle = this.responseGoogle.bind(this);
		this.updateParentState = props.propFn.bind(this);
		this.updateParentLogin = this.updateParentLogin.bind(this);
		this.cLog = this.cLog.bind(this)
		this.loginManually = this.loginManually.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		console.log("uuuuuuuu", this.updateParentLogin)
		this.state = {
			reload: false,
			Email: "",
			Password: "",
		}
	}

	componentDidMount() {
		checkLogin()
	}
	
	updateParentLogin = (FirstName, LastName, Picture, _id) => {
		this.updateParentState(true, FirstName, LastName, _id, Picture)
	}

	handleInputChange  =(event) => {
		const { name, value } = event.target;
		this.setState({
      [name]: value
    });
	}	

	loginManually = () => {
		const {Email, Password } = this.state;
		const valueSubmit = {
			Email: Email,
			Password: Password
		}
		axios
		.put("/api/users/passwordLogin", {valueSubmit})
		.then( response =>{
			if (response.validate){
				console.log("Response for password", response)
			}
		})
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
					setLocal("localScoreLoggedIn", true);;
					setLocal("LSUserValues", JSON.stringify(LSUserValues));
					this.updateParentLogin(FirstName, LastName, Picture, _id);
					console.log("????")
					console.log(this.state)
					this.setState({
						reload: true
					})
				} else (console.log("the user login was unsuccesful"))
			}
			)
	}

	cLog() {
		console.log(this.state)
	}
	render() {
		if (this.state.reload === false ) {
		return (
			<Container className="mx-auto">
			<Button onClick = {this.cLog}> Loggin state </Button>
				<section className="form-dark">
					<Card className="card-image animated hoverable" style={{ backgroundImage: 'url(images/coffee-beans.jpg)' }}>
						<div className="text-white rgba-stylish-light py-5 px-5 z-depth-4">
							<div className="text-center">
								<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> / <strong> IN</strong></h3>
								<div className="row my-3 d-flex justify-content-center">
								

								
								<Col md="6">
									
										<GoogleLogin
											clientId="159481047934-p3svhsktles2sgevg3rg2iab3dlgkd3a.apps.googleusercontent.com"
											buttonText="Login With Google"
											onSuccess={this.responseGoogle}
											onFailure={this.responseGoogle}
										/>
									
								</Col>
								
							</div>

							<Input className=" animated hoverable text-white" label="Your email" group type="text" validate name = "Email" value = {this.state.Email} onChange = {this.handleInputChange}/>
							<Input label="Your password" className="animated hoverable text-white" group type="password" validate name="Password" value = {this.state.Password} onChange = {this.handleInputChange}/>

							<Row className="d-flex align-items-center mb-4">
							<Col>
								<div className="text-center mb-3 col-md-12">
									<Button color="success" size="lg"rounded type="button" className="btn-block z-depth-1 hoverable" onClick = {this.loginManually}>Sign in</Button>
									</div>
									<div className="text-center">
										<h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>NOT A MEMBER?</strong></h3>
										<Button color="primary" size="lg" block href="/register" rounded type="button" className="btn-block z-depth-1 hoverable">Register</Button>
									</div>
									</Col>
							</Row> 
						</div>
						</div>
					</Card>
				</section>
			</Container>
		);}
		else {
			return ( <Redirect to ="/products" />)
		}
	}
};

export default FormsPage;