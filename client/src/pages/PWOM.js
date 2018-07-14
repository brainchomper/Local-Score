import React from 'react';
import { Container, Row, Fa, CardBody, Card, CardText, CardTitle, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
// import {setLocal} from '../utils/LocalStorage'
const axios = require('axios');
class PWOM extends React.Component {
	constructor(props) {
		super(props)
		const { data } = props;
		const { Party1, ProductID } = data;
		const groundState = ProductID.Ground ? "ground" : "not ground";
		const HistoryURL = "/product-history/" + ProductID._id.toString();
		const RejectURL = "/api/transactions/rejectTxn/" + data._id.toString();
		const AcceptURL = "/api/transactions/approveTxn/" + data._id.toString();
		this.acceptTxn = this.acceptTxn.bind(this);
		this.rejectTxn = this.rejectTxn.bind(this);
		this.updateAccount = props.updateAccount.bind(this);
		console.log(this.updateAccount)
		this.state = {
			RejectURL: RejectURL,
			AcceptURL: AcceptURL,
			HistoryURL: HistoryURL,
			data: data,
			Party1: Party1,
			groundState: groundState,
			ProductID: ProductID
		}
	}

	rejectTxn() {
		axios.get(this.state.RejectURL).then(response => {this.updateAccount()})
	};

	acceptTxn() {
		axios.get(this.state.AcceptURL).then(response => {this.updateAccount()})
	};

	render() {
		return (
			<Container className=" pb-3">
				<Card className="hoverable text-center">
					<CardBody>
						<CardTitle>Transaction: {this.state.data._id}</CardTitle>
						<CardText><b>{this.state.Party1.FirstName} {this.state.Party1.LastName}</b> is currently waiting on you to approve this transaction of purchasing <b>{this.state.ProductID.Name}</b> for <b>${this.state.data.Price}</b>.</CardText>
						<CardText><b>{this.state.ProductID.Name}</b> is a <b>{this.state.ProductID.Roast}</b> coffee that is<b> {this.state.groundState}</b>.</CardText>
						<Row className="text-center">

							<div className="col">
								<Button color="success" rounded onClick={this.acceptTxn}><Fa icon="check" /></Button>
							</div>
							<div className="col">
								<Link to ={this.state.HistoryURL}  rounded color="info"  >All transactions with this product</Link>
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

export default PWOM;