import React from 'react';
import TransactionFeed from "./TransactionFeed";

const CompletedList = props => {

	if (props.props.queriesComplete === true && typeof props.props.COMPLETED !== "undefined") {

		return props.props.COMPLETED.map((each, i) => {
			return <TransactionFeed data={each} key = {i} />
		})
	} else {
		return <div>You haven't completed any transactions yet.</div>
	}
}


export default CompletedList;