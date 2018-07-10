import React, { Component } from 'react';
import mdbreact from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import SideBar from "./pages/SideBar";
import Login from "./pages/Login.js";
import ProductFeed from "./pages/ProductFeed";
import TeamPage from './pages/TeamPage';
import Landing from './pages/Landing.js';
import Account from './pages/Account.js';
import TransactionPage from "./pages/TransactionPage";
import BoardingSurvey from "./components/BoardingSurvey"
import Admin from "./pages/Admin.js"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			LoggedIn: false,
			collapsed: false,
			FirstName: "",
			LastName: "",
			userID: "",
			Picture: '',
		};
		this.handleNavbarClick = this.handleNavbarClick.bind(this);
		this.handleTogglerClick = this.handleTogglerClick.bind(this);
		this.updateUserState = this.updateUserState.bind(this)
	}

	updateUserState (auth, fname, lname, userID, picUrl) {
		this.setState({
			LoggedIn: auth,
			FirstName: fname,
			LastName: lname,
			userID: userID,
			Picture: picUrl
		});
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
						<Route exact path ="/NewProduct" component={BoardingSurvey}  className="mt-5"/>
						<Route exact path ="/transactionpage" component={TransactionPage } data = {this.updateUserState} />
						<Route exact path ="/Admin" component={Admin}/>
						<Route path = "/TransactionHistory/:id" component = {ProductFeed} />
						</Switch>
					</Router>


</React.Fragment>
		);
	}
}

export default App;
