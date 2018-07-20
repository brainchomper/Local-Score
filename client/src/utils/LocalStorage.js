import React from 'react';
import {Redirect} from "react-router-dom";


export const localCheck = (next) => {
	if (localStorage.getItem("localScoreLoggedIn") === null || localStorage.getItem("localScoreLoggedIn") === false ) {
		return (
			<Redirect to = '/login' />
		)
	}
	next(JSON.parse(localStorage.getItem("LSUserValues")))
	
};

export const setLocal = (item, value) => {
	localStorage.setItem(item, value)
};

export const checkLogin = () => {
	if (localStorage.getItem("localScoreLoggedIn") === true)  {
		return (
			<Redirect to = '/transactions' />
		)
	}
	return console.log("not logged in")
}