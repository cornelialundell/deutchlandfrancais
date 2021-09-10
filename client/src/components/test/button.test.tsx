import React from "react";
import { render } from "@testing-library/react";
import { BookingPage } from "../bookingPage/bookingPage";
import "@testing-library/jest-dom/extend-expect"


test ("search for available times-button renders", () => {
    const { getByTestId } = render(<BookingPage/>)
    const Button = getByTestId("button")
    
    expect(Button.textContent).toBe("Sök lediga tider");
});
