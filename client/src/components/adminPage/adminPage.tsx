import { useEffect, useState } from "react";
import { LogIn } from "./login";
import { SeeBookings } from "./seeBookings";
import Cookies from 'js-cookie'




export const AdminPage = () => {
const [auth, setAuth] = useState<boolean>(false)
console.log(auth)
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
    <div>
        
        {auth ? (
    <SeeBookings setCookie={setCookie} /> 
        ) :(
    <LogIn setCookie={setCookie}/>)}

    </div>)}
  
;
