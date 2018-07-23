import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp, Container } from 'mdbreact';

export const TransactionFeedHistory = props => {
	const { data } = props;
	const { Party1, Party2, ProductID } = data;

	return (
		<Container className="pb-3">
		<Card testimonial className = "">
			<div className="row">
				<div className="col d-inline-block">
					<CardUp className="blue lighten-1" />
					<Avatar className="mx-auto white">
						<img src={Party2.Picture} className="rounded-circle z-depth-1 img-fluid" />
					</Avatar>
					<CardTitle className="text-center">{Party2.FirstName} {Party2.LastName}</CardTitle>
				</div>
				<div className="col d-inline-block">
					<h4 className="text-center pt-3">Bought <b>{ProductID.Name}</b> From</h4>
					<CardImage className="img-fluid pb-3" src="http://local-score.herokuapp.com/images/arrows.png" />
					</div>
				<div className="col d-inline-block">
					<CardUp className="orange lighten-1" />
					<Avatar className="mx-auto white">
						<img src={Party1.Picture} className="rounded-circle z-depth-1 img-fluid" />
					</Avatar>
					<CardTitle className="text-center">{Party1.FirstName} {Party1.LastName}</CardTitle>
				</div>
			</div>
		</Card>
		</Container>
	)
}
export default TransactionFeedHistory;