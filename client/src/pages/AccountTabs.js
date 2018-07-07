import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Input, InputSwitch, Badge } from 'mdbreact';
import classnames from 'classnames';
import PWOM from './PWOM';
import PWOO from './PWOO';
import CompletedTransactions from './CompletedTransactions'
const axios = require("axios");

class TabsPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
		this.state = {
			activeItemClassicTabs1: '1',
			PWOM: [],
			PWOO: [],
			userID: 1
		};
	}

	toggleClassicTabs1(tab) {
		if (this.state.activeItemClassicTabs1 !== tab) {
			this.setState({
				activeItemClassicTabs1: tab
			});
		}
	};

	// query that runs the api query for transactions waiting on the user
	PWOMQuery() {
		// toggle the tabs to 1
		this.toggleClassicTabs1('1')
		const queryURL = ("api/transactions/PWOM/" + (this.state.userID))
		console.log("we are doing the PWOM thing");
		console.log("queryURL = " , queryURL)
		axios.get(queryURL).then( queryResults => this.setState({PWOM: queryResults})
		)
	};
	PWOOQuery() {
		this.toggleClassicTabs1('3');
		const queryURL = ("api/transactions/PWOO/" + (this.state.userID))
		console.log("we are doing the PWOO thing");
		console.log("queryURL = " , queryURL)
		axios.get(queryURL).then(queryResults => this.setState({PWOO: queryResults}))
	};
	renderPWOM() {
		return this.state.PWOM.map(each => <PWOM data = {each} />)
	};
	renderPWOO() {
		return this.state.PWOO.map(each => <PWOO data = {each} />)
	}

	render() {
		return (
			<Router>
				<Container className="mt-4">
					<Row>
						<Col md="12">
							<h2 className="mt-5 text-center">Account Profile Information</h2>
							<Nav classicTabs color="cyan">
								<NavItem>
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '1' })} onClick={() => { this.toggleClassicTabs1('1'); }}>
										Profile
                  </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.PWOMQuery(); }}><Badge badgeColor="info">3</Badge>
										Pending Waiting On Me
                  </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.PWOOQuery(); }}>
										Pending Waiting On Other
                  </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '4' })} onClick={() => { this.toggleClassicTabs1('4'); }}>
										Completed Transactions
                  </NavLink>
								</NavItem>
							</Nav>
							<TabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
								<TabPane tabId="1">
									<Container>
										<div className="row">
											<div className="col-6"><Input label="First Name" /></div>
											<div className="col-6"><Input label="Last Name" /></div></div>
										<div className="row">
											<div className="col"><Input label="What kind of coffee are you interested in?" /></div></div>
									</Container>
								</TabPane>
								<TabPane tabId="2">
									<Container>
										{this.renderPWOM}
									</Container>
								</TabPane>
								<TabPane tabId="3">
									<Container>
									{this.renderPWOO}
									</Container>
								</TabPane>
								<TabPane tabId="4">
									<Container>
										<CompletedTransactions />
									</Container>
								</TabPane>
							</TabContent>
						</Col>
					</Row>
				</Container>
			</Router>
		);
	}
}

export default TabsPage;