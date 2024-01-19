import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';
import Modal from '../../components/modal/Modal';
import Reviews from '../../components/reviews/Reviews';
import { ToastContainer, toast } from 'react-toastify';


const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`);
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>
      <Hero setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <Services />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} notify={notify}/>
      <Reviews />
    </>
  )
}

export default Landing