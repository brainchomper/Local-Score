import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImage, Button, Fa, CardBody, CardTitle, CardText, Input, InputNumeric } from 'mdbreact';
class TransactionPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggleProduct = this.toggleProduct.bind(this);
		this.state = {
			CustomerDropdown: false,
			ProductDropdown: false
		};
	}
	toggle() {
		this.setState({
			CustomerDropdown: !this.state.CustomerDropdown,
		});
	}
	toggleProduct() {
		this.setState({
			ProductDropdown: !this.state.ProductDropdown,
		});
	}

	render() {
		return (
			<div className="row mx-auto"  style={{ maxWidth: '50%' }}>
			<div className="col mt-4">
			<Card>
				<CardBody>
					<CardTitle className="text-center">Create New Transaction</CardTitle>

					<div className="row text-center">
						<div className="col">
							<Dropdown isOpen={this.state.CustomerDropdown} toggle={this.toggle} size="lg">
								<DropdownToggle caret color="primary">
									Customer
          </DropdownToggle>
								<DropdownMenu>
									<DropdownItem href="#">.</DropdownItem>
									<DropdownItem href="#">Another Action</DropdownItem>
									<DropdownItem href="#">Something else here</DropdownItem>
									<DropdownItem href="#">Something else here</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
						<div className="col">
							<Dropdown isOpen={this.state.ProductDropdown} toggle={this.toggleProduct} size="lg">
								<DropdownToggle caret color="primary">
									Product
          </DropdownToggle>
								<DropdownMenu>
									<DropdownItem href="#">.</DropdownItem>
									<DropdownItem href="#">Another Action</DropdownItem>
									<DropdownItem href="#">Something else here</DropdownItem>
									<DropdownItem href="#">Something else here</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>

					<h3 className="text-center">Item Price $</h3>
					<InputNumeric precision={2} value={10} step={0.01} className="mb-2" color="success"/>

					<Button block color="success" size="lg" href="#">Submit New Transaction</Button>
				</CardBody>

			</Card>
			</div>
			</div>
			

		);
	}
}
export default TransactionPage;