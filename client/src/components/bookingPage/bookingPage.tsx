import { Day } from "./Day";
import { ContactInformation } from "./ContactInformation";
import { NumberOfPeople } from "./NumberOfPeople";
import { useEffect, useState } from "react";
import { Booking } from "./booking";
import React from "react";
import axios from "axios";
import { Time } from "./Time";
import { Wrapper } from "../globalStyles/Wrapper";
import { FlexDiv, StyledDiv } from "./bookingPage.style";
import { Button } from "../globalStyles/Button";
import { useHistory } from "react-router-dom";
import { LoadingPage } from "../loading/loading";
import { Heading } from "../globalStyles/Heading";
import Modal from "react-modal";
import { P } from "../globalStyles/P-style";
import { Gdpr } from "./gdpr";



export interface IBooking {
  date?: String;
  guests?: number;
  time?: number;
  guestName?: string;
  email?: string;
  phones?: string;
  confirmation?: number;
  isAvailable?: Array<Boolean>;
}

export const BookingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [checkClick, setCheckClick] = useState<Boolean>(false);
  let history = useHistory();
  const [booking, setBooking] = useState<Booking>(new Booking());
  const [numberOfPeople, setGuests] = useState<number | null | undefined>();
  const [day, onChange] = useState<string>("");
  let [isAvailable, setAvailable] = useState<[]>();
  const [time, setTime] = useState<number | undefined>();
  const [showComponent, setShowComponent] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [email, setGuestEmail] = useState("");
  const [phones, setGuestPhone] = useState("");
  const [toggleTimes, setToggleTimes] = useState<boolean>(false);
  const [checked, setChecked] = useState<Boolean>(false)


  // UPDATE EVERYTHING ON BOOKING
  function selectDate(bookingDate: string) {
    onChange(bookingDate);
  }

  function selectGuests(bookingGuests: number) {
    setGuests(bookingGuests);
  }

  function selectTime(bookingTime: number) {
    setTime(bookingTime);
  }

  function selectName(bookingName: string) {
    setGuestName(bookingName);
  }
  function selectEmail(bookingEmail: string) {
    setGuestEmail(bookingEmail);
  }
  function selectPhones(bookingPhones: string) {
    setGuestPhone(bookingPhones);
  }

  function selectChecked(bookingChecked: Boolean) {
    setChecked(bookingChecked);
  }

  const checkAvailability = () => {
    sendData();
    async function sendData() {
      try {
        const sendData = {
          booking: {
            date: day,
            guests: numberOfPeople,
          },
        };

        axios
          .post("http://localhost:9000/booking", sendData)
          .then((resp) => {
            booking.isAvailable = resp.data;
            setAvailable(resp.data);
            setCheckClick(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            alert("Fyll i alla fält.");
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const confirmBooking = () => {
    // CHECK IF EMAIL IS VALID
    let lastDotPos = email.lastIndexOf(".");
    if (
      !(
        email.indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      return alert("Fyll i en korrekt email!");
    }

    if (phones.length !== 10 || phones.match(/^[0-9]+$/) == null) {
      return alert("Fyll i en korrekt telefonnummer! Exempel: 0712345678");
    }

    sendData();
    async function sendData() {
      try {
        const sendData = {
          booking: {
            date: day,
            guests: numberOfPeople,
            time: time,
            name: guestName,
            email: email,
            phones: phones,
          },
        };

        axios
          .post("http://localhost:9000/confirmBooking", sendData)
          .then(() => {
            history.push("/thankyou");
          })
          .catch((err) => {
            console.log(err);
            alert("Något blev fel, försök igen.");
          });
      } catch (err) {
        alert("Något blev fel, försök igen.");
        console.log(err);
      }
    }
  };

  
  return (
    <Wrapper>
      {showComponent ? (
        <StyledDiv>
          <Heading>Boka bord</Heading>
          <Day date={day} selectDate={selectDate} />
          <NumberOfPeople guests={numberOfPeople} selectGuests={selectGuests} />
          <Button onClick={checkAvailability}>Sök lediga tider</Button>
          {checkClick ? (
            <>
              {isLoading ? (
                <LoadingPage />
              ) : (
                <Time
                  time={time}
                  selectTime={selectTime}
                  isAvailable={isAvailable}
                />
              )}
            </>

          ) : (
            <></>
          )}

          {time ? (
            <>
              <Button onClick={() => setShowComponent(false)}>
                gå vidare{" "}
              </Button>
            </>
          ) : (
            <></>
          )}
        </StyledDiv>
      ) : (
        <StyledDiv>
          <Heading>Vem är du?</Heading>
          <p>Datum: {day}</p>
          <p>Antal gäster: {numberOfPeople}</p>
          <p>Tid: Kl {time}</p>
          <p>Vänligen fyll i: </p>

          <ContactInformation
            guestName={guestName}
            email={email}
            phones={phones}
            selectName={selectName}
            selectEmail={selectEmail}
            selectPhones={selectPhones}
          />
          <Gdpr checked={checked} selectChecked={selectChecked}/>
              { checked && email && guestName && phones.length === 10 ? (
                <Button onClick={confirmBooking}>Bekräfta</Button>
              ):(
                <></>
              )}
                
             
          
        </StyledDiv>
      )}
    </Wrapper>
  );
};
