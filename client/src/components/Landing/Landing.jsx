import React, { Component } from 'react';
import { Container, Row } from 'mdbreact';
import { Redirect } from 'react-router-dom';



class FeaturesPage extends Component {
	render() {
		if (this.props.LoggedIn) {
			<Redirect to="/welcome" />
		} else {
		return (

			<Container className="my-5">
				<section >
					<h1 className="h1-responsive font-weight-bold text-center my-5 mt-3">Local Score</h1>
					<p className="lead grey-text w-responsive text-center mx-auto mb-5">Local Score is an early stage web app and platform for recording transactions.  Eventually the goal is to expand the website to implement full blockchain capabilities, but for now it is a social platform broadcasting coffee products to buyers and suppliers.</p>
					<Row>
						<a href="/login" className="mx-auto">
							Login Here and learn more.
						</a>
					</Row>
				</section>
			</Container>
		);}
	};
}

export default FeaturesPage;