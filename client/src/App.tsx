import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from './components/LandingPage/landingPage';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
     {/* <Nav/> */}
      <LandingPage /> 
    </Route>
    <Route exact path="/contact">
    {/* <Nav/>
      <Contact /> */}
    </Route>
    <Route exact path="/booking">
    {/* <Nav />
      <BookingForm /> */}
    </Route>
</Switch>
  </Router>
 
  );
}

export default App;
