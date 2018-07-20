import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp, Container } from 'mdbreact';

export const TransactionFeed = props => {
	console.log(props.mid)
	const { data } = props;
	const { Party1, Party2, ProductID } = data;
	const ProductURL = ("product-history/" + ProductID._id);

	let mid = 	<Button block className="pt-3" color="success" href={ProductURL}>Learn More About This Product's History</Button> ;

	if (!props.mid) {
		mid = ''
	}

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
					<CardImage className="img-fluid pb-3" src="./images/arrows.png" />

				{mid}
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
export default TransactionFeed;