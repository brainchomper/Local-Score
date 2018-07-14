import React from 'react';
import { Container, Row, Fa, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
const axios = require("axios");

class PWOO extends React.Component {
	constructor(props) {
		super(props)
		const { data } = props;
		const { Party1, Party2, ProductID } = data;
		const groundState = ProductID.Ground ? "ground" : "not ground";
		const HistoryURL = "/TrasactionHistory/" + ProductID._id.toString();
		const RejectURL = "/api/transactions/rejectTxn/" + data._id.toString();
		const AcceptURL = "/api/transactions/acceptTxn/" + data._id.toString();
		this.acceptTxn = this.acceptTxn.bind(this);
		this.rejectTxn = this.rejectTxn.bind(this);

		this.state = {
			RejectURL: RejectURL,
			AcceptURL: AcceptURL,
			HistoryURL: HistoryURL,
			data: data,
			Party2: Party2,
			groundState: groundState,
			ProductID: ProductID
		}
	}

 rejectTxn()  {
	 axios.get(this.state.RejectURL).then( response =>console.log("Modal Pop", response))
	};

 acceptTxn  () {
	 axios.get(this.state.AcceptURL).then( response => console.log(response))
	};

	render() {
		return (
			<Container style={{ maxWidth: '80%' }} className="hoverable">
					<Card cascade>
			 			<CardBody cascade>
			 				<CardTitle>Transaction {this.state.data._id}</CardTitle>
			 				<CardText>You are currently waiting on {this.state.Party2.FirstName} {this.state.Party2.LastName} to approve the purchasing of {this.state.ProductID.Name} for $ {this.state.data.Price}.</CardText>
			 				<CardText>{this.state.ProductID.Name} is a {this.state.ProductID.Roast} coffee that is {this.state.groundState}.</CardText>
							 <Button href= {this.state.HistoryURL} >See all transactions associated with this product</Button>			 				
							 <Row>
			 					<Button tag="a" floating gradient="blue" onClick = {this.acceptTxn}><Fa icon="check" /></Button>
								 <div className="col">
								 
								 </div>
								 <div className="col">
								 </div>
								 <Button tag="a" floating gradient="purple" onClick = {this.rejectTxn}><Fa icon="x" /></Button>

			 				</Row>
			 			</CardBody>
			 			
			 		</Card>
			 	</Container>
		)
	}
}

export default PWOO;