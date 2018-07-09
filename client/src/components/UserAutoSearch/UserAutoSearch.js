import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import "./UserAutoSearch.css";
const axios = require('axios');

let user = []

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
	return `${suggestion.FirstName} ${suggestion.LastName}`;
}

function renderSuggestion(suggestion, { query }) {
	const suggestionText = `${suggestion.FirstName} ${suggestion.LastName}`;
	const matches = AutosuggestHighlightMatch(suggestionText, query);
	const parts = AutosuggestHighlightParse(suggestionText, matches);

	return (
		<span className={'suggestion-content ' + suggestion.twitter}>
			<span className="name">
				{
					parts.map((part, index) => {
						const className = part.highlight ? 'highlight' : null;

						return (
							<span className={className} key={index}>{part.text}</span>
						);
					})
				}
			</span>
		</span>
	);
}

class UserSearch extends React.Component {
	constructor() {
		super();

		this.state = {
			value: '',
			suggestions: []
		};
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue
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
		axios.get("/api/users/All").then(usersResult => {
			this.setState({ uArray: usersResult.data })
			user = usersResult.data;
			console.log("new user", user)
		})
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: "Search for your customer here",
			value,
			onChange: this.onChange
		};

		return (
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps} />
		);
	}
}

export default UserSearch;