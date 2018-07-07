import React, { Component } from 'react';
import {Card, Row} from 'mdbreact';
import {CardImage} from "../CardImage";
import Link from "react-router-dom";

const FeedTab = props => {
	const {Party1, Party2, Details, ProductDetails, Date, PreviousTxns, OriginID} = props.data;
	const transform = (p1Image === p2Image ? true : false);
	const p1Link = ("/users/" + Party1._id);
	const p2Link = ("/users/" + Party2._id);
	const oLink = ("TransactionFeed/transactions/" + OriginID) 

	buildTxnDetails = (transform, Party1, Party2, Details, ProductDetails, OriginID) =>
	{
		switch (transform){
		case "true" : 
		return (Party1 + " " + ProductDetails + " " + OriginID);
		break;
		default: 
		return (Party1 + " " + Details + " " + OriginID + " from " + Party2 )
		break;
		}
	};

	return (
		<Card>
		<Row>
		<CardImage src={Party1.Picture} alt="Party1Picture" href = {p1Link}/>
		<div className="col-md-10">
		<p>
		{this.buildTxnDtails(transform, Party1, Party2, Details, ProductDetails, OriginID)}
		</p>
		<Link to={oLink}>Trace this product back to origin</Link>
		</div>
		<CardImage src = {Party2.Picture} alt = "Party2Picture" href = {p2Link} />
		</Row>
		</Card>
	)
}
