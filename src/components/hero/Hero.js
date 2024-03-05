import React, { useState } from 'react';
import { HeroContainer, Overlay, QuoteBtn, HeroNavContainer, HeroNavLink, ServiceDropDown, ServicesBtn, ServiceLink } from './Hero.styles';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Hero = ({ modalOpen, setModalOpen, services }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  
  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
    setShowDropDown(false)
  }

  const handleOpenDropDown = () => {
    console.log(showDropDown.valueOf())
    setShowDropDown(!showDropDown)
  }

  return (
    <>
      <HeroNavContainer>
        <HeroNavLink to='/blogs'>Blog</HeroNavLink>
        <ServicesBtn onClick={handleOpenDropDown}>
          Services
          { showDropDown ? <MdKeyboardArrowDown style={{ fontSize: '24px' }}/> : <MdKeyboardArrowUp style={{ fontSize: '24px' }}/> }
        </ServicesBtn>
        <ServiceDropDown showDropDown={showDropDown}>
          {services.map((service) => (
            <ServiceLink to={`/services/${service._id}`} key={service._id}>{service.name}</ServiceLink>
          ))}
        </ServiceDropDown>
        <HeroNavLink to="https://www.yelp.com/biz/fire-safe-chimney-sweeping-co-and-repairs-san-diego" target="_blank">More reviews</HeroNavLink>
     </HeroNavContainer>
      <HeroContainer>
        <Overlay>
          <h6>We are the best at chimneys!</h6>
          <h2>Chimney Services of San Diego</h2>
          <QuoteBtn onClick={handleModalOpen}>request a quote</QuoteBtn>
          <h2>1-800-793-3763</h2>
        </Overlay>
      </HeroContainer>
    </>
  )
}

export default Hero