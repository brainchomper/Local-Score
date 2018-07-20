import React from 'react';
import HistoryList from "./HistoryList";
import { localCheck, getID } from "../utils/LocalStorage";
const axios = require('axios');

class HistoryPage extends React.Component {
	constructor(props) {
		super(props);
		this.propFn = props.propFn
		this.searchID = this.props.match.params.productid
		this.state = {
			Products: [],
			queriesComplete: false,
		};
	}

	componentDidMount() {
		console.log("/////")
		console.log(this.props)

		const ParamsURL = "/api/transactions/findHistory/" + this.searchID
		console.log(ParamsURL)
		axios
			.get(ParamsURL)
			.then(results => {
				console.log(results)
				const { data } = results;
				this.setState({
					Products: data,
					queriesComplete: true,
				})
			})
	}

	render() {
		return (<HistoryList props={this.state} />)
	}
}

export default HistoryPage;