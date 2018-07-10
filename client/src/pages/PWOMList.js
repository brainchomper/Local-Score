import React from 'react';
import PWOM from './PWOM';

const PWOMList = props => {
	console.log("props in the PWOMList")
	console.log(props)

	return props.data.data.map((each) => {
		<PWOM data = {each} />
	})
}


export default PWOMList;