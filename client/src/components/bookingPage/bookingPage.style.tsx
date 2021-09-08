import styled from 'styled-components'

export const StyledDiv= styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

p {
    font-weight: 700;
    margin: 1rem 0;
}
`

export const FlexDiv= styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;


p {
    padding: 0 1rem;
    width: auto;
}
input {
    padding: 1rem;
}

a {
    color: #ED7E0C;
    text-decoration: underline;
}

`