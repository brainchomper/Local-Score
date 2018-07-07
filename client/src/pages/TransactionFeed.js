import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp } from 'mdbreact';

export const  TransactionFeed  = props => {
	const {data} = props;
	const {Party1, Party2, ProductId} = data;
	const ProductURL = ("TransactionHistory/" + ProductId._id);

			<Card testimonial>
				<div className="row">
					<div className="col">
						<CardUp className="blue lighten-1" />
						<Avatar className="mx-auto white">
							<img src={Party1.Picture} className="rounded-circle z-depth-1 img-fluid" />
						</Avatar>
						<CardTitle className="text-center">{Party1.FirstName} {Party1.LasName}</CardTitle>
					</div>
					<div className="col">
						<h4 className="text-center pt-3">Bought {ProductId.Name} From</h4>
						<CardImage className="img-fluid pb-3" src="./images/arrows.png" />

						<Button block className="pt-3" color="success" href={ProductURL}>Learn More About This Product's History</Button></div>
					<div className="col">
					<CardUp className="orange lighten-1" />
						<Avatar className="mx-auto white">
							<img src={Party2.Picture} className="rounded-circle z-depth-1 img-fluid" />
						</Avatar>
						<CardTitle className="text-center">{Party2.FirstName} {Party2.LastName}</CardTitle>
						</div>
				</div>
			</Card>
}
export default TransactionFeed;