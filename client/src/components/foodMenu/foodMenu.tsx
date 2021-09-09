import styled from "styled-components";
import { Heading } from "../globalStyles/Heading";
import { P } from "../globalStyles/P-style";
import { ComputerFlex } from "../globalStyles/ComputerFlex";
import { Wrapper } from "../globalStyles/Wrapper";
import mainCourses from './json/MainCourses.json';
import appetizers from './json/Appetizers.json';
import desserts from './json/Desserts.json';

export const FoodMenu = () => {
  console.log(mainCourses)
  return (
    <Wrapper>
      <Heading>Meny</Heading>
      <ComputerFlex>
          <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Förrätter
      </Heading>
      {appetizers.map((appetizer, index) => {
        return(
        <P><b>{appetizer.heading}</b>
        <br />
        {appetizer.description}
        </P>)
      })}
      </div>
      <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Varmrätter
      </Heading>
      {mainCourses.map((main, index) => {
        return(
        <P><b>{main.heading}</b>
        <br />
        {main.description}
        </P>)
      })}
      </div>
      <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Efterrätter
      </Heading>
      {desserts.map((dessert, index) => {
        return(
        <P><b>{dessert.heading}</b>
        <br />
        {dessert.description}
        </P>)
      })}
      </div>
      </ComputerFlex>
    </Wrapper>
  );
};
