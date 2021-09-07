import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Center } from "../globalStyles/Center";
export const LoadingPage = () => {
    return(
        <Center>
        <Loader type="TailSpin" color="#DDC8B5" height={80} width={80} />
        </Center>
    )
}