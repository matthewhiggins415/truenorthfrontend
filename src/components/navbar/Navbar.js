import React from 'react'
import { NavbarContainer, AvailabilityContainer } from './Navbar.styles'
import { CiClock2 } from "react-icons/ci";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>FireSafe Chimney Sweeping & Repairs</h3>
      <AvailabilityContainer>
        <CiClock2 size={30} />
        <p>Monday-Friday 8am-6pm</p>
      </AvailabilityContainer>
    </NavbarContainer>
  )
}

export default Navbar