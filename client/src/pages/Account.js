import React, { Component } from 'react';
import { Container } from 'mdbreact';
import AccountTabs from "./AccountTabs.js";
import { localCheck } from '../utils/LocalStorage';


class ContactPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			FirstName: "",
			LastName: "",
			Picture: "",
			userID: ""
		}
	}

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			this.setState({
				FirstName: fn,
				LastName: ln,
				Picture: p,
				userID: id,
			}
			)
		})
	}
	render() {
		return (
			<Container>
				<AccountTabs idProp={this.state.userID} />
				<hr />
			</Container>
		);
	};
}

export default ContactPage;