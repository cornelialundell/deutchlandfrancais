import React from "react";
import { Wrapper} from './../globalStyles/Wrapper'
import {ReactComponent as ReactLogo} from './../../img/fucion-logo.svg'
import background from './../../img/background.jpeg'


export const LandingPage = () => {

  return (
    <Wrapper bg={`url(${background})`} clr="white">
      <h1>Välkomna</h1>
      <ReactLogo/>
    </Wrapper>
  );
};