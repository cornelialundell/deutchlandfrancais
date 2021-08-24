import styled from 'styled-components';

interface IStyledButton {
    bgColor?: string;
    }

export const Button = styled.button`
    background-color: ${(props: IStyledButton) => props.bgColor ? props.bgColor : 'rgba(255, 255, 255, 0.5)'};
    font-size: 2rem;
    text-transform: uppercase;
    border: none;
    font-family: inherit;
    color: #333;
    cursor: pointer;
    border-radius: 2px;
    height: 6rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        background: #FE9017;
        color: white;
    }
`

