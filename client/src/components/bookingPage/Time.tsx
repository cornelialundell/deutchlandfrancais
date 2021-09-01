import { useState } from "react";
import { JsxElement } from "typescript";
import { TimeButton } from "./timeButton.style";


export const Time = (props: any) => {
    const [time, setTime] = useState<number>();
  const bookTime = (event: React.MouseEvent<HTMLElement>) => {
    const chosenTime = parseInt((event.target as HTMLBodyElement).id);
    setTime(chosenTime)
    props.booking.time = chosenTime;
  };
  if (props.isAvailableArray) {
    return (
      <div>
        Väl tid ditt hor
        <TimeButton
          id="18"
          bgColor={props.isAvailableArray[0] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.isAvailableArray[0]
              ? bookTime
              : () => alert("Tiden går ej att boks tyvärr")
          }
        >
          18:00
        </TimeButton>
        <TimeButton
          id="21"
          bgColor={props.isAvailableArray[1] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.isAvailableArray[0]
              ? bookTime
              : () => alert("Tiden går ej att boks tyvärr")
          }
        >
          21:00
        </TimeButton>
      </div>
    );
  } else {
    return <></>;
  }
};
