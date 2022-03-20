import React from 'react'
import { NavLink } from 'react-router-dom';
import {Nav,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <Nav>
        <NavLink to="/">
            <h1>Logo</h1>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/" activeStyle>Home</NavLink>
            <NavLink to="/about" activeStyle>About</NavLink>
        <   NavLink to="/contact" activeStyle>Contact</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/" activeStyle>HI</NavBtnLink>
        </NavBtn>
    </Nav>
  )
}

export default Navbar