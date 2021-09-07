import styled from "styled-components";

interface IStyledHeading {
    clr?: string;
    size?: string;
    
}

export const Heading = styled.h2`
color: ${(props: IStyledHeading) => props.clr ? props.clr : '#ED7D0C'};
font-size: ${(props:IStyledHeading) => props.size ? props.size: '5em'};
text-shadow: 6px 6px #6A3005;
padding-bottom: 2rem;
`