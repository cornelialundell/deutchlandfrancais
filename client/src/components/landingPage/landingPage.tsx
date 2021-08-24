import React from "react";
import { Wrapper } from "./landingPage.style";
import {ReactComponent as ReactLogo} from './../../img/fucion-logo.svg'

export const LandingPage = () => {
  return (
    <Wrapper>
      <h1>Välkomna</h1>
      <ReactLogo/>
    </Wrapper>
  );
};
