import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Booking } from "../bookingPage/booking";
import styled from "styled-components";
import { Wrapper } from "../globalStyles/Wrapper";
import { Button } from "../globalStyles/Button";
import { Heading } from "../globalStyles/Heading";
import { P } from "../globalStyles/P-style";
import { useHistory } from "react-router-dom";

const CancelForm = styled.form `
    display: flex;
    flex-direction: column;
    `

export const CancelBookingPage = () => {
  const [confirmationNumber, setConfirmationNumber] = useState<number | undefined>();
  const [showComponent, SetShowComponent] = useState(true);
  const history = useHistory();

  const cancelBooking = (e: FormEvent) => {
    e.preventDefault();
    console.log(confirmationNumber)

    deleteData();
    async function deleteData() {
      try {

        if (!confirmationNumber) {
            alert('Fyll i konfirmationsnummer.')
        } else{

        const sendData = {
          confirmationNumber,
        };

        axios
          .post("http://localhost:9000/cancelBooking", sendData)
          .then(() => SetShowComponent(false))
          .catch((err) => {
            console.log(err);
            alert('Fyll i ditt konfirmationsnummer')
            
          }); }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const routeChange = () =>{ 
    let path = `/booking`; 
    history.push(path);
  }

  return (
    <>
    <Wrapper>
        {showComponent ? (
            <>
      <Heading>Avboka</Heading>
      <P bg="none" width="auto">Vad tråkigt att vi inte får ha er runt vårt bord!</P>
      <CancelForm onSubmit={cancelBooking}>
        <input
          type="text"
          placeholder="konfirmationsnummer"
          onChange={(e) => { setConfirmationNumber(parseInt(e.target.value) )}}
          value={confirmationNumber}
        />
        <Button type="submit">Avboka</Button>
        
      </CancelForm>
      </>
      ) : (
          <>
          <Heading>Avbokat!</Heading>
          <P width="auto" bg="none">Vill du boka bord vid ett annat tillfälle? :)</P>
          <Button onClick={routeChange}>Boka här</Button>
          </>
      )}
      </Wrapper>
    </>
  );
};
