import React, { useState } from 'react';
import Hero from '../../../components/hero/Hero';
import Services from '../../../components/services/Services';
import Modal from '../../../components/modal/Modal';
import Reviews from '../../../components/reviews/Reviews';
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from './Landing.styles';
import { Helmet } from 'react-helmet';

const Landing = ({ user, notify }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate('/login')
  }

  return (
    <>
      <Helmet>
        <title>Chimney Cleaning and Repair Services in San Diego - FireSafe Chimney Care</title>
        <meta name="description" content="FireSafe Chimney Care offers professional chimney cleaning and repair services in San Diego. We specialize in chimney maintenance, inspections, and more." />
      </Helmet>
      <Hero setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <Services />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} notify={notify}/>
      <Reviews />
      <LoginBtn onClick={handleLoginNavigate}>
        <CiLogin />
      </LoginBtn>
    </>
  )
}

export default Landing