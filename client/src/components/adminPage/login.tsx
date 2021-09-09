import axios from "axios";
import { FormEvent, useState } from "react";
import { Button } from "../globalStyles/Button";
import { Form } from "./login.style";
import Cookies from 'js-cookie';
import { P } from "../globalStyles/P-style";


export const LogIn = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flashMessage, setFlashMessage] = useState("");


  
  async function login(e: FormEvent) {
    e.preventDefault();

    try {
      const sendData = {
        username,
        password,
      };

      await axios.post("http://localhost:9000/login", sendData, {withCredentials: true}).then(() => {
        setFlashMessage('')
        Cookies.set('cookie', "loggedin")
        props.setCookie(true)
        
    });
    } catch (err) {
      setFlashMessage('fel användarnamn eller lösenord')
      console.log(err);
    }
  }
  return (
    <Form onSubmit={login}>
      <P width="auto" clr="#e74c3c">{flashMessage}</P>
      <input
        type="text"
        placeholder="username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
          setUsername(e.target.value)
          setFlashMessage("")
        }
        }
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
          setFlashMessage("")
        }
        }
        value={password}
      />
      <Button type="submit">Sign in</Button>
    </Form>
  );
};
