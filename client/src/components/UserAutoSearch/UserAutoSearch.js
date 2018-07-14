import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import { Button } from 'mdbreact';
import { localCheck } from '../../utils/LocalStorage'

import "./UserAutoSearch.css";
const axios = require('axios');

let user = []
let userID = '';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
	const escapedValue = escapeRegexCharacters(value.trim());

	if (escapedValue === '') {
		return [];
	}

	const regex = new RegExp('\\b' + escapedValue, 'i');

	return user.filter(person => regex.test(getSuggestionValue(person)));

}

function getSuggestionValue(suggestion) {
	return `${suggestion.FirstName} ${suggestion.LastName} `;
}

function renderSuggestion(suggestion, { query }) {
	const suggestionText = `${suggestion.FirstName} ${suggestion.LastName}`;
	userID = suggestion._id;
	const matches = AutosuggestHighlightMatch(suggestionText, query);

	const parts = AutosuggestHighlightParse(suggestionText, matches);

	return (
		<span className={'suggestion-content ' + suggestion._id}>
			<span className="name">
				{
					parts.map((part, index) => {
						const className = part.highlight ? 'highlight' : null;
						console.log(part)
						return (
							<span className={className} key={index} >{part.text}</span>
						);
					})
				}
			</span>
		</span>
	);
}

class UserSearch extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)

		this.state = {
			value: '',
			suggestions: [],
			submitter: ""
		};
	}


	updateCustomer = () => {
		const id = userID;
		const submitterID = this.state.submitter;
		this.props.updateCustomer(userID, submitterID);
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue.trim(),
		});
	};

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	componentDidMount() {
		localCheck(({ fn, ln, p, id }) => {
			console.log(id, "the id on the transaction page is here");
			const userTrail = id
			const queryURL = ("/api/users/All/" + userTrail)
			console.log(queryURL, "queryURL")
			axios.get(queryURL).then(usersResult => {
				user = usersResult.data;
				console.log("new users", user)

				this.setState({ submitter: id })
			})})}



	render() {
				const { value, suggestions, userID } = this.state;
				const inputProps = {
					placeholder: "Search for customer",
					value,
					onChange: this.onChange,
					id: userID
				};

				return(
			<React.Fragment>
						<Autosuggest
							suggestions={suggestions}
							onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
							onSuggestionsClearRequested={this.onSuggestionsClearRequested}
							getSuggestionValue={getSuggestionValue}
							renderSuggestion={renderSuggestion}
							inputProps={inputProps} />
						<Button color="deep-orange" rounded onClick={this.updateCustomer} >Lock in Customer </Button>
				</React.Fragment>
		);
			}
}

	export default UserSearch;