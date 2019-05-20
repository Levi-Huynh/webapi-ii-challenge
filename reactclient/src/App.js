import React, {Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PostsLists from './PostsList';
import QuoteDetails from './QuoteDetails';

function App() {
  return (
    <div className="mainbox">
  <Route exact path= '/' component={PostsLists}/>
  <Route exact path= '/projectdetails/:id' component={QuoteDetails}/>
       
   </div>
  );
}

export default App;
