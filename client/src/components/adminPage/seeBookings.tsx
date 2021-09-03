import axios from "axios";
import { useState } from "react";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";


let date: string = "2021-09-03";



export const SeeBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>();

    function getBookings() {
        axios
          .get("http://localhost:9000/getBookings", {
            params: {
              date: date,
            },
          })
          .then((resp) => {
              setBookings(resp.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }

  return (
    <div>
      <Button onClick={getBookings}>Se dagens bokningar</Button>
      {bookings ? (
   <ul>
   {bookings.map((booking,index)=>{
       return <li key={index}>
           <p>{booking.name}</p>
           <p>Antal gäster: {booking.guests}</p>
           <p>Tid: {booking.time}</p>
       </li>
   })}
</ul>
      ): 
  <p>Välj ett datum</p>
  }
    </div> 
  );
};
