import React, { useState, useEffect } from 'react';
import { FooterContainer, LoginBtn, FooterInfo, FooterServiceLink, FooterServicesContainer } from './Footer.styles';
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { getAllServices } from '../../api/services';

const Footer = ({ company }) => {
  console.log("company: ", company)
  const [services, setServices] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getServices = async () => {
      const res = await getAllServices();
      console.log(res)
      setServices(res.data.services)
    }

    getServices()
  }, [])

  const handleLoginNavigate = () => {
    navigate('/login')
  }

  return (
    <FooterContainer>
      <FooterInfo>
        <h4>Company</h4>
        <FooterServicesContainer>
          <FooterServiceLink>About Us</FooterServiceLink>
          <a href="tel:+18007933763">{company.companyPhone}</a>
          <FooterServiceLink >San Diego, California</FooterServiceLink>
          <FooterServiceLink to={'https://firesafechimneycare.com'}>{company.companyWebsite}</FooterServiceLink>
        </FooterServicesContainer>
      </FooterInfo>
      <FooterInfo>
        <h4>Services</h4>
        <FooterServicesContainer>
          {services.map((service) => (
            <FooterServiceLink key={service._id} to={`/services/${service._id}`}>{service.name}</FooterServiceLink>
          ))}
        </FooterServicesContainer>
      </FooterInfo>
      <FooterInfo>        
        <h4>Connect</h4>
        <FooterServicesContainer>
          <FooterServiceLink to='/blogs'>Blog</FooterServiceLink>
          <FooterServiceLink to={company.companyYelp} target="_blank">Reviews</FooterServiceLink>
          {company.Instagram === 'none' ? <FooterServiceLink to={company.Instagram}>Instagram</FooterServiceLink> : <></>}
          {company.Facebook === 'none' ? <FooterServiceLink to={company.Instagram}>Instagram</FooterServiceLink> : <></>}
        </FooterServicesContainer>
      </FooterInfo>
      <LoginBtn>
        <CiLogin onClick={handleLoginNavigate}/>
      </LoginBtn>
    </FooterContainer>
  )
}

export default Footer