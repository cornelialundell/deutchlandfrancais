import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LandingPage } from './components/landingPage/landingPage'
import { ContactPage } from './components/contactPage/contactPage';
import { Navigation} from './components/navigation/navigation';
import { BookingPage } from './components/bookingPage/bookingPage';
import { AdminPage } from './components/adminPage/adminPage';
import { CancelBookingPage} from './components/cancelBookingPage/cancelBooking';
import { EditBooking } from './components/adminPage/editBooking';
import { ThankyouPage } from './components/thankyouPage/thankYou';
import { FoodMenu } from './components/foodMenu/foodMenu';
import { FourZeroFour } from './components/FourZeroFour/FourZeroFour';



function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
     <Navigation />
      <LandingPage /> 
    </Route>
    <Route exact path="/contact">
    <Navigation />
      <ContactPage/> 
    </Route>
    <Route exact path="/booking">
    <Navigation />
      <BookingPage />
    </Route>
    <Route exact path="/admin">
    <Navigation />
      <AdminPage />
    </Route>
    <Route exact path="/menu">
      <Navigation/>
      <FoodMenu/>
    </Route>

    <Route exact path="/cancel">
      <Navigation/>
      <CancelBookingPage/>
      </Route>
    <Route exact path="/edit/:id">
    <Navigation />
      <EditBooking />
    </Route>
    <Route exact path="/thankyou">
    <Navigation />
      <ThankyouPage />
    </Route>
    <Route path='*'>
    <Navigation />
    <FourZeroFour />
    </Route>
</Switch>
  </Router>
 
  );
}

export default App;
