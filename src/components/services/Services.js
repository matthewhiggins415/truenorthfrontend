import React from 'react';
import { Container, ServiceContainer, ServiceCard, OfferContainer, OfferTopContainer, OffersContainer, OfferCard } from './Services.styles';
import { LuClock4 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";



const Services = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceCard>
          <LuClock4 size={90} color={'lightblue'}/>
          <h3>Reliability</h3>
          <p>We are punctual and prioritize your schedule</p>
        </ServiceCard>
        <ServiceCard>
          <AiOutlineDollar size={90} color={'lightblue'}/>
          <h3>Fair Prices</h3>
          <p>We are punctual and prioritize your schedule</p>
        </ServiceCard>
        <ServiceCard>
          <IoCalendarOutline size={90} color={'lightblue'}/>
          <h3>Easy Scheduling</h3>
          <p>We are punctual and prioritize your schedule</p>
        </ServiceCard>
      </ServiceContainer>
      <OfferContainer>
        <OfferTopContainer>
          <h2>What we offer</h2>
          <h3>Reliable chimney services of the greater San Diego area </h3>
        </OfferTopContainer>
        <OffersContainer>
          <OfferCard>
            <h3>Chimney Cleaning</h3>
            <p>Full cleanings to ensure safety</p>
          </OfferCard>
          <OfferCard>
            <h3>Chimney Repair</h3>
            <p>Minor crack repair to structural damage</p>
          </OfferCard>
          <OfferCard>
            <h3>Inspections</h3>
            <p>Quick and reliable chimney inspection</p>
          </OfferCard>
          <OfferCard>
            <h3>Gas Log Services</h3>
            <p>Supplying and installing gas logs</p>
          </OfferCard>
          <OfferCard>
            <h3>Chimney Caps</h3>
            <p>Supplying and installing new chimney caps</p>
          </OfferCard>
          <OfferCard>
            <h3>Wood Grate Installation</h3>
            <p>Quick and reliable wood grate installations</p>
          </OfferCard>
        </OffersContainer>
      </OfferContainer>
    </Container>
  )
}

export default Services