import { useEffect, useState } from "react";
import { StyledDiv } from "./bookingPage.style";
import { TimeButton } from "./timeButton.style";


interface IBookingTimeProps {
  time: number | undefined;
  isAvailable?: Array<Boolean>;
  selectTime(time: number): void;
}

export const Time = (props: IBookingTimeProps) => {
  const bookTime = (event: React.MouseEvent<HTMLElement>) => {
    const chosenTime = parseInt((event.target as HTMLBodyElement).id);
    props.selectTime(chosenTime);
  };
 

  if (props.isAvailable) {
    return (
      
      <StyledDiv>
        <TimeButton
          id="18"
          bgColor={props.isAvailable[0] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.isAvailable[0]
              ? bookTime
              : () => alert("Tiden går ej att boka tyvärr")
          }
        >
          18:00
        </TimeButton>
        <TimeButton
          id="21"
          bgColor={props.isAvailable[1] ? "#2ecc71" : "#e74c3c"}
          onClick={
            props.isAvailable[1]
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
