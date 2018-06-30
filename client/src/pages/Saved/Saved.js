import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		this.getSavedArticles();
	}

	getSavedArticles = () => {
		// TODO:
	};

	handleArticleDelete = id => {
		// TODO: 
	};

	render() {
		return (
			<div>Saved Page</div>
		);
	}
}

export default Saved;
