import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: red;
  heigh: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
  }
`