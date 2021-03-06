import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import PageDetailsScreen from './Pages/PageDetails/PageDetails'
import Header from './Components/Header/Header'
import ManagePage from './Pages/ManagePage/ManagePage'
import PageEditScreen from './Pages/PageEditScreen/PageEditScreen'

function App() {
  return (
    <Router>
      <Header/>
      <Route path='/page/:id' component={PageDetailsScreen} />
      <Route path='/admin/page/:id/edit' exact component={PageEditScreen}/>
      <Route path='/admin/pagelist' exact component={ManagePage}/>
      <Route path='/' exact component={HomePage}/>

    </Router>
  );
}

export default App;
