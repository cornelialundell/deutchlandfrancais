import React from 'react';
import { Background } from './background.style';
import { Button } from '../globalStyles/button.style';
import {ReactComponent as ReactLogo} from './../../img/fucion-logo.svg'
import { Nav } from './nav';

export const Start = () => {
    return(
        <Background>
           <ReactLogo/>
           <Button>Boka bord</Button>
        </Background>
    )
}