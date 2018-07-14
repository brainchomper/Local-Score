import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp, Container } from 'mdbreact';

export const BoardedFeed = props => {
	const { data } = props;
	const { Party1, ProductID } = data;
	let ground = "ground"
	if(!ProductID.Ground){
		ground = "whole bean"
	}

	return (
		<Container className="pt-2">
		<Card testimonial className = "my-3 hoverable">
			<div className="row">
				<div className="col">
					<CardUp className="blue lighten-1" />
					<Avatar className="mx-auto white">
						<img src={Party1.Picture} className="rounded-circle z-depth-1 img-fluid" />
					</Avatar>
					<CardTitle className="text-center">{Party1.FirstName} {Party1.LastName}</CardTitle>
				</div>
				<div className="col">
					<h4 className="text-center pt-3">Loaded {ProductID.Name} as a product.</h4>
					<p>{ProductID.Name} is a {ProductID.Roast}, {ground} coffee</p>
					<CardImage className="img-fluid px-3" src="./images/arrows.png" />
				</div>
			</div>
		</Card>
		</Container>
	)
}
export default BoardedFeed;