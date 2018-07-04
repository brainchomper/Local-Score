import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Input, InputSwitch, Badge } from 'mdbreact';
import classnames from 'classnames';
import PWOM from './PWOM';
import PWOO from './PWOO';
import CompletedTransactions from './CompletedTransactions'


class TabsPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
		this.state = {
			activeItemClassicTabs1: '1',
		};
	}

	toggleClassicTabs1(tab) {
		if (this.state.activeItemClassicTabs1 !== tab) {
			this.setState({
				activeItemClassicTabs1: tab
			});
		}
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
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.toggleClassicTabs1('2'); }}><Badge badgeColor="info">3</Badge>
										Pending Waiting On Me
                  </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.toggleClassicTabs1('3'); }}>
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
										<PWOM />

									</Container>
								</TabPane>
								<TabPane tabId="3">
									<Container>
										<PWOO />
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