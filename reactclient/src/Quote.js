import React from "react";
import './quote.css';
import {Link} from 'react-router-dom';

const Quote = props => {
  return  (
    <Link to={`/projectdetails/${props.quote.id}`}>
    <div className="card">
     
<h3 className="card-header"> {props.quote.title}</h3>

    <div className="main-description">
<p >{props.quote.contents}</p>
<p >Created at {props.quote.created_at}</p>
<p >Updated at {props.quote.updated_at}</p>
</div>
</div>
</Link>

           
               
  
  )
};

export default Quote;
