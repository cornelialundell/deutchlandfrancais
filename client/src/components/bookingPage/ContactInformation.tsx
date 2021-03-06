import {useState } from "react";

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
          required
          onChange={(e) => {
            setGuestName(e.target.value);
            props.selectName(e.target.value);
          }}
          value={guestName}
        />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => {
            setGuestEmail(e.target.value);
            props.selectEmail(e.target.value);
          }}
          value={guestEmail}
        />
        <input
          type="text"
          placeholder="telefonnummer"
          required
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
