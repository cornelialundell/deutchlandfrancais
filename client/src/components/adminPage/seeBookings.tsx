import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";
import { Card } from "./editBooking.style";

let date: string = "2021-09-03";

export const SeeBookings = (props:any) => {
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
        setBookings(resp.data);
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
          {bookings.map((booking, index) => {
            return (
              <Card>
              <li className={isEdit ? "editMode" : ""}>
                <p>Namn: {booking.name}</p>
                <p>Antal gäster: {booking.guests}</p>
                <p>Tid: {booking.time}:00</p>
                <Link to={`/edit/${booking.confirmation}`}>
                  <Button bgColor="#ED7D0C" key={index}>Edit</Button>
                </Link>
              </li>
              </Card>
            );
          })}
        </ul>
      ) : (
        <p>Välj ett datum</p>
      )}
      <Button bgColor="#ED7D0C" 
      onClick={() => {
        Cookies.remove('cookie')
        props.setCookie(false)
      }}>Logga ut</Button>
    </div>
  );
};
