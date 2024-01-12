import React from 'react'
import { NavbarContainer, AvailabilityContainer } from './Navbar.styles'
import { CiClock2 } from "react-icons/ci";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>FireSafe Chimney Sweeping & Repairs</h3>
      <AvailabilityContainer>
        <CiClock2 size={30} />
        <h3>Monday-Friday 8am-6pm</h3>
      </AvailabilityContainer>
    </NavbarContainer>
  )
}

export default Navbar