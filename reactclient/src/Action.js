import React from 'react';

import './quote.css';

const Action  = props => {
  
return (
   
<div className="card">
<h3 className="card-header">
<p>Task # {props.action.id}</p>
{props.action.title}
</h3>

<div className="main-description">
<p>{props.action.contents}</p>
</div>
</div>

        )
    };


    export default Action;