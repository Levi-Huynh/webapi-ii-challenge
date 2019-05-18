import React from "react";
import { connect } from "react-redux";
import Quote from './Quote';


const QuoteList = props => {
  if(!props.quote){return <h1>Loading</h1>}
  return (
    <ul>
      {props.quote.map(quote => {
        return <Quote key={quote.name} quote={quote} />;
      })}
    </ul>
 
  );
};

export default QuoteList;

  