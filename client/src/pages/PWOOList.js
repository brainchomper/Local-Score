import React from 'react';
import PWOO from './PWOO';


const PWOOList = props => {
	console.log("props in the PWOOList")
	console.log(props)

	return props.data.data.map((each) => {
		<PWOO data = {each} />
	})
}


export default PWOOList;