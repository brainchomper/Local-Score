import React, { Component } from 'react';
import { Container, Row, Button } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import TeamPage from '../../pages/TeamPage';
import {localCheck} from "../../utils/LocalStorage"



class FeaturesPage extends Component {

	componentDidMount() {
		// localCheck()
		console.log(localStorage.getItem("LSUserValues"))
	}

	render() {
		if (this.props.props.LoggedIn) {
			return (<Redirect to="/welcome" />)
		} else {
			return (
				<Container className="pt-1">
				{console.log(this.props.props)}
					<section  className="text-center"  >
						<img className="pt-3 pb-2" src="./images/main-logo-light-bk-bg.png" alt="Local Score"/>
						<p className="lead grey-text w-responsive text-center mx-auto mb-5">Local Score is an early stage web app and platform for recording transactions.  Eventually the goal is to expand the website to implement full blockchain capabilities, but for now it is a social platform broadcasting coffee products to buyers and suppliers.</p>
						<Row>
							<a href="/login" className="mx-auto">
							<Button size="lg" color="primary" rounded outline>Login and learn more</Button>
								
						</a>
						</Row>
					</section>
					<hr/>
					<TeamPage />
				</Container>

			);
		}
	};
}

export default FeaturesPage;