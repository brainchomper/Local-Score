import React from 'react';
import TransactionFeed from "./TransactionFeed";
import BoardedFeed from "./BoardedFeed";

const CompletedList = props => {
	if (props.props.queriesComplete === true && typeof props.props.COMPLETED !== "undefined") {
		console.log(props, "props in the completed list")
		return props.props.COMPLETED.map((each, i) => {
			console.log(each, i)

			if (each.Party1._id !== each.Party2._id){
				return <TransactionFeed data={each} key = {i} />
			}

			return <BoardedFeed data = {each} key = {i} />
		})
	} else {
		return <div>You haven't completed any transactions yet.</div>
	}
}
export default CompletedList;