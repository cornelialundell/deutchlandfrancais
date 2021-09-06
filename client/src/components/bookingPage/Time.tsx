import { useEffect, useState } from "react";
import { JsxElement } from "typescript";
import { IBooking } from "./bookingPage";
import { StyledDiv } from "./bookingPage.style";
import { TimeButton } from "./timeButton.style";

export const Time = (props: IBooking) => {
  const [time, setTime] = useState<number>();
 

  const bookTime = (event: React.MouseEvent<HTMLElement>) => {
    const chosenTime = parseInt((event.target as HTMLBodyElement).id);
    props.booking.time = chosenTime;
    setTime(chosenTime);
  };

  useEffect(()=> {
    props.booking.time = time;
   
        }, [])
  if (props.booking.isAvailable) {
    return (
      <StyledDiv>
        <TimeButton
          id="18"
          bgColor={props.booking.isAvailable[0] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.booking.isAvailable[0]
              ? bookTime
              : () => alert("Tiden går ej att boka tyvärr")
          }
        >
          18:00
        </TimeButton>
        <TimeButton
          id="21"
          bgColor={props.booking.isAvailable[1] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.booking.isAvailable[1]
              ? bookTime
              : () => alert("Tiden går ej att boka tyvärr")
          }
        >
          21:00
        </TimeButton>
      </StyledDiv>
    );
  } else {
    return <></>;
  }
};
