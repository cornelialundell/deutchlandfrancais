import axios from "axios";
import { FormEvent, useState } from "react";
import { Button } from "../globalStyles/Button";
import { Form } from "./login.style";
import Cookies from 'js-cookie';


export const LogIn = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  
  async function login(e: FormEvent) {
    e.preventDefault();

    try {
      const sendData = {
        username,
        password,
      };

      await axios.post("http://localhost:9000/login", sendData, {withCredentials: true}).then(() => (
        Cookies.set('cookie', "loggedin"),
        props.setCookie(true)

      ));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form onSubmit={login}>
      <input
        type="text"
        placeholder="username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        value={password}
      />
      <Button type="submit">Sign in</Button>
    </Form>
  );
};
