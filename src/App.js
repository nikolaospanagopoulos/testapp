import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import PageDetailsScreen from './Pages/PageDetails/PageDetails'
function App() {
  return (
    <Router>
      < Route path='/page/:id' component={PageDetailsScreen} />
      <Route path='/' exact component={HomePage}/>

    </Router>
  );
}

export default App;
