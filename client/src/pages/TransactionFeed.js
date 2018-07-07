import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Row, Col, Avatar, CardUp } from 'mdbreact';

class TransactionFeed extends React.Component {
	render() {
		return (
			<Card testimonial>

				<div className="row">
					<div className="col">
						<CardUp className="blue lighten-1" />
						<Avatar className="mx-auto white">
							<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1 img-fluid" />
						</Avatar>
						<CardTitle className="text-center">Party1</CardTitle>
					</div>
					<div className="col">
						<h4 className="text-center pt-3">Bought 'Product' From</h4>
						<CardImage className="img-fluid pb-3" src="./images/arrows.png" />

						<Button block className="pt-3" href="#">Learn More</Button></div>
					<div className="col">
					<CardUp className="orange lighten-1" />
						<Avatar className="mx-auto white">
							<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" className="rounded-circle z-depth-1 img-fluid" />
						</Avatar>
						<CardTitle className="text-center">Party2</CardTitle>
						</div>
				</div>
			</Card>
		)
	}
}
export default TransactionFeed;