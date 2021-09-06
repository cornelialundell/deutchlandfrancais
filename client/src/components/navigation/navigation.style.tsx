import styled from "styled-components";

interface INav {
    clr?: string;
    position?: string;
}

export const Nav = styled.div`
position: ${(props: INav) => props.position ? props.position : 'relative'};
  color: ${(props: INav) => props.clr ? props.clr : '#222'};
  width: 100vw;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  z-index:1;

  ul {
      width: 60%;
      display: flex;
      justify-content: space-between;

      @media (min-width: 768px) {
        width: 40%;
      }

  }

  li {
      list-style: none;
  }
  a {
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;

      &:hover {
          color: #EF9D3E;
      }
  }

`;
