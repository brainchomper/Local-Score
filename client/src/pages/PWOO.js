import React from 'react';
import { Container, Row, Fa, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
const axios = require("axios");

class PWOO extends React.Component {
	constructor(props) {
		super(props)
		const { data } = props;
		console.log(props)
		const {  Party2, ProductID } = data;
		const groundState = ProductID.Ground ? "ground" : "not ground";
		const HistoryURL = "/product-history/" + ProductID._id.toString();
		const RejectURL = "/api/transactions/rejectTxn/" + data._id.toString();
		this.rejectTxn = this.rejectTxn.bind(this);
		this.updateAccount = props.updateAccount.bind(this)
		console.log(this.updateAccount)
		this.state = {
			RejectURL: RejectURL,
			HistoryURL: HistoryURL,
			data: data,
			Party2: Party2,
			groundState: groundState,
			ProductID: ProductID
		}
	}

	rejectTxn() {
		axios.get(this.state.RejectURL).then(response => {this.updateAccount()})
	};

	

	render() {
		return (
			<Container className="pb-3 text-center" >
				<Card className="hoverable">
					<CardBody >
						<CardTitle>Transaction: {this.state.data._id}</CardTitle>
						<CardText>You are currently waiting on <b>{this.state.Party2.FirstName} {this.state.Party2.LastName}</b> to approve the purchasing of <b>{this.state.ProductID.Name}</b> for $ <b>{this.state.data.Price}</b>.</CardText>
						<CardText><b>{this.state.ProductID.Name}</b> is a <b>{this.state.ProductID.Roast}</b> coffee that is {this.state.groundState}.</CardText>

						<Row className="text-center">

							<div className="col">
								<Button block rounded color="info" href={this.state.HistoryURL}  >All transactions with this product</Button>
							</div>
							<div className="col">
								<Button color="danger" rounded onClick={this.rejectTxn}><Fa icon="times" /></Button>
							</div>


						</Row>
					</CardBody>

				</Card>
			</Container>
		)
	}
}

export default PWOO;