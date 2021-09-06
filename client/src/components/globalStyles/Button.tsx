import styled from 'styled-components';

interface IStyledButton {
    bgColor?: string;    
}

export const Button = styled.button`
background-color: ${(props: IStyledButton) => props.bgColor ? props.bgColor : '#8979B9'};
border: none;
padding: 1rem;
color: white;
font-family: 'Bangers';
font-size: 2rem;
cursor: pointer;
transition: all 0.2s ease;
margin: 1rem 0;

&:hover {
    background-color: #635298;
}
`