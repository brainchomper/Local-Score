import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {
	state = {
		articles: [],
		q: "",
		start_year: "",
		end_year: "",
		message: "Search For Articles To Begin!"
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	getArticles = () => {
		// TODO: use the api util
	};

	render() {
		return (
			<div>HomePage</div>
		);
	}
}

export default Home;
