import { Day } from "./Day";
import { ContactInformation } from "./ContactInformation";
import { NumberOfPeople } from "./NumberOfPeople";
import { Time } from "./Time";
import { useState } from "react";
import { Booking } from "./booking";
import axios from "axios";
import React from 'react'

export const BookingPage:React.FC  = () => {
  const [booking, setBooking] = useState<Booking>(new Booking());
  const [numberOfPeople, setGuests] = useState<number | null>();
  const [day, onChange] = useState(new Date());
  const [isAvailable, setAvailable] = useState<[] | null>()
  const [time, setTime] = useState<number>();
  const [showComponent, setShowComponent] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  


  const checkAvailability = () => {
      const bookedDay = booking.day
      const bookedPeople = booking.guests

      sendData();
    async function sendData() {
      try {
          console.log(booking.day)
        const sendData = {
          bookedDay,
          bookedPeople,
        };

         axios.post("http://localhost:9000/booking", sendData).then((resp) => {
            setAvailable(resp.data)
          })
          .catch((err) => {
            console.log(err)
          })
      } catch (err) {
        console.log(err);
      }

    }

     
  };

 const confirmBooking = () => {
    // const bookedName = booking.name
    // const bookedEmail = booking.email
    // const bookedPhone = booking.phones

    sendData();
    async function sendData() {
      try {
      console.log(booking)
    
      const sendData = {
        booking
      //bookedName,
      //bookedEmail,
      //bookedPhone,
    };

    axios.post("http://localhost:9000/confirmBooking", sendData)
          .catch((err) => {
            console.log(err)
          })
     } catch (err) {
        console.log(err);
      }
    }
  };

  return (
      <div>
    {showComponent ? (
    <div>
      <Day booking={booking} />
      <NumberOfPeople booking={booking} />
      <button onClick={checkAvailability}>Check available times</button>
      <Time booking={booking} isAvailableArray={isAvailable}/>
      <button onClick={() => setShowComponent(false)}>gå vidare </button>
      
    </div>)
    : (
    <div>
        <p>Datum: {booking.day}</p>
        <p>Antal gäster: {booking.guests}</p>
        <p>Tid: Kl {booking.time}</p>
        <p>Vänligen fyll i: </p>

        <ContactInformation booking={booking}/>
        <button onClick={confirmBooking}>Bekräfta</button>
    </div>)}</div>
  );


};
