import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Start } from './components/LandingPage/start';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Contact } from './components/ContactPage/Contact';
import { Nav } from './components/LandingPage/nav';
import {BookingForm} from './components/BookingPage/BookingForm'

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
      <Nav/>
        <Start />
      </Route>
      <Route exact path="/contact">
      <Nav/>
        <Contact />
      </Route>
      <Route exact path="/booking">
      <Nav />
        <BookingForm />
      </Route>
</Switch>
    </Router>
  );
}

export default App;
