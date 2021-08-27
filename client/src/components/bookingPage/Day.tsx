import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

export const Day = () => {


        const [value, onChange] = useState(new Date());
        const [flashMessage, setFlash] = useState<String | null>(null);


    
    return(
        <div>
        <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
            />
        </div>
    )
} 