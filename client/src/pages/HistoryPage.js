import React from 'react';
import HistoryList  from "./HistoryList";
// import { localCheck, getID } from "../utils/LocalStorage";
// const axios = require('axios');

class HistoryPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ParamsURL: "",
			Products: [],
			queriesComplete: false,
		};
	}

	componentDidMount() {
		console.log("/////")
		console.log(this.props)

			// const ParamsURL = "api/transactions/" + params.productid
			// console.log(ParamsURL)
			// axios
			// 	.get(ParamsURL)
			// 	.then(results => {
			// 		const { data } = results;
			// 		console.log(data)
			// 		console.log("-------------------")
			// 		console.log("-------------------")
			// 		console.log(data.nonRejects);
			// 		this.setState({
			// 			Products: data.nonRejects,
			// 			queriesComplete: true,
			// 			ParamsURL: "api/transactions/" + productid
			// 		})
				// })
		// }
	// )
	}
	render() {
		return ( <HistoryList props = {this.state} /> ) 
	}
}

export default HistoryPage;