import { logDOM } from "@testing-library/react"
import styled from "styled-components"
import { StyledHeading } from "./contactPage.style"
import { Wrapper } from "./contactPage.style"
import { StyledButton } from "./contactPage.style"



export const ContactPage = () => {
    
    return (
        <>
        <Wrapper>
        <StyledHeading txt="#ED7D0C">Kontakt</StyledHeading>
        <StyledButton>Avboka</StyledButton> 
        </Wrapper>
        </>
    )
}

// ska finnas
//bakgrund, logga, 