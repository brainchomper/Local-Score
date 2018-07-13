import React from 'react';
import { Button, Card, CardImage, CardTitle, Avatar, CardUp } from 'mdbreact';

export const BoardedFeed = props => {
	const { data } = props;
	console.log(props.match)
	const { Party1, ProductID } = data;
	let ground = "ground"
	if(!ProductID.Ground){
		ground = "whole bean"
	}

	return (
		<Card testimonial className = "my-3">
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
					<CardImage className="img-fluid pb-3" src="./images/arrows.png" />
				</div>
			</div>
		</Card>
	)
}
export default BoardedFeed;