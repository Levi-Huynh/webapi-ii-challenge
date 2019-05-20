import React, {Component} from 'react';

import {connect} from 'react-redux';
import {getActions} from './actions/index';
import Action from './Action';

class QuoteDetails extends Component {
    state = {
   
    };
  
     componentDidMount() {
         //call our action
       this.props.getActions(this.props.match.params.id);
     }
  
    render() {
 console.log("quote props", this.props.actions);
   
      return (
     
   
        <div className="PostDetails">
        {this.props.actions.map(a => {
return (
   <Action key={a.title} action={a} actions={this.props.actions}/>
);
        })}
             
            </div>
      );
    }
  }
  
  const mapStateToProps = state => {
  
    return {
  actions: state.actions,
    
    };
  };
  
  export default connect(
    mapStateToProps, {getActions:getActions }
    
  )(QuoteDetails);
  