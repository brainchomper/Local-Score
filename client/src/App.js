import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Footer, NavLink, Container } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SideBar from "./pages/SideBar";
import Login from "./pages/Login.js";
import CardsPage from "./pages/CardsPage";
import ProductFeed from "./pages/ProductFeed";
import TeamPage from './pages/TeamPage';
import Landing from './pages/Landing.js';
import Account from './pages/Account.js';
import TransactionPage from "./pages/TransactionPage"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
		this.handleTogglerClick = this.handleTogglerClick.bind(this);
		this.handleNavbarClick = this.handleNavbarClick.bind(this);

	}

	handleTogglerClick() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	handleNavbarClick() {
		this.setState({
			collapsed: false
		});
	}

	render() {
		const collapsed = this.state.collapsed;
		const overlay = <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleNavbarClick} />
		return (
<React.Fragment>

				<SideBar />
					
					<Router>
						<Switch>
						<Route exact path="/" component={Landing}/>
						<Route exact path="/team" component={TeamPage}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/products" component={ProductFeed}/>
						<Route exact path="/account" component={Account}/>
						<Route exact path ="/NewTransactions" component={TransactionPage}/>

						</Switch>
					</Router>


</React.Fragment>
		);
	}
}

export default App;
