import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Day = (props:any) => {
  const [day, setDay] = useState(new Date());
  

  return (
    <div>
      <Calendar onChange={(event: any) => {if (event) {
        const newDay = event
            setDay(newDay);

            props.booking.date = newDay.toLocaleDateString();
            
          }}} value={day} minDate={new Date()} />
    </div>
  );
};
