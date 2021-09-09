import styled from "styled-components";

interface IStyledP {
    bg?: string;
    width?: string;
    clr?: string;
}

export const P = styled.p`
width: ${(props:IStyledP) => props.width ? props.width : "100%"};
color: ${(props:IStyledP) => props.clr ? props.clr : "#222%"};
line-height: 1.4;
font-size: 1rem;
padding: 1.5rem 0rem;
border-radius: 2px;
letter-spacing: .5px;

`