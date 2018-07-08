import React from 'react';
import { DropdownItem } from 'mdbreact';

class ProductDropDown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: false
		}
	}



	render() {
		return (
		<DropdownItem>Now searching for available products</DropdownItem>
		)
	}
}

export default ProductDropDown;