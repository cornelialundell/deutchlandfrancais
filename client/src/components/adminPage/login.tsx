import { Button } from "../globalStyles/Button"
import { Form } from "./login.style"

export const LogIn = () => {
    return (
        <Form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <Button>Sign in</Button>
        </Form>
    )
}