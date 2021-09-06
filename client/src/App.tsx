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
    <Route exact path="/admin">
    {/* <Navigation /> */}
      <AdminPage />
    </Route>

    <Route exact path="/cancel">
      <CancelBookingPage/>
      </Route>
    <Route exact path="/edit/:id">
    {/* <Navigation /> */}
      {/* <AdminPage /> */}
      <EditBooking />
    </Route>
</Switch>
  </Router>
 
  );
}

export default App;
