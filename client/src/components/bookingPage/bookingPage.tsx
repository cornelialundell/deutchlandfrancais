import { Day } from "./Day"
import { ContactInformation } from "./ContactInformation"
import { NumberOfPeople } from "./NumberOfPeople"
import { Time } from "./Time"
import { useState } from "react";
import { Booking } from "./booking";




export const BookingPage = () => {

    const [booking, setBooking] = useState<Booking>(new Booking)
    const [numberOfPeople, setGuests] = useState<number | null >(); 
    const [day, onChange] = useState(new Date());
    return (

        <div>
        <Day booking={booking}/> 
        <NumberOfPeople booking={booking} />
        <button onClick={() => console.log(booking) }>Check available times</button>
        <Time/>
        <ContactInformation />


        </div>
    ) 
}