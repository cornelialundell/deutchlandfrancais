import { Nav } from "./navigation.style";

export const Navigation = () => {
  return (
    <Nav>
          <ul id="menu">
            <a href="/">
              <li>Start</li>
            </a>
            <a href="#"> 
              <li>Meny</li>
            </a>
            <a href="/booking">
              <li>Boka bord</li>
            </a>
            <a href="/contact">
              <li>Kontakt</li>
            </a>
          </ul>
    </Nav>
  );
};
