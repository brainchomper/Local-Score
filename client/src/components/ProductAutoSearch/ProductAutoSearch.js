import React from 'react';
import Autosuggest from 'react-autosuggest';
import "./ProductAutoSearch.css";
import {Button} from 'mdbreact';
const axios = require('axios');
let products = [];
let productID = '';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return products.filter(product => regex.test(product.Name));
}

function getSuggestionValue(suggestion) {
  return suggestion.Name;
}

function renderSuggestion(suggestion) {
	productID = suggestion._id
  return (
    <span>{suggestion.Name}</span>
  );
}

class ProductAutoSearch extends React.Component {
  constructor(props) {
    super(props);
		console.log(props)
    this.state = {
      value: '',
			suggestions: [],
			ProductID: ''
    };    
	}
	
	updateProduct = () => {
		this.props.updateProduct(productID)
	}

  onChange = (event, { newValue, method }) => {
    this.setState({
			value: newValue,
			ProductID: productID
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
	
	componentDidMount(){
		axios.get("/api/products/All").then(productsResult => {
			products = productsResult.data;
			console.log("new products", products)
		})
	}

  render() {
    const { value, suggestions, ProductID } = this.state;
    const inputProps = {
      placeholder: "Product Seach",
      value,
			onChange: this.onChange,
			id: ProductID
    };

    return (
			<React.Fragment>
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
				inputProps={inputProps} />
				<Button color="deep-orange" rounded onClick = {this.updateProduct} >Lock in Product</Button>
				</React.Fragment>
    );
  }
}

export default ProductAutoSearch;
