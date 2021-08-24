import styled from 'styled-components';
import background from './../../img/background.jpeg'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    background: url(${background});
    background-size: cover;
    color: white;
`