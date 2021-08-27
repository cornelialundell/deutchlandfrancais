import { TimeButton } from "./timeButton.style";


export const Time = (props: any) => {
    if(props.isAvailableArray) {return (
    <div>
      Väl tid ditt hor
      
      <TimeButton bgColor={props.isAvailableArray[0] ? '#2ecc71' : '#e74c3c'}>18:00</TimeButton>
      <TimeButton bgColor={props.isAvailableArray[1] ? '#2ecc71' : '#e74c3c'}>21:00</TimeButton>
    </div>
  );}
  else{
  return(
      <></>
  )}
};
