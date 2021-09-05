import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { Booking } from "../bookingPage/booking";
import { Button } from "../globalStyles/Button";
import { Wrapper } from "../globalStyles/Wrapper";
import { Card } from "./editBooking.style";
import { useHistory } from "react-router-dom";

interface IParams {
  id: string;
}

export const EditBooking = () => {
  let history = useHistory()
  
  const [booking, setBooking] = useState<Booking>();
  const params: IParams = useParams();
  const id: number = parseInt(params.id);

  function getBooking() {
    axios
      .get("http://localhost:9000/getBooking", {
        params: {
          confirmation: id,
        },
      })
      .then((resp) => {
        setBooking(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getBooking(); 
  }, []);

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
    history.push('/admin')
  }
  return (
    <>
      {booking ? (
        <Wrapper>
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
            <Button type="submit">Save</Button>
        </form>
        </Wrapper>
      ) : (
        <p>finns ingen bokning</p>
      )}
    </>
  );
};
