import React from "react";
import { Wrapper} from './../globalStyles/Wrapper'
import {ReactComponent as ReactLogo} from './../../img/fucion-logo.svg'
import background from './../../img/background.jpeg'
import { P } from "../globalStyles/P-style";
import { WelcomeText } from "./welcomeText";


export const LandingPage = () => {

  return (
    <Wrapper bg={`url(${background})`} clr="white" width="100vw">
      <ReactLogo/>
      <WelcomeText>
      <P>På gränsen mellan soliga Tyskland och charmiga Frankrike hittar ni oss. 
        En tyskfransk fusion som erbjuder något för alla. Avnjut din Brie de Meaux med en iskall
        Weissbier i den vackra miljön vid strömmen i Strasbourg.</P>
        </WelcomeText>
    </Wrapper>
  );
};

