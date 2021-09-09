import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";
import { Wrapper } from "../globalStyles/Wrapper";
import { Card, StyledDiv } from "./editBooking.style";
import { useHistory } from "react-router-dom";
import { P } from "../globalStyles/P-style";

interface IParams {
  id: string;
}

export const EditBooking = () => {
  let history = useHistory()
  const [booking, setBooking] = useState<Booking>();
  const [confirmationNumber, setConfirmationNumber] = useState<number | undefined>();
  const params: IParams = useParams();
  const id: number = parseInt(params.id);
  const [flashMessage, setFlashMessage] = useState("");

  function getBooking() {
    axios
      .get("http://localhost:9000/getBooking", {
        params: {
          confirmation: id,
        },
      })
      .then((resp) => {
        setBooking(resp.data);
        setConfirmationNumber(resp.data.confirmation)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getBooking(); 
    
  });

  async function updateBooking(e: FormEvent) {
    e.preventDefault();
    try {
      const sendData = {
        booking,
      };

      await axios.post("http://localhost:9000/updateBooking", sendData).then(() => {
   console.log('hej')
      })
      .catch((err) => {
        alert('Tiden är tyvärr fullbokad');
      }); 

      

    } catch (err) {
      console.log(err);
    }
    history.goBack()
  }

  const deleteBooking = () => {
    
    console.log(confirmationNumber)

    deleteData();
    async function deleteData() {
      try {


        const sendData = {
          confirmationNumber,
        };

        axios
          .post("http://localhost:9000/cancelBooking", sendData)
          .then(() => setFlashMessage('Bokningen är nu avbokad'))
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  

  }
  return (
    <>
      {booking ? (
        <Wrapper>
          <Link to="/admin"><Button>Gå tillbaka</Button></Link>
          <P>{flashMessage}</P>
          <form onSubmit={updateBooking}>
            <Card>
              <input
                type="number"
                placeholder={`${booking.guests}`}
                onChange={(e) => {
                  booking.guests = parseInt(e.target.value)
                }}
              />
              <input
                type="number"
                placeholder={`${booking.time}`}
                onChange={(e) => {
                  booking.time = parseInt(e.target.value)
                }}
              />
              <input
                type="text"
                placeholder={`${booking.date}`}
                onChange={(e) => {
                  booking.date = e.target.value
                }}
              />
            </Card>
            <StyledDiv>
            <Button type="button" onClick={deleteBooking}>Ta bort bokning</Button>
            <Button type="submit">Spara</Button>
            </StyledDiv>
        </form>
        
        </Wrapper>
      ) : (
        <p>finns ingen bokning</p>
      )}
    </>
  );
};
