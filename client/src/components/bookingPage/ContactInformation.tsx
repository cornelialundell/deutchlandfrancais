import React, { FormEvent, useEffect, useState } from "react";
import { IBooking } from "./bookingPage";

interface IBookingContactProps {
  guestName: string;
  email: string;
  phones: string;
  selectName(bookingName: string): void;
  selectEmail(bookingEmail: string): void;
  selectPhones(bookingPhones: string): void;
}

export const ContactInformation = (props: IBookingContactProps) => {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="namn"
          onChange={(e) => {
            setGuestName(e.target.value);
            props.selectName(e.target.value);
          }}
          value={guestName}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setGuestEmail(e.target.value);
            props.selectEmail(e.target.value);
          }}
          value={guestEmail}
        />
        <input
          type="text"
          placeholder="telefonnummer"
          onChange={(e) => {
            setGuestPhone(e.target.value);
            props.selectPhones(e.target.value);
          }}
          value={guestPhone}
        />
      </form>
    </div>
  );
};
