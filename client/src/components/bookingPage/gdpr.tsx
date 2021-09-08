import { FlexDiv } from "./bookingPage.style"
import Modal from "react-modal";
import { P } from "../globalStyles/P-style";
import { Heading } from "../globalStyles/Heading";
import { useState } from "react";
import { Button } from "../globalStyles/Button";

interface IPropsGdpr {
    checked: Boolean;
    selectChecked(checked: Boolean): void;
}

const customStyles = {
    content: {
      width: '70%',
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

export const Gdpr = (props: IPropsGdpr) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState<Boolean>(false)

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
return (
    <>
    <FlexDiv>
            <input type="checkbox" onChange={() => {props.selectChecked(!props.checked)}}/>
            <P>Godkänn våra <a onClick={openModal}>villkor</a></P></FlexDiv>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <Heading>GDPR</Heading>

                <P>
                  Fucion behandlar dina personuppgifter för att kunna hantera
                  dina bokningar. Personuppgifterna används också för att kunna
                  kontakta dig. Vi delar inte dina personuppgifter med andra
                  externa parter. Personuppgifterna sparas tills någon orkar ta
                  bort dem ur databasen. Det kan vara en dag, eller 10 år. Vi är
                  enbart 2 anställda så det lutar nog mer åt 10 år. Men mejla om
                  du vill att vi tar bort det så löser vi det så snabbt vi kan
                  (antagligen inte jättesnabbt men). 
                  </P>
                  <P>
                  Tveka inte att kontakta oss
                  via fusion.info@gmail.com om du vill ha mer information om hur
                  Fucion behandlar dina personuppgifter.
                </P>
                <Button onClick={closeModal}>close</Button>
              </Modal>
              </>
)
}