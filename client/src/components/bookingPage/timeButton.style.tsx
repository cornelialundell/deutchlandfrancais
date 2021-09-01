import styled from 'styled-components';


interface IStyledButton {
    bgColor?: string;
}
export const TimeButton = styled.button`
border: none;
padding: 2rem;
margin: 1rem;
background-color: ${(props: IStyledButton) => props.bgColor ? props.bgColor : '#eee'};
border-radius: 3px;
font-family: inherit;
font-weight: 700;
cursor: pointer;
`