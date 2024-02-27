import React from 'react';
import { HeroContainer, Overlay, QuoteBtn, HeroNavContainer, HeroNavLink } from './Hero.styles';

const Hero = ({ modalOpen, setModalOpen }) => {
  
  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <HeroNavContainer>
        <HeroNavLink to='/blogs'>Blog</HeroNavLink>
        <HeroNavLink>Services</HeroNavLink>
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