import axios from "axios";
import Cookies from "js-cookie";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  useState,
} from "react";
import Calendar, { CalendarProps, OnChangeDateCallback } from "react-calendar";
import { Link } from "react-router-dom";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";
import { Card } from "./editBooking.style";
import moment from 'moment'

export const SeeBookings = (props: any) => {
  const [day, setDay] = useState<Date | Date[]>();;
  const [bookings, setBookings] = useState<Booking[]>();
  const isEdit: Boolean = true;

  function getBookings(date: Date | Date[]) {
    const newDate = date.toString()
    const currentDate = moment(newDate).format("YYYY-MM-DD")
    console.log(currentDate)

    axios
      .get("http://localhost:9000/getBookings", {
        params: {
          date: currentDate,
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
                    <Button bgColor="#ED7D0C" key={index}>
                      Edit
                    </Button>
                  </Link>
                </li>
              </Card>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>Välj ett datum för att kolla bokningar.</p>
          <Calendar
            onChange={(date: Date | Date[]):void  => {
             getBookings(date)
            }}

            value={day}
            minDate={new Date()}
          />
        </div>
      )}
      <Button
        bgColor="#ED7D0C"
        onClick={() => {
          Cookies.remove("cookie");
          props.setCookie(false);
        }}
      >
        Logga ut
      </Button>
    </div>
  );
};
