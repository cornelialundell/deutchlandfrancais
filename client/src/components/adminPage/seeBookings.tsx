import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";


let date: string = "2021-09-03";



export const SeeBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>();
    const isEdit: Boolean = true;

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
       return <li key={index} className={isEdit ? 'editMode' : ''}>
           <p>{booking.name}</p>
           <p>Antal gäster: {booking.guests}</p>
           <p>Tid: {booking.time}</p>
           <Link to={`/edit/${booking.confirmation}`}>
    <button key={index}>
          Edit
    </button>
</Link>
       </li>
   })}
</ul>
      ): 
  <p>Välj ett datum</p>
  }
    </div> 
  );
};
