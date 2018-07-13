import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink } from 'mdbreact';
import classnames from 'classnames';
import PWOMList from './PWOMList';
import PWOOList from './PWOOList';
import CompletedList from "./CompletedList"; 
const axios = require("axios");

class TabsPage extends React.Component {
	constructor(props) {
		super(props);
		console.log("----------------------")
		console.log(props.idProp)
		console.log("----------------------")
		this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
		this.state = {
			activeItemClassicTabs1: '1',
			PWOM: [],
			PWOO: [],
			COMPLETED: [],
			userID: this.props.propID,
			queriesComplete: false
		};
	}

	toggleClassicTabs1(tab) {
		if (this.state.activeItemClassicTabs1 !== tab) {
			console.log("this.state: ", this.state)
			this.setState({
				activeItemClassicTabs1: tab
			});
		}
	};

	componentDidMount() {
		const queryURL = ("api/transactions/allUsersTxns/" + (this.state.userID))
		console.log("now querying the database");
		axios
			.get(queryURL)
			.then(qResults => {
				console.log("what did we get")
				console.log(qResults);
				this.setState({
					PWOO: qResults.data.PWOO,
					PWOM: qResults.data.PWOM,
					COMPLETED: qResults.data.COMPLETED,
					queriesComplete: true
				})
			}
			)
	}


render() {
	return (
		<Router>
			<Container className="mt-4">
				<Row>
					<Col md="12">
						<Nav classicTabs color="cyan">
							<NavItem>
								<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.toggleClassicTabs1('2') }}>
									Pending Waiting On Me
                  </NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.toggleClassicTabs1('3') }}>
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
							<TabPane tabId="2">
								<Container>
								<PWOOList props = {this.state} />
								</Container>
							</TabPane>
							<TabPane tabId="3">
								<Container>
									<PWOMList props = {this.state} />
								</Container>
							</TabPane>
							<TabPane tabId="4">
								<Container>
									<CompletedList props = {this.state} />
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