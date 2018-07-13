import React from 'react';
import PWOO from './PWOO';


const PWOOList = props => {
	console.log("props in the PWOOList")
	console.log(props)
	console.log("props props props")
	if (props.props.queriesComplete && typeof props.props.PWOM !== "undefined") {
		return props.PWOO.map((each) => {
			<PWOO props={each} />
		})
	} else {
		return <div>There are no Transactions waiting on others.</div>
	}
}

export default PWOOList;