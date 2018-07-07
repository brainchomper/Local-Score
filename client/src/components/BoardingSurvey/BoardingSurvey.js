<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink, Input, InputFile, InputSwitch } from 'mdbreact';
import classnames from 'classnames';

class BoardingSurvey extends React.Component {
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
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '2' })} onClick={() => { this.toggleClassicTabs1('2'); }}>
                  Pending Transactions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#" className={classnames({ active: this.state.activeItemClassicTabs1 === '3' })} onClick={() => { this.toggleClassicTabs1('3'); }}>
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
								
								<InputSwitch></InputSwitch>
										</Container>
                </TabPane>
                <TabPane tabId="3">
								<Container>
								<Input label="Where do you distribute from?" />
								<Input label="What are the sources of your product?" />
								<Input label="What types of coffee do you distribute?"/>
								<Input label="Do you sell to only retailers?"/>
								<p>Do you sell whole beans and/or grounds?</p>
								<Input label="Whole Beans" type="checkbox" id="distOnly" />
								<Input label="Grounds" type="checkbox" id="retail" />
										</Container>
                </TabPane>
                <TabPane tabId="4">
								<Container>
								<Input label="Where is your retail store?" />
								<Input label="Do you sell whole beans or grounds?"/>
								<Input label="Do you produce/modify coffee in any way?"/>
								<Input type="textarea" label="Who is/are your distributor(s)? - One per line."/>
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

=======
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input, FormInline } from 'mdbreact';


class BoardingSurvey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: "",
			Roast: "DARK",
			Ground: "GROUND"
		}
		this.onClick1 = this.onClick1.bind(this);
		this.onClick2 = this.onClick2.bind(this);
		this.onClick3 = this.onClick3.bind(this);
		this.onClick4 = this.onClick4.bind(this);

	}

	onClick1() {
		this.setState({ Roast: "DARK" });
	}

	onClick2() {
		this.setState({ Roast: "LIGHT" });
	}

	onClick3() {
		this.setState({ Ground: "GROUND" });
	}
	onClick4() {
		this.setState({ Ground: "WHOLE" });
	}

	handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


	render() {
		return (
			<Container>
				<Card>
					{/* product name */}
<div className="row">
<div className="col">
<Input label="Product Name" value={this.state.product} onChange={this.handleInputChange}/>
</div>
</div>

					{/* type */}
					<div className="row">
					<div className="col-6 text-center">
						<h6>Roast:</h6>
						<Input onClick={this.onClick1} checked={this.state.Roast === "DARK" ? true : false} label="Dark Roast" type="radio" id="dark"  />
						<Input onClick={this.onClick2} checked={this.state.Roast === "LIGHT" ? true : false} label="Light Roast" type="radio" id="light" />
					</div>
					<div className="col-6 text-center">
					<h6>Grind Type:</h6>
						<Input onClick={this.onClick3} checked={this.state.Ground === "GROUND" ? true : false} label="Ground" type="radio" id="ground" />
						<Input onClick={this.onClick4} checked={this.state.Ground === "WHOLE" ? true : false} label="Whole Bean" type="radio" id="whole"  />
					</div>
					</div>
					<Button block color="primary">Submit Product</Button>
				</Card>
			</Container>

		);
	}
}


>>>>>>> 5383980250c66fda3d38fefa1aec897ef28ca2c6
export default BoardingSurvey;