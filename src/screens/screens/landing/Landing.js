import React, { useState } from 'react';
import Hero from '../../../components/hero/Hero';
import Services from '../../../components/services/Services';
import Modal from '../../../components/modal/Modal';
import Reviews from '../../../components/reviews/Reviews';
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from './Landing.styles'

const Landing = ({ user, notify }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate('/login')
  }

  return (
    <>
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