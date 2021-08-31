import { useState } from "react";

export const ContactInformation = () => {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="namn"
        onChange={(e) => setGuestName(e.target.value)}
        value={guestName}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setGuestEmail(e.target.value)}
        value={guestEmail}
      />
      <input
        type="text"
        placeholder="telefonnummer"
        onChange={(e) => setGuestPhone(e.target.value)}
        value={guestPhone}
      />
    </div>
  );
};
