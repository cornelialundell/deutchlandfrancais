import { useEffect, useState } from "react";
import { LogIn } from "./login";
import { SeeBookings } from "./seeBookings";
import Cookies from 'js-cookie'
import { Wrapper } from './../globalStyles/Wrapper';




export const AdminPage = () => {
const [auth, setAuth] = useState<boolean>(false)

    const setCookie = () => {
        const cookie = Cookies.get('cookie')
        if (cookie) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }

    useEffect(()=> {
setCookie()
    }, [])

  return (
    <Wrapper>
        
        {auth ? (
    <SeeBookings setCookie={setCookie} /> 
        ) :(
    <LogIn setCookie={setCookie}/>)}

    </Wrapper>)}
  
;
