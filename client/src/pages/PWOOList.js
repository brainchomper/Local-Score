import React from 'react';
import PWOO from './PWOO';


const PWOOList = props => {
console.log(props)
	this.updateAccount = props.updateParent;

	if (props.props.queriesComplete && typeof props.props.PWOM !== "undefined") {
		return props.props.PWOO.map((each, i) => {
	return			<PWOO data={each} key = {i} updateAccount = {this.updateAccount}  />
		})
	} else {
		return <div>There are no Transactions waiting on others.</div>
	}
}

export default PWOOList;