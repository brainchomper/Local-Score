import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarNav, NavItem, NavLink, Fa, SideNavItem, SideNavNav, SideNav, Avatar, Badge } from 'mdbreact';
import './SideBar.css';

class DoubleNavigationWithHiddenSideNavFixedNavbar extends React.Component  {
constructor(props) {
    super(props);
    this.state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false,
        toggleStateA: false,
        accordion: false,
        collapsed: false,
    };
  this.onClick = this.onClick.bind(this);
  this.toggle = this.toggle.bind(this);
  this.onClick0 = this.onClick0.bind(this);
  this.onClick1 = this.onClick1.bind(this);
  this.onClick2 = this.onClick2.bind(this);
	this.onClick3 = this.onClick3.bind(this);
	this.onClick4 = this.onClick4.bind(this);
	this.onClick5 = this.onClick5.bind(this);
  this.handleToggleClickA = this.handleToggleClickA.bind(this);
}

onClick0(){
  let state = '';

  if (this.state.accordion !== 0) {
    state = 0;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick1(){
  let state = '';

  if (this.state.accordion !== 1) {
    state = 1;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick2(){
  let state = '';

  if (this.state.accordion !== 2) {
    state = 2;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick3(){
  let state = '';

  if (this.state.accordion !== 3) {
    state = 3;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick4(){
  let state = '';

  if (this.state.accordion !== 4) {
    state = 4;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick5(){
  let state = '';

  if (this.state.accordion !== 5) {
    state = 5;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}

onClick6(){
  let state = '';

  if (this.state.accordion !== 6) {
    state = 6;
  } else {
    state = false;
  }

  this.setState({
    collapse: !this.state.collapse,
    accordion: state});
}
// Slide out buttons event handlers
handleToggleClickA(){
  this.setState({
    toggleStateA: !this.state.toggleStateA
  })
}
onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
}

toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

render() {
  const isOpenWithButtonA = this.state.toggleStateA;
  const navStyle = { backgroundColor: "#3f5c80", color: "#fff"}
  const sideStyle = { backgroundColor: '#6a9ed3', width: "100%"}
  const button1 = <div href="#!" onClick={this.handleToggleClickA} key="sideNavToggleA" style={{lineHeight: '32px', marginRight: '1em', verticalAlign: 'middle'}}><Fa icon="bars" color="white" size="2x"></Fa></div>
  const specialCaseNavbarStyles = {WebkitBoxOrient: 'horizontal', flexDirection: 'row'};
    return ( 
        <Router>
          <div className="mt-5">
            <SideNav logo="./images/logo.png" isOpenWithButton={isOpenWithButtonA} breakWidth={1300} style={sideStyle} hidden href="/">
						<Avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1-half img-fluid mt-3 px-1" alt="User Image"/>
              <SideNavNav>
								<SideNavItem href="/login">Login - Sign Up</SideNavItem>
                <SideNavItem href="/team">Team</SideNavItem>
								<SideNavItem href="/products">Products</SideNavItem>
								<SideNavItem href="/account">Account</SideNavItem>
								<SideNavItem href="/transactions">New Transactions</SideNavItem>
              </SideNavNav>
            </SideNav>
            <Navbar style={navStyle} dark expand="md" fixed="top">
              <NavbarNav left>
              <NavItem>
                    {button1}
              </NavItem>
                <NavItem className="d-none d-md-inline" style={{paddingTop: 5}}>
                    <strong>Local Score</strong>
                </NavItem>
              </NavbarNav>
              <NavbarNav right style={specialCaseNavbarStyles}>
                
                <NavItem>
                    <NavLink to="#!"><Fa icon="user" className="d-inline-inline"/>  <div className="d-none d-md-inline">Account</div></NavLink>
                </NavItem>
              </NavbarNav>
            </Navbar>
            </div>
        </Router>
    );
  }
};

export default DoubleNavigationWithHiddenSideNavFixedNavbar;