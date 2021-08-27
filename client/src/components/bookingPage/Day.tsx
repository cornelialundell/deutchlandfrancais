import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Day = (props:any) => {
  const [day, onChange] = useState(new Date());

  const sendProps = () =>{
    props.booking.day = day;
  }

  return (
    <div>
      <Calendar onChange={onChange} value={day} minDate={new Date()} />
      <button onClick={sendProps}>Välj datum</button>
    </div>
  );
};
