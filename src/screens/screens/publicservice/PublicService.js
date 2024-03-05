import React, { useEffect, useState } from 'react';
import { ServiceContainer, BackBtn, Img, Container, H2, Line, P } from './PublicService.styles';
import { getSingleService } from '../../../api/services';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PublicService = () => {
  const [service, setService] = useState({})

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getService = async () => {
      const res = await getSingleService(id)
      console.log(res)
      setService(res.data.service)
    }

    getService()
  }, [])

  const handleBack = () => {
    navigate('/')
  }

  return (
    <>
      <ServiceContainer>
        <BackBtn onClick={handleBack}>Back</BackBtn>
        <Container>
          <Img src={service.img}/>
          <H2>{service.title}</H2>
          <Line></Line>
           <P>{service.paragraphOne}</P>
           <P>{service.paragraphTwo}</P>
           <P>{service.paragraphThree}</P>
           <P>{service.paragraphFour}</P>
           <P>{service.paragraphFive}</P>
        </Container>
      </ServiceContainer>
    </>
  )
}

export default PublicService