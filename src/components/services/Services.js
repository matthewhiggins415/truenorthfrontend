import React from 'react';
import { Container, ServiceContainer, ServiceCard, OfferContainer, OfferTopContainer, OffersContainer, OfferCard, CardContainer, Img } from './Services.styles';
import { LuClock4 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Services = ({ services }) => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceCard>
          <LuClock4 size={90} color={'lightblue'}/>
          <h3>Reliability</h3>
          <p>We are a local business valuing high quality work</p>
        </ServiceCard>
        <ServiceCard>
          <AiOutlineDollar size={90} color={'lightblue'}/>
          <h3>Fair Prices</h3>
          <p>We offer fair pricing to meet your budget</p>
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
        </OfferTopContainer>
        <OffersContainer>
          <CardContainer>
          {services.map((service) => (
            <OfferCard>
              <Img src={service.img}/>
              <div>
                <h3>{service.name}</h3>
                <p>{service.title}</p>
              </div>
            </OfferCard>
          ))}
          </CardContainer>
        </OffersContainer>
      </OfferContainer>
    </Container>
  )
}

export default Services