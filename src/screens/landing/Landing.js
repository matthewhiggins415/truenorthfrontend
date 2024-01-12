import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import Modal from '../../components/modal/Modal';

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <Services />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </>
  )
}

export default Landing