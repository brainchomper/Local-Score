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
			LoggedIn: true,
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

	updateUserState(auth, fname, lname, userID, picUrl) {
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
				
				<Router>
					<Switch>
						<Route exact path="/" render={() => <Landing props={this.state} /> } />
						<Route exact path="/welcome" render={() => <UI props={this.state} /> } />
						<Route exact path="/team" component={TeamPage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/products" component={ProductFeed} />
						<Route exact path="/account" component={Account} />
						<Route exact path="/new-product" component={BoardingSurvey} className="mt-5" />
						<Route exact path="/transactions" component={TransactionPage} data={this.updateUserState} />

						<Route path="/TransactionHistory/:id" component={ProductFeed} />
					</Switch>
				</Router>
			</React.Fragment>


		);
	}
}

export default App;
