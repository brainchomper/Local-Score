import React, { Component } from 'react';
import {Button} from 'mdbreact';
import axios from 'axios';
import {setLocal} from "../../utils/LocalStorage"
import classnames from 'classnames';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			FirstName: '',
			LastName: '',
			Email: '',
			Password: '',
			Password2: '',
			Errors: {}
		};
		this.cLogState = this.cLogState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	cLogState() {
		console.log("this.state = ")
		console.log(this.state)
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			FirstName: this.state.FirstName,
			LastName: this.state.LastName,
			Email: this.state.Email,
			Password: this.state.Password,
			Password2: this.state.Password2
		};

		if (newUser.Password != newUser.Password2) {
			return console.log("figure out the password")
		}

		axios
			.post('/api/users/register', { newUser })
			.then(response => {
				console.log(response);
				const {data} = response;
				const {FirstName, LastName, Picture, _id} = data;
					const LSUserValues = {
						fn: FirstName,
						ln: LastName,
						p: Picture,
						id: _id
					}
				setLocal("localScoreLoggedIn", true);

			})
			.catch(err => this.setState({ Errors: err.response.data }));
	}

	render() {
		const { Errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">
								Create your LocalScore account
              </p>
							<form noValidate onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										className={classnames('form-control form-control-lg', {
											'is-invalid': Errors.name
										})}
										placeholder="Name"
										name="FirstName"
										value={this.state.FirstName}
										onChange={this.onChange}
									/>
									{Errors.name && (
										<div className="invalid-feedback">{Errors.name}</div>

									)}
								</div>
								<div className="form-group">
									<input
										type="text"
										className={classnames('form-control form-control-lg', {
											'is-invalid': Errors.name
										})}
										placeholder="Last Name"
										name="LastName"
										value={this.state.LastName}
										onChange={this.onChange}
									/>
									{Errors.name && (
										<div className="invalid-feedback">{Errors.name}</div>

									)}
								</div>
								<div className="form-group">
									<input
										type="email"
										className={classnames('form-control form-control-lg', {
											'is-invalid': Errors.Email
										})}
										placeholder="Email Address"
										name="Email"
										value={this.state.Email}
										onChange={this.onChange}
									/>
									{Errors.Email && (
										<div className="invalid-feedback">{Errors.Email}</div>
									)}
									<small className="form-text text-muted">
										This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
								</div>
								<div className="form-group">
									<input
										type="password"
										className={classnames('form-control form-control-lg', {
											'is-invalid': Errors.Password
										})}
										placeholder="Password"
										name="Password"
										value={this.state.Password}
										onChange={this.onChange}
									/>
									{Errors.Password && (
										<div className="invalid-feedback">{Errors.Password}</div>
									)}
								</div>
								<div className="form-group">
									<input
										type="password"
										className={classnames('form-control form-control-lg', {
											'is-invalid': Errors.Password2
										})}
										placeholder="Confirm Password"
										name="Password2"
										value={this.state.Password2}
										onChange={this.onChange}
									/>
									{Errors.Password2 && (
										<div className="invalid-feedback">{Errors.Password2}</div>
									)}
								</div>

								<Button className="btn btn-info btn-block mt-4" onClick = {this.onSubmit} > Register Your Account</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
