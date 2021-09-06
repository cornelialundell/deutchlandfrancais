import { Link } from "react-router-dom"
import { Button } from "../globalStyles/Button"
import { Wrapper } from "../globalStyles/Wrapper"

export const ThankyouPage = () => {
    return(
        <Wrapper>
            <h2>Tack för din bokning :)</h2>
            <Link to="/"><Button>Till startsidan</Button></Link>
        </Wrapper>
    )
}