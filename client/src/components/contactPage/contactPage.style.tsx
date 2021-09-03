import { logDOM } from "@testing-library/react"
import styled from "styled-components"

interface IStyledHeading {
    txt?: string;
    size?: string;
    
}

export const StyledHeading = styled.h2`
color: ${(props: IStyledHeading) => props.txt ? props.txt : 'red'};
font-size: ${(props:IStyledHeading) => props.size ? props.size: '5em'};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: #cec3ea;
`

export const StyledButton = styled.button`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.1em 0.1em 0;
 border:0.16em solid rgba(255,255,255,0);
 border-radius:2em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
 text-align:center;
 transition: all 0.2s;
background-color: #ED7D0C;
`
