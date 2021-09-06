import { Day } from "./Day";
import { ContactInformation } from "./ContactInformation";
import { NumberOfPeople } from "./NumberOfPeople";
import { useState } from "react";
import { Booking } from "./booking";
import React from "react";
import axios from "axios";
import { Time } from "./Time";

export interface IBooking {
  booking: Booking,
}

export const BookingPage: React.FC = () => {
  const [booking, setBooking] = useState<Booking>(new Booking());
  const [numberOfPeople, setGuests] = useState<number | null>();
  const [day, onChange] = useState(new Date());
  let [isAvailable, setAvailable] = useState<[] | null>();
  const [time, setTime] = useState<number>();
  const [showComponent, setShowComponent] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const checkAvailability = () => {
    const bookedDay = booking.date;
    const bookedPeople = booking.guests;

    sendData();
    async function sendData() {
      try {
        console.log(booking.date);
        const sendData = {
          bookedDay,
          bookedPeople,
        };

        axios
          .post("http://localhost:9000/booking", sendData)
          .then((resp) => {
            setAvailable(resp.data);
            booking.isAvailable = resp.data
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };


  const confirmBooking = () => {
 
    sendData();
    async function sendData() {
      try {
        console.log(booking);

        const sendData = {
          booking
        };

        axios
          .post("http://localhost:9000/confirmBooking", sendData)
          .catch((err) => {
            console.log(err);
          });
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
          <Time booking={booking}/>
          <button onClick={() => setShowComponent(false)}>gå vidare </button>
        </div>
      ) : (
        <div>
          <p>Datum: {booking.date}</p>
          <p>Antal gäster: {booking.guests}</p>
          <p>Tid: Kl {booking.time}</p>
          <p>Vänligen fyll i: </p>

          <ContactInformation booking={booking} />
          <button onClick={confirmBooking}>Bekräfta</button>
        </div>
      )}
    </div>
  );
};
