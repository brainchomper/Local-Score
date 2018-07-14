import React from 'react';
import PWOO from './PWOO';


const PWOOList = props => {

	if (props.props.queriesComplete && typeof props.props.PWOM !== "undefined") {
		return props.props.PWOO.map((each) => {
			<PWOO props={each} />
		})
	} else {
		return <div>There are no Transactions waiting on others.</div>
	}
}

export default PWOOList;