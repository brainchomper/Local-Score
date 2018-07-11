import React from 'react';
import PWOM from './PWOM';

const PWOMList = props => {
	// console.log("props in the PWOMList")
	// console.log(props)
	if (props.props.queriesComplete && typeof props.props.PWOO !== "undefined") {
		return props.PWOM.map((each) => {
			<PWOM props={each} />
		})
	} else {
		return <div>There are no transactions waiting on me.</div>
	}
}


export default PWOMList