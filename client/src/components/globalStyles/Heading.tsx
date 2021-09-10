import styled from "styled-components";

interface IStyledHeading {
    clr?: string;
    size?: string;
    txtShadow?: string;
    width?: string;
    padding?: string;
}

export const Heading = styled.h2`
color: ${(props: IStyledHeading) => props.clr ? props.clr : '#ED7D0C'};
width: ${(props:IStyledHeading) => props.width ? props.width : "auto"};
font-size: ${(props:IStyledHeading) => props.size ? props.size: '5em'};
text-shadow: ${(props:IStyledHeading) => props.txtShadow ? props.txtShadow: '6px 6px #6A3005;'};
padding: ${(props:IStyledHeading) => props.padding ? props.padding: '2rem 0'};
`