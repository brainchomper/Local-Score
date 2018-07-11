import React from 'react';
import TransactionFeed from "./TransactionFeed";

const CompletedList = props => {
	console.log("props in the CompletedList")
	console.log(props.props.queriesComplete)

	if (props.props.queriesComplete === true) {

		return props.props.COMPLETED.map((each, i) => {
			return <TransactionFeed data={each} key = {i} />
		})
	} else {
		return <div>Placeholder Div</div>
	}
}


export default CompletedList;