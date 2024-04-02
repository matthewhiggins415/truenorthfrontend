import React from 'react';
import { Container, ServiceContainer, ServiceCard, OfferContainer, OfferTopContainer, OffersContainer, OfferCard, CardContainer, Img, DetailsBtn, CardInfo } from './Services.styles';
import { useNavigate } from "react-router-dom";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import apiUrl from '../../apiConfig';
import serviceImgOne from '../../images/serviceImgOne.jpg';
import serviceImgTwo from '../../images/serviceImgTwo.jpg';
import serviceImgThree from '../../images/serviceImgThree.jpg';

const Services = ({ services }) => {
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/services/${id}`)
  }

  return (
    <Container>
      <ServiceContainer>
        <ServiceCard imgSrc={serviceImgOne}>
          <CardInfo>
            <h3>Reliability</h3>
            <LuClock4 size={40} color={'white'}/>
          </CardInfo>
        </ServiceCard>
        <ServiceCard imgSrc={serviceImgTwo}>
          <CardInfo>
            <h3>Fair Prices</h3>
            <AiOutlineDollar size={40} color={'white'}/>
          </CardInfo>
        </ServiceCard>
        <ServiceCard imgSrc={serviceImgThree}>
          <CardInfo>
            <h3>Easy Scheduling</h3>
            <IoCalendarOutline size={40} color={'white'}/>
          </CardInfo>
        </ServiceCard>
      </ServiceContainer>
      <OfferContainer>
        <OfferTopContainer>
          <h2>Full-Service, Licensed Residential HVAC Services</h2>
          <p>We are equipped to handle all of your heating and cooling needs. Conveniently located in Fairfield, Connecticut and surrounding areas, we proudly serve home owners by keeping heating and cooling systems operational.</p>
        </OfferTopContainer>
        <OffersContainer>
          <CardContainer>
          {services.map((service) => (
            <OfferCard key={service._id}>
              <Img src={apiUrl + '/uploads/' + service.img}/>
              <div>
                <h3>{service.name}</h3>
                <p>{service.title}</p>
                <DetailsBtn onClick={() => navigateDetails(service._id)}>more info</DetailsBtn>
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