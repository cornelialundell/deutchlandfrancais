import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Booking } from "../bookingPage/booking";

interface IParams {
  id: string;
}

export const EditBooking = () => {
  const [booking, setBooking] = useState<Booking>();
  const params: IParams = useParams();
  const id: number = parseInt(params.id);

  function getBooking() {
    axios
      .get("http://localhost:9000/getBooking", {
        params: {
          confirmation: id,
        },
      })
      .then((resp) => {
        setBooking(resp.data);
        console.log(booking);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getBooking();
  return (
    <>
      {booking ? (
        <div>
          <input type="number" placeholder={`${booking.guests}`}/>
          <input type="number" placeholder={`${booking.time}`}/>
          <input type="text" placeholder={`${booking.date}`}/>
        </div>
      ) : (
        <p>finns ingen bokning</p>
      )}
    </>
  );
};
