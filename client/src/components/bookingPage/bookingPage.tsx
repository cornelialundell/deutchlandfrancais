import { Day } from "./Day";
import { ContactInformation } from "./ContactInformation";
import { NumberOfPeople } from "./NumberOfPeople";
import { useEffect, useState } from "react";
import { Booking } from "./booking";
import React from "react";
import axios from "axios";
import { Time } from "./Time";
import { Wrapper } from "../globalStyles/Wrapper";
import { StyledDiv } from "./bookingPage.style";
import { Button } from "../globalStyles/Button";

export interface IBooking {
  booking: Booking,
}

export const BookingPage: React.FC = () => {
  
  const [booking, setBooking] = useState<Booking>(new Booking());
  const [numberOfPeople, setGuests] = useState<number | null>();
  const [day, onChange] = useState(new Date());
  let [isAvailable, setAvailable] = useState<[] | null>();
  const [time, setTime] = useState<number | undefined>(undefined);
  const [showComponent, setShowComponent] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [toggleTimes, setToggleTimes] = useState<boolean>(false);

// useEffect(()=> {
//   
//       }, [])
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
            booking.isAvailable = resp.data
            setAvailable(resp.data);
            
          })
          .catch((err) => {
            console.log(err);
            alert('Fyll i alla fält.')
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
          booking,
        };

        axios
          .post("http://localhost:9000/confirmBooking", sendData)
          .catch((err) => {
            console.log(err);
            alert('Något blev fel, försök igen.')
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  

  return (
    <Wrapper>
      {showComponent ? (
        <StyledDiv>
          <Day booking={booking} />
          <NumberOfPeople booking={booking} />
          <Button onClick={checkAvailability}>Sök lediga tider</Button>
          <Time booking={booking}/>
        {console.log(time)}
          <Button onClick={() => setShowComponent(false)}>gå vidare </Button>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <p>Datum: {booking.date}</p>
          <p>Antal gäster: {booking.guests}</p>
          <p>Tid: Kl {booking.time}</p>
          <p>Vänligen fyll i: </p>

          <ContactInformation booking={booking} />
          <button onClick={confirmBooking}>Bekräfta</button>
        </StyledDiv>
      )}
    </Wrapper>
  );
};
