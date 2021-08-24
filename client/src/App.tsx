import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LandingPage } from './components/landingPage/landingPage';
import { ContactPage } from './components/contactPage/contactPage';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
     {/* <Nav/> */}
      <LandingPage /> 
    </Route>
    <Route exact path="/contact">
    {/* //<Nav/> */}
      <ContactPage/> 
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
