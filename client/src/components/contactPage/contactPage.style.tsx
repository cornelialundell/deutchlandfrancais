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