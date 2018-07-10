import React from 'react';
import TransactionFeed from "./TransactionFeed";

const CompletedList = props => {
	console.log("props in the CompletedList")
	console.log(props)

	return props.data.data.map(each => {
		<TransactionFeed data = {each} />
	})
}

export default CompletedList;