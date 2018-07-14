import React from 'react';
import { Container, Row, Fa, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
const axios = import("axios");

class PWOM extends React.Component {
	constructor(props) {
		super(props)
		const { data } = props;
		const { Party1, Party2, ProductID } = data;
		const groundState = ProductID.Ground ? "ground" : "not ground";
		const HistoryURL = ("/TrasactionHistory/" + ProductID._id);
		const RejectURL = ("/api/transactions/rejectTxn/" + data._id);
		const AcceptURL = ("/api/transactions/acceptTxn/" + data._id);

		this.state = {
			RejectURL: RejectURL,
			AcceptURL: AcceptURL,
			HistoryURL: HistoryURL,
			data: data,
			Party1: Party1,
			groundState: groundState,
			ProductID: ProductID
		}

		this.acceptTxn = this.acceptTxn.bind(this);
		this.rejectTxn = this.rejectTxn.bind(this);
	}

 rejectTxn = () => axios.post(this.state.RejectURL).then( response =>console.log("Modal Pop", response));

 acceptTxn = () => axios.post(this.state.AcceptURL.then( response => console.log(response)));

	render() {
		return (
			<Container style={{ maxWidth: '80%' }}>
					<Card cascade>
			 			<CardBody cascade>
			 				<CardTitle>Transaction {this.state.data._id}</CardTitle>
			 				<CardText>{this.state.Party1.FirstName} {this.state.Party1.LastName} is currently waiting on you to approve this transaction of purchasing {this.state.ProductID.Name} for ${this.state.data.Price}.</CardText>
			 				<CardText>{this.state.ProductID.Name} is a {this.state.ProductID.Roast} coffee that is {this.state.groundState}.</CardText>
			 				<Button href= {this.state.HistoryURL} >See all transactions associated with this product</Button>
			 				<Row>
			 					<Button tag="a" floating gradient="blue" onClick = {this.acceptTxn}><Fa icon="check" /></Button>
			 					<Button onClick = {this.rejectTxn}>Reject This Transaction </Button>
			 				</Row>
			 			</CardBody>
			 			<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
							<ul className="list-unstyled list-inline font-small">
							</ul>
			 			</div>
			 		</Card>
			 	</Container>
		)
	}
}

export default PWOM;