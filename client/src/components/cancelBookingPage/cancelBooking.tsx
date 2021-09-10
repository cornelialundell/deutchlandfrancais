import { FormEvent, useState } from "react";
import axios from "axios";
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
  const [confirmationNumber, setConfirmationNumber] = useState<number>();
  const [showComponent, SetShowComponent] = useState(true);
  const history = useHistory();
  const [flashMessage, setFlashMessage] = useState("");
  const [email, setEmail] = useState("");

  const cancelBooking = (e: FormEvent) => {
    e.preventDefault();

    deleteData();
    async function deleteData() {
      try {

        if (!confirmationNumber) {
            alert('Fyll i konfirmationsnummer.')
        } else{

        const sendData = {
          confirmationNumber,
          email
        };

        axios
          .post("http://localhost:9000/cancelBooking", sendData)
          .then(() => SetShowComponent(false))
          .catch((err) => {
            console.log(err);
            setFlashMessage('Ogiltigt konfirmationsnummer.')
            
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
      <P width="auto" clr="#e74c3c">{flashMessage}</P>
      <P width="auto">Vad tråkigt att vi inte får ha er runt vårt bord!</P>
      <CancelForm onSubmit={cancelBooking}>
        <input
          type="text"
          placeholder="konfirmationsnummer"
          onChange={(e) => { 
            setConfirmationNumber(parseInt(e.target.value))
            setFlashMessage('')
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => { 
            setEmail(e.target.value)
            setFlashMessage('')
          }}
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
