import React, { useState } from 'react';
import Autosuggest from 'react-bootstrap-autosuggest';
import './app.css';


const styles={
    height:"5vh",
    padding:"1vh",
    width:"20vw",
    margin:"2vw",
    display:"flex",
    flexDirection:"row"
   
}


const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  const suggestions = languages.filter(language => regex.test(language.name));
  
  if (suggestions.length === 0) {
    return [
      { isAddNew: true }
    ];
  }
  
  return suggestions;
}

function App(props){
    
 
    const[value,setValue]=useState('');
    const[suggestions,setSuggestions]=useState([]);

    

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  const getSuggestionValue = suggestion => {
    if (suggestion.isAddNew) {
      return value;
    }
    
    return suggestion.name;
  };

  const renderSuggestion = suggestion => {
    if (suggestion.isAddNew) {
      return (
        <span>
          [+] Add new: <strong>{this.state.value}</strong>
        </span>
      );
    }

    return suggestion.name;
  };
  
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions( []);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    if (suggestion.isAddNew) {
      console.log('Add new:', value);
    }
  };


    // const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: props.placeholder,
      value,
      onChange: onChange,
    style:styles}
    

    return (
   
          <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps} 
      />
   
    );
  }


export default App;
