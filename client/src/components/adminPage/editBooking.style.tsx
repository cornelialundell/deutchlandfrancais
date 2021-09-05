import styled from 'styled-components';

export const Card = styled.div`
    background-color: white;
    margin: 1rem 0;
    width: 80vw;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;

    li {
        list-style: none;
        padding: 1rem;
        font-size: 1.5rem;

        p{
            padding: 0 0 .5rem 0;
        }
    }
    button {
        width: 20rem;
    }

    input {
        color: #222;
        border: none;
        font-size: 1.5rem;
        background-color: #F0E4D9;
        margin: 1rem 0;
        padding: 1rem;
        font-weight: 700;
    }
`