import React from 'react';
import TransactionFeed from "./TransactionFeed";
import BoardedFeed from "./BoardedFeed";

const CompletedList = props => {

	if (props.props.queriesComplete === true && typeof props.props.COMPLETED !== "undefined") {

		console.log(props, "props in the completed list")
		return props.props.COMPLETED.map((each, i) => {
			if (each.Party1._id !== each.Party2._id){
				return <TransactionFeed data={each} key = {i} />
			}

			return <BoardedFeed data = {each} key = {i} />
		})
	} else {
		return <div className="text-center">
					<img src="http://loacal-score.herokuapp.com/images/loading.gif" alt="Loading" className="pt-6"/>
		
					</div>
	}
}
export default CompletedList;