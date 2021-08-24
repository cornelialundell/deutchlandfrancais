import React, { FormEvent, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Wrapper } from "./BookingForm.style";

export const BookingForm = () => {
  const [value, onChange] = useState(new Date());
  const [numberOfPeople, setPeople] = useState<number>(0);
//   const [numberOfTables, calculateTables] = useState<number>(0)
  const [time, setTime] = useState<string>("");
  const [flashMessage, setFlash] = useState<String | null>(null);
  const [stage, setStage] = useState("date");

  const selectDate = () => {
    const todaysDate = new Date();
    if (value < todaysDate) {
      setFlash("no");

      return;
    }
    setFlash(null);
    setStage("people");
  };

  const selectPeople = (e: FormEvent) => {
      e.preventDefault()
      setStage("time")

  }

  const calculateTables = (numberOfPeople: number) => {
      let numberOfTables: number;
      if (numberOfPeople % 6 == 0) {
          numberOfTables = (numberOfPeople / 6)
          console.log(numberOfTables)
          return numberOfTables
      }
      if (numberOfPeople % 6 > 0) { 
          let remaining = (numberOfPeople % 6)
          let evenPeople = ((numberOfPeople - remaining) / 6) 
          numberOfTables = evenPeople + 1
          return numberOfTables
      }

  }


//   const calculateTablesButInABadWay = (ppl: number) => {
//       return Math.ceil(ppl / 6)
//   }

  const selectTime = (time: string) => {
    setTime(time)
    setStage('confirmation')
  }
  if (stage == "date")
    return (
      <Wrapper>
        {flashMessage ? <div>Prova ett datum i framtiden :)</div> : null}
        <Calendar onChange={onChange} value={value} />
        <button onClick={selectDate}>Gå vidare</button>
      </Wrapper>
    );

  if (stage == "people") return (
  <Wrapper>
      <form onSubmit={selectPeople} >
      <input type="number" min="1" max="90" onChange={(e) => setPeople(parseInt(e.target.value))} value={numberOfPeople} />
      <button type="submit">Gå vidare</button></form>
      </Wrapper>
  )

  if (stage == "time") return (
    <Wrapper>
        Du har valt datumet {value.toDateString()} för {numberOfPeople} personer!
        Det behövs {calculateTables(numberOfPeople)} bord!
       De här tiderna e tillgängliga:

       <button onClick={() => {selectTime('18:00')}}>
           18:00
       </button>
       <button>
           21:00
       </button>
        </Wrapper>
    )

    if (stage == "confirmation") return (
        <Wrapper>
            Du har valt datumet {value.toDateString()} för {numberOfPeople} personer tiden {time}

            <form>
                <input type="text" placeholder="namn"/>
                <input type="email" placeholder="email"/>
                <button type="submit">Slutför bokningen</button>
            </form>
            </Wrapper>
        )

  else {
    return <div>synd ditt hor</div>;
  }
};
