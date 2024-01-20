import React from 'react';
import { HeroContainer, Overlay, QuoteBtn } from './Hero.styles';

const Hero = ({ modalOpen, setModalOpen }) => {
  
  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <HeroContainer>
      <Overlay>
        <h6>We are the best at chimneys!</h6>
        <h2>Chimney Services of San Diego</h2>
        <QuoteBtn onClick={handleModalOpen}>request a quote</QuoteBtn>
        <h2>1-800-123-4567</h2>
      </Overlay>
    </HeroContainer>
  )
}

export default Hero