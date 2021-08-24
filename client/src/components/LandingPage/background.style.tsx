import styled from 'styled-components';
import img from './../../img/background.jpeg'

export const Background = styled.div`
    background: url(${img});
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
