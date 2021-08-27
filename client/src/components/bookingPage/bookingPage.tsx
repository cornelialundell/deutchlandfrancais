import { Day } from "./Day";
import { ContactInformation } from "./ContactInformation";
import { NumberOfPeople } from "./NumberOfPeople";
import { Time } from "./Time";
import { useState } from "react";
import { Booking } from "./booking";
import axios from "axios";
import React from 'react'

export const BookingPage:React.FC = () => {
  const [booking, setBooking] = useState<Booking>(new Booking());
  const [numberOfPeople, setGuests] = useState<number | null>();
  const [day, onChange] = useState(new Date());
  const [isAvailable, setAvailable] = useState<[] | null>()

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

  return (
    <div>
      <Day booking={booking} />
      <NumberOfPeople booking={booking} />
      <button onClick={checkAvailability}>Check available times</button>
      <Time isAvailableArray={isAvailable}/>
      {/* {isAvailable ? 'det är ledigt!' : 'det är fullt tyvärr'} */}
      <ContactInformation />
    </div>
  );
};
