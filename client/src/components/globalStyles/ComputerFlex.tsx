import styled from "styled-components";

export const ComputerFlex = styled.div`
display:flex;
flex-direction: column;
width: 100%;
 
div {
    padding: 2rem;
    border: 3px solid #F0E4D9;
    border-radius: 2px;
    margin-bottom: 2rem;

}

      @media (min-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;

        div {
            width: 30%;
        }
      }
`;
