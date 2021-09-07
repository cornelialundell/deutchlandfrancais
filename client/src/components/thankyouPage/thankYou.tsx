import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "../globalStyles/Button"
import { Heading } from "../globalStyles/Heading";
import { Wrapper } from "../globalStyles/Wrapper"
import { LoadingPage } from "../loading/loading";
import {ReactComponent as ReactLogo} from './../../img/smile-solid.svg'

export const ThankyouPage = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
          }, 2000);
    })
    return(
        <Wrapper>
            {isLoading ? (
                <LoadingPage />
            ) 
            :
            (<>
            <ReactLogo/>
            <Heading>Tack!</Heading>
            <Link to="/"><Button>Till startsidan</Button></Link>
            </>)}
            
        </Wrapper>
    )
}