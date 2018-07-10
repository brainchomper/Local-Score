import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';
import Alerts from "../components/Alerts";
import UserAutoSearch from "../components/UserAutoSearch";
import ProductAutoSearch from "../components/ProductAutoSearch";
import {Link} from 'react-router-dom';

class FeaturesPage extends Component {
	render() {
		return (
			<Container className="my-5">
				<section >
					<h1 className="h1-responsive font-weight-bold text-center my-5 mt-3">localScore</h1>
					<p className="lead grey-text w-responsive text-center mx-auto mb-5">localScore is an early stage web app and platform for recording transactions.  Eventually the goal is to expand the website to implement full blockchain capabilities, but for now it is a social platform broadcasting coffee products to buyers and suppliers.</p>
					<Row>
						<Link to = "/login" className = "mx-auto">
							Login Here and learn more.
						</Link>
					</Row>
				</section>
			</Container>
		);
	};
}

export default FeaturesPage;