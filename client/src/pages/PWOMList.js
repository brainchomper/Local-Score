import React from 'react';
import PWOM from './PWOM';

const PWOMList = props => {
	this.updateAccount = props.updateParent;
	if (props.props.queriesComplete && typeof props.props.PWOO !== "undefined" && props) {
		return props.props.PWOM.map((each, i) => {
		return	<PWOM data={each} key = {i} updateAccount = {this.updateAccount}   />
		})
	} else {
		return <div>There are no transactions waiting on me.</div>
	}
}


export default PWOMList