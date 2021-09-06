import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { IBooking } from "./bookingPage";

export const Day = (props: IBooking) => {
  const [day, setDay] = useState<Date | Date[]>(new Date());

  return (
    <div>
      <Calendar
        onChange={(date: Date | Date[]): void => {
          const newDate = date.toString();
          const chosenDate = moment(newDate).format("YYYY-MM-DD");
          setDay(date)

          props.booking.date = chosenDate;
        }}
        value={day}
        minDate={new Date()}
      />
    </div>
  );
};
