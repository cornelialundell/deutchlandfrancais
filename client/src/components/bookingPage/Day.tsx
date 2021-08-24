import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

export const Day = () => {


        const [value, onChange] = useState(new Date());
        const [flashMessage, setFlash] = useState<String | null>(null);

        const selectDate = () => {
            const todaysDate = new Date();
            if (value < todaysDate) {
                setFlash('no')
              return;
            }
            setFlash(null);
          };
    
    return(
        <div>
              {flashMessage ? <div>Det datumet har redan varit ditt hor</div> : null}
        <Calendar
        onChange={onChange}
        value={value}
            />
        <button onClick={selectDate}>Gå vidare</button>
        </div>
    )
} 