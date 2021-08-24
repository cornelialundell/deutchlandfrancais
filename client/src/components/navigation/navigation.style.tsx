import styled from "styled-components";

export const Nav = styled.div`
  position: absolute;
  color: white;
  width: 100vw;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;

  ul {
      width: 50%;
      display: flex;
      justify-content: space-between;

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
