import React from 'react';
import { Container } from 'mdbreact';
import TransactionFeed from "./TransactionFeed";
import BoardedFeed from "./BoardedFeed";

const HistoryList = props => {
	if (props.props.queriesComplete === true && typeof props.props.Products !== "undefined") {

		return props.props.Products.map((each, i) => {
			if (each.Party1._id !== each.Party2._id) {
				return
				<Container>
				<div className="row">
					<div className="col text-center">
						<h3>Transaction History</h3>
					</div>
				</div>
					<TransactionFeed data={each} key={i} />
			</Container>
			}
			return <BoardedFeed data={each} key={i} />
		})
	} else {
		return <div>You haven't completed any transactions yet.</div>
	}
}
export default HistoryList;