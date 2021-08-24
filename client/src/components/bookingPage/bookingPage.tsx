import { Day } from "./Day"
import { ContactInformation } from "./ContactInformation"
import { NumberOfPeople } from "./NumberOfPeople"
import { Time } from "./Time"
import { useState } from "react";
import { Booking } from "./booking";




export const BookingPage = () => {

    const [booking, setBooking] = useState<Booking>(new Booking)
    const [value, setGuests] = useState<number | null >(); 
    return (

        <div>Här kan du boka bord hehe
        <Day /> 
        <NumberOfPeople booking={booking} />
        <Time/>
        <ContactInformation />

        <button onClick={() => alert(booking.guests)}>KLICKA HÄR</button>

        ni ska vara såhär många {booking.guests} haha
        </div>
    )
}