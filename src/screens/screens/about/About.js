import React from 'react';
import { AboutScreenContainer, BackBtn, Section, Img, SectionContainer } from './About.styles'
import image from '../../../images/home1.jpg';
import { useNavigate } from "react-router-dom";
import Contact from '../../../components/contact/Contact';

const About = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate('/')
  };

  return (
    <AboutScreenContainer>
      <div>
        <BackBtn onClick={navigateBack}>back</BackBtn>
      </div>
      <SectionContainer>
        <Img src={image} alt="about us image"/> 
        <Section>
          <h1>True North Heating & Cooling</h1>
          <p>True North celebrates its grand opening in 2023. Colin Higgins, owner of True North, has on the job experience in the HVAC industry. Since opening the shop, Colin has focused on growing his team to include Connecticut’s finest heating and cooling servicing talent establishing True North as Fairfield and surrounding areas most responsive and reliable residential HVAC company boasting the happiest customers and team.
          </p>
        </Section>
      </SectionContainer>
      <Contact />
    </AboutScreenContainer>
  )
}

export default About