import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Badge } from 'mdbreact';
import classnames from 'classnames';
import PWOMList from './PWOMList';
import PWOOList from './PWOOList';
import CompletedList from "./CompletedList";
import { localCheck } from "../utils/LocalStorage"
const axios = require("axios");

class TabsPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
		this.updateParent = this.updateParent.bind(this);
		this.state = {
			activeItemClassicTabs1: '1',
			PWOM: [],
			PWOO: [],
			COMPLETED: [],
			FirstName: "",
			LastName: "",
			Picture: "",
			userID: "",
			queriesComplete: false,
			update: false
		};
	}
	updateParent = () =>{
		console.log("ugh")
		const that = this
		localCheck(({ fn, ln, p, id }) => {
			const queryURL = ("api/transactions/allUsersTxns/" + id)
			console.log("now querying the database");
			axios.get(queryURL)
				.then(qResults => {
					console.log("what did we get")
					console.log(qResults.data);
					console.log("qresultsPWOOM")
					console.log(qResults.data.TWOO)
					that.setState({
						PWOO: qResults.data.TWOO,
						PWOM: qResults.data.TWOM,
						COMPLETED: qResults.data.COMPLETED,
						queriesComplete: true,
						FirstName: fn,
						LastName: ln,
						Picture: p,
						userID: id,
					})
				})
		})
	}

	toggleClassicTabs1(tab) {
		if (this.state.activeItemClassicTabs1 !== tab) {
			this.setState({
				activeItemClassicTabs1: tab
			});
		}
	};

	componentDidMount() {

		localCheck(({ fn, ln, p, id }) => {
			const queryURL = ("api/transactions/allUsersTxns/" + id)
			console.log("now querying the database");
			axios.get(queryURL)
				.then(qResults => {
					console.log("what did we get")
					console.log(qResults.data);
					console.log("qresultsPWOOM")
					console.log(qResults.data.TWOO)
					this.setState({
						PWOO: qResults.data.TWOO,
						PWOM: qResults.data.TWOM,
						COMPLETED: qResults.data.COMPLETED,
						queriesComplete: true,
						FirstName: fn,
						LastName: ln,
						Picture: p,
						userID: id,
					}, console.log(this.state))
				})
		})
	}



	render() {
		return (
			<Router>
				<Container className="pt-2">
					<Nav tabs className="nav-justified unique-color">
						<NavItem>
							<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.toggleClassicTabs1('2') }}>
							<Badge>{this.state.PWOO.length}</Badge>		Pending Waiting On Others
                  </NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.toggleClassicTabs1('3') }}>
								<Badge>{this.state.PWOM.length}</Badge>	Pending Waiting On Me
                  </NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '4' })} onClick={() => { this.toggleClassicTabs1('4'); }}>
								Completed Transactions
                  </NavLink>
						</NavItem>
					</Nav>
					<TabContent activeItem={this.state.activeItemClassicTabs1}>
						<TabPane tabId="2">
							<Container>
								<PWOOList props={this.state} updateParent = {this.updateParent} />
							</Container>
						</TabPane>
						<TabPane tabId="3">
							<Container>
								<PWOMList props={this.state} updateParent = {this.updateParent} />
							</Container>
						</TabPane>
						<TabPane tabId="4">
							<Container>
								<CompletedList props={this.state} />
							</Container>
						</TabPane>
					</TabContent>
				</Container>
			</Router>
		);
	}
}

export default TabsPage;