import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp, Container } from 'mdbreact';

export const TransactionFeed = props => {
	const { data } = props;
	const { Party1, Party2, ProductID } = data;
	const ProductURL = ("product-history/" + ProductID._id);
	return (
		<Container className="pb-3">
		<Card testimonial className = "">
			<div className="row">
				<div className="col">
					<CardUp className="blue lighten-1" />
					<Avatar className="mx-auto white">
						<img src={Party2.Picture} className="rounded-circle z-depth-1 img-fluid" />
					</Avatar>
					<CardTitle className="text-center">{Party2.FirstName} {Party2.LastName}</CardTitle>
				</div>
				<div className="col">
					<h4 className="text-center pt-3">Bought <b>{ProductID.Name}</b> From</h4>
					<CardImage className="img-fluid pb-3" src="./images/arrows.png" />

					<Button block className="pt-3" color="success" href={ProductURL}>Learn More About This Product's History</Button></div>
				<div className="col">
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
export default TransactionFeed;