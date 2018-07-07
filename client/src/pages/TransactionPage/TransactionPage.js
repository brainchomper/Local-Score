import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImage, Button, Fa, CardBody, CardTitle, CardText, Input } from 'mdbreact';
class TransactionPage extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
		};
	}
	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	render() {
		return (
			<Card  cascade>
				<CardBody cascade>
					<CardTitle>Card title</CardTitle>
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
					<Input label="Example label" defaultValue="Price" />
					<Button href="#">Button</Button>
				</CardBody>
				<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">

				</div>
			</Card>

		);
	}
}
export default TransactionPage;