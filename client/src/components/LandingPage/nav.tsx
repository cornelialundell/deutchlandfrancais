import React from 'react';
import styled from 'styled-components'

interface IStyledNav {
    txtColor?: string;
    }

const StyledNav = styled.ul` 
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: flex-end;
    padding-right: 5rem;
    position: absolute;
    top: 2rem;
    color: ${(props: IStyledNav) => props.txtColor ? props.txtColor : '#FE9017'};
`

const StyledLi = styled.li`
    padding: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
`

export const Nav = () => {
    return (
        <StyledNav>
            <StyledLi><a href="/">Start</a></StyledLi>
            <StyledLi><a href="/contact">Kontakt</a></StyledLi>
            <StyledLi><a href="/booking">Boka bord</a></StyledLi>
        </StyledNav>
    )
}