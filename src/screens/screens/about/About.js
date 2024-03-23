import React from 'react';
import { AboutScreenContainer, BackBtn, Section, ImgContainer, Img, SectionContainer } from './About.styles'
import image from '../../../images/colinworking.jpg';
import image2 from '../../../images/colinworking2.jpg';
import image3 from '../../../images/colinworking3.jpg';
import image4 from '../../../images/colinworking4.jpg';
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
        <ImgContainer>
          <Img src={image} alt="image of Colin working"/> 
          <Img src={image2} alt="image of Colin working"/> 
          <Img src={image3} alt="image of Colin working"/> 
          <Img src={image4} alt="image of Colin working"/>
        </ImgContainer>
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