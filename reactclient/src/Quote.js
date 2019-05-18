import React from "react";

const Quote = props => {
  return  (
    <div>
  <li>{props.quote.title} </li>
  <li>{props.quote.contents}</li>  
  <li>{props.quote.created_at}</li>
  <li>{props.quote.updated_at}</li>

              
                </div>
  
  )
};

export default Quote;
