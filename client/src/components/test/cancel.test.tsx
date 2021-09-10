import React from "react";
import { render, screen } from "@testing-library/react";
import { CancelBookingPage } from "../cancelBookingPage/cancelBooking";

test("initially no comfirmaion number", () => {
    render(<CancelBookingPage/>)
    const CancelInput = screen.getByPlaceholderText("konfirmationsnummer");

    expect(CancelInput.textContent).toBe("");

})