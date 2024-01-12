import React from 'react';
import { Container, ServiceContainer, ServiceCard, OfferContainer, OfferTopContainer, OffersContainer, OfferCard, CardContainer, Img } from './Services.styles';
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
          <CardContainer>
          <OfferCard>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksHGWXNolyQNf7-grLwsIhW1A6QsDPLpy9A&usqp=CAU"/>
            <div>
              <h3>Chimney Cleaning</h3>
              <p>Immersive cleanings to ensure safety and chimney health</p>
            </div>
          </OfferCard>
          <OfferCard>
            <Img src="https://takeaire.com/wp-content/uploads/2022/07/chimney-repair-houston-TX-4.jpg"/>
            <div>
              <h3>Chimney Repair</h3>
              <p>Minor crack repair to structural damage</p>
            </div>
          </OfferCard>
          <OfferCard>
            <Img src="https://library.homeserve.com/m/6ecbfce5d2ba1bbd/Blog-GettyImages-1161384118.jpg"/>
            <div>
              <h3>Inspections</h3>
              <p>Quick and reliable chimney inspection</p>
            </div>
          </OfferCard>
          <OfferCard>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjwQHTMe_3IbkG3JscnzAb9GxnvVNCLpIVg&usqp=CAU" />
            <div>
              <h3>Gas Log Services</h3>
              <p>Supplying and installing gas log fireplaces</p>
            </div>
          </OfferCard>
          <OfferCard>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6aVSMbMwWEp-NNUBRrHOG7ddqX_BK3hERA&usqp=CAU"/>
            <div>
              <h3>Chimney Caps</h3>
              <p>Supplying and installing new chimney caps</p>
            </div>
          </OfferCard>
          <OfferCard>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofAq-Q-7oRv4XF0vM97eyLlQL8HL81vahcleVNqpyCk2VoklsAvqj6T0UwjMVvH85TEc&usqp=CAU" />
            <div>
              <h3>Wood Grate Installation</h3>
              <p>Quick and reliable wood grate installations</p>
            </div>
          </OfferCard>
          </CardContainer>
        </OffersContainer>
      </OfferContainer>
    </Container>
  )
}

export default Services