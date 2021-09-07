import { logDOM } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Wrapper } from "../globalStyles/Wrapper"
import { Button } from "../globalStyles/Button"
import { P } from "../globalStyles/P-style"
import { Heading } from "../globalStyles/Heading"



export const ContactPage = () => {
    const history = useHistory();

  const routeChange = () =>{ 
    let path = `/cancel`; 
    history.push(path);
  }
    return (
        <>
        <Wrapper>
        <Heading clr="#ED7D0C">Kontakt</Heading>
        <P bg="none" width="auto">Telefon: 0388-FUCION <br/>
        E-mail: fucionrestaurant.info@gmail.com <br/>
        Adress: Quai de la petit france 168</P>
        <Button onClick={routeChange}>Avboka</Button> 
        </Wrapper>
        </>
    )
}

// ska finnas
//bakgrund, logga, 