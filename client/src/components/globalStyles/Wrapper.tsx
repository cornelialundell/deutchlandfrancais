import styled from 'styled-components';


interface IStyledWrapper {
    bg?: string;    
    clr?: string;
    width?: string;
}
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${(props: IStyledWrapper) => props.width ? props.width : '70vw'};
    min-height: 100vh;
    background: ${(props: IStyledWrapper) => props.bg ? props.bg : '#F8F2ED'};
    background-size: cover;
    color: ${(props: IStyledWrapper) => props.clr ? props.clr : '#222222'};
`