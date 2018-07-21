import React from 'react';
import { Container } from 'mdbreact';
import TransactionFeed from "./TransactionFeed";
import BoardedFeed from "./BoardedFeed";

const HistoryList = props => {
	if (props.props.queriesComplete === true && typeof props.props.Products !== "undefined") {

		return props.props.Products.map((each, i) => {
			if (each.Party1._id !== each.Party2._id){
				return <TransactionFeed data={each} mid = {false} key = {i} />
			} else {
			return <BoardedFeed data = {each} key = {i} /> }

		})
	} else {
		return <div className="text-center">
		<img src="https://local-score.herokuapp.com/images/loading.png" alt="Loading" className="pt-6"/>

		</div>
	}
}
export default HistoryList;