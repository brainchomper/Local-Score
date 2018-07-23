import React from 'react';
import { Card, CardImage, CardTitle, Avatar, CardUp, Container } from 'mdbreact';

export const BoardedFeed = props => {
	const { data } = props;
	const { Party1, ProductID } = data;
	let ground = "ground"
	if(!ProductID.Ground){
		ground = "whole bean"
	}

	return (
		<Container className="pb-3">
		<Card testimonial className = "hoverable">
			<div className="row">
				<div className="col">
					<CardUp className="blue lighten-1" />
					<Avatar className="mx-auto white">
						<img src={Party1.Picture} className="rounded-circle z-depth-1 img-fluid" />
					</Avatar>
					<CardTitle className="text-center">{Party1.FirstName} {Party1.LastName}</CardTitle>
				</div>
				<div className="col">
					<h4 className="text-center pt-3">Loaded <b>{ProductID.Name}</b> as a product.</h4>
					<p className="text-center"><b>{ProductID.Name}</b> is a <b>{ProductID.Roast}, {ground}</b> coffee</p>
					<CardImage className="img-fluid p-3" src="https://local-score.herokuapp.com/images/arrows.png" />
				</div>
			</div>
		</Card>
		</Container>
	)
}
export default BoardedFeed;