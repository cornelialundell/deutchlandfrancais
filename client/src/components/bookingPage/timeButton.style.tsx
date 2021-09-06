import styled from 'styled-components';


interface IStyledButton {
    bgColor?: string;
}
export const TimeButton = styled.button`
border: none;
padding: 2rem;
margin: 1rem 0;
background-color: ${(props: IStyledButton) => props.bgColor ? props.bgColor : '#eee'};
border-radius: 3px;
font-family: inherit;
font-size: 1.5rem;
color: white;
font-weight: 700;
cursor: pointer;

&:focus {
    background-color: #25AC5E;
}
`