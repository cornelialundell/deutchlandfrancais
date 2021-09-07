import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "../globalStyles/Button"
import { Wrapper } from "../globalStyles/Wrapper"
import { LoadingPage } from "../loading/loading";

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
            <h2>Tack för din bokning :)</h2>
            <Link to="/"><Button>Till startsidan</Button></Link>
            </>)}
            
        </Wrapper>
    )
}