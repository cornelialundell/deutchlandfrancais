import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Booking } from "../bookingPage/booking";

export const CancelBookingPage = () => {
  const [confirmationNumber, setConfirmationNumber] = useState<number | undefined>();

  const cancelBooking = (e: FormEvent) => {
    e.preventDefault();
    console.log(confirmationNumber)

    deleteData();
    async function deleteData() {
      try {


        const sendData = {
          confirmationNumber,
        };

        axios
          .post("http://localhost:9000/cancelBooking", sendData)
          .then(() => alert("Din bokning är nu avbokad"))
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h2>Avboka</h2>
      <p>Vad tråkigt att vi inte får ha er runt vårt bord!</p>
      <form onSubmit={cancelBooking}>
        <input
          type="text"
          placeholder="konfirmationsnummer"
          onChange={(e) => { setConfirmationNumber(parseInt(e.target.value) )}}
          value={confirmationNumber}
        />
        <button type="submit">Avboka</button>
      </form>
    </>
  );
};
