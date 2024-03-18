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
          <h1>Fire Safe Chimney Company</h1>
          <p>Firesafe Chimney Care celebrated its grand opening in 2017. Landon Boneck, owner of Firesafe Chimney Care, has on the job experience in the chimney servicing industry. Since opening the shop, Landon has focused on growing his team to include San Diego’s finest chimney servicing talent establishing Firesafe Chimney Care as San Diego’s most responsive and reliable chimney servicing company boasting some of the happiest clients and team.
          </p>
        </Section>
      </SectionContainer>
      <Contact />
    </AboutScreenContainer>
  )
}

export default About