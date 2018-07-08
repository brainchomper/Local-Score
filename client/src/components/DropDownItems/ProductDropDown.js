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
		<DropdownItem> <div>Now searching for available products </div></DropdownItem>
		)
	}
}

export default ProductDropDown;