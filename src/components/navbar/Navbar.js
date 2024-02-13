import React from 'react'
import { NavbarContainer, AvailabilityContainer, LogoContainer, Img } from './Navbar.styles'
import { CiClock2 } from "react-icons/ci";
import logo from '../../images/fscc.jpg'

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Img src={logo}/>
        <h3>FireSafe Chimney Sweeping & Repairs</h3>
      </LogoContainer>
      <AvailabilityContainer>
        <CiClock2 size={30} />
        <p>Monday-Friday 8am-6pm</p>
      </AvailabilityContainer>
    </NavbarContainer>
  )
}

export default Navbar