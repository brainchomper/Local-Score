import React, { Component } from 'react';
import mdbreact from 'mdbreact';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import SideBar from "./pages/SideBar";
import Login from "./pages/Login.js";
import ProductFeed from "./pages/ProductFeed";
import TeamPage from './pages/TeamPage';
import Landing from './components/Landing';
import Account from './pages/Account.js';
import TransactionPage from "./pages/TransactionPage";
import BoardingSurvey from "./components/BoardingSurvey"
import UI from "./pages/UI";
import Register from "./components/Auth/Register";

// context
// const Context = React.createContext();

// class Provider extends Component {
// 	return(
// 		<Context.Provider>
// 		</Context.Provider>
// 	)

// }
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
		this.updateUserState = this.updateUserState.bind(this);
	}

	updateUserState = (auth, fname, lname, userID, picUrl) => {
		console.log("updating the things")
		console.log(this.state);
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
				<SideBar props={this.state} />
				<Router>
					<Switch>
						<Route exact path="/" render={() => <Landing props={this.state} /> } />
						<Route exact path="/welcome" render={() => <Account props={this.state} /> } />
						<Route exact path="/register" component={Register} />
						<Route exact path="/team" render={() => < TeamPage props = {this.state} />} />
						<Route exact path="/login" render={() => < Login props = {this.state} propFn = {this.updateUserState} />} />
						<Route exact path="/products" render={() => < ProductFeed props = {this.state} />} />
						<Route exact path="/account" render={() => < Account props = {this.state} />} />
						<Route exact path="/new-product" render={() => < BoardingSurvey props = {this.state} />} />
						<Route exact path="/transactions" render={() => < TransactionPage props = {this.state} />} />
						<Route path="/TransactionHistory/:id" render={() => < ProductFeed props = {this.state} />} />
					</Switch>
				</Router>
			</React.Fragment>



		);
	}
}

export default App;
