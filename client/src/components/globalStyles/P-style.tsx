import styled from "styled-components";

interface IStyledP {
    bg?: string;
    width?: string;
}

export const P = styled.p`
width: ${(props:IStyledP) => props.width ? props.width : "100%"};
line-height: 1.4;
font-size: 1rem;
padding: 1.5rem 1rem;
background-color: ${(props: IStyledP) => props.bg ? props.bg : 'rgba(0, 0, 0, 0.5)'};
border-radius: 2px;
letter-spacing: .5px;
`