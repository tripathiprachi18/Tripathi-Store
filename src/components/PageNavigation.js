import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to='./'>Home </NavLink>/ {title}
    </Wrapper>
  )
}
const Wrapper= styled.section`
 height:6rem;
 background-color: ${({ theme }) => theme.colors.bg};
 display:flex;
 justify-content:flex-start;
 align-items:center;
 font-size:3.2rem;
 padding-left:4rem;
`;

export default PageNavigation