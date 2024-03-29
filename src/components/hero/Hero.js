import React, { useState } from 'react';
import { HeroContainer, Overlay, QuoteBtn, HeroNavContainer, HeroNavLink, ServiceDropDown, ServicesBtn, ServiceLink } from './Hero.styles';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import HeroImg from '../../images/TNHERO.JPEG';

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
        <HeroNavLink to='/about'>About</HeroNavLink>
        <ServicesBtn onClick={handleOpenDropDown}>
          Services
          { showDropDown ? <MdKeyboardArrowDown style={{ fontSize: '24px' }}/> : <MdKeyboardArrowUp style={{ fontSize: '24px' }}/> }
        </ServicesBtn>
        <ServiceDropDown showDropDown={showDropDown}>
          {services.map((service) => (
            <ServiceLink to={`/services/${service._id}`} key={service._id}>{service.name}</ServiceLink>
          ))}
        </ServiceDropDown>
        <HeroNavLink to='/blogs'>Blog</HeroNavLink>
        <HeroNavLink to="https://www.yelp.com/biz/true-north-heating-and-cooling-redding" target="_blank">More reviews</HeroNavLink>
     </HeroNavContainer>
      <HeroContainer imgSrc={HeroImg}>
        <Overlay>
          <h2>Air Conditioning and Heating Services</h2>
          <h2>Fairfield County, CT</h2>
          <QuoteBtn onClick={handleModalOpen}>request a quote</QuoteBtn>
        </Overlay>
      </HeroContainer>
    </>
  )
}

export default Hero