import { useHistory } from "react-router-dom";
import { Nav } from "./navigation.style";
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <>
    {location.pathname === '/' ? (
      <Nav clr="white" position="absolute">
      <ul id="menu">
        <a href="/">
          <li>Start</li>
        </a>
        <a href="/menu">
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
      ):( 
      <Nav >
          <ul id="menu">
            <a href="/">
              <li>Start</li>
            </a>
            <a href="/menu"> 
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
    )}
    </>
  );
};

