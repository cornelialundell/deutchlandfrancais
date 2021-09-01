import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LandingPage } from './components/landingPage/landingPage'
import { ContactPage } from './components/contactPage/contactPage';
import { Navigation} from './components/navigation/navigation';
import { BookingPage } from './components/bookingPage/bookingPage';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
     <Navigation/>
      <LandingPage /> 
    </Route>
    <Route exact path="/contact">
    {/* //<Nav/> */}
      <ContactPage/> 
    </Route>
    <Route exact path="/booking">
    <Navigation />
      <BookingPage />
    </Route>
</Switch>
  </Router>
 
  );
}

export default App;
