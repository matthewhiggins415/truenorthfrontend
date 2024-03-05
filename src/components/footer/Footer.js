import React, { useState, useEffect } from 'react';
import { FooterContainer, LoginBtn, FooterInfo, FooterServiceLink, FooterServicesContainer } from './Footer.styles';
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { getAllServices } from '../../api/services';

const Footer = () => {
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
        <p>About Us</p>
        <p>San Diego, California</p>
        <FooterServiceLink to="https://firesafechimneycare.com">www.firesafechimneycare.com</FooterServiceLink>
        <a href="tel:+18007933763">1-800-793-3763</a>
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
        <FooterServiceLink to='/blogs'>Blog</FooterServiceLink>
        <FooterServiceLink to="https://www.yelp.com/biz/fire-safe-chimney-sweeping-co-and-repairs-san-diego" target="_blank">Reviews</FooterServiceLink>
        <p>Instagram</p>
        <p>Facebook</p>
      </FooterInfo>
      <LoginBtn>
        <CiLogin onClick={handleLoginNavigate}/>
      </LoginBtn>
    </FooterContainer>
  )
}

export default Footer