import React, { useState, useEffect } from 'react';
import Hero from '../../../components/hero/Hero';
import Services from '../../../components/services/Services';
import Modal from '../../../components/modal/Modal';
import Reviews from '../../../components/reviews/Reviews';
import Contact from '../../../components/contact/Contact';
import { Helmet } from 'react-helmet';
import { getAllServices } from '../../../api/services';

const Landing = ({ user, notify }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const res = await getAllServices();
      setServices(res.data.services)
    }

    getServices();
  }, [])

  return (
    <>
      <Helmet>
        <title>Chimney Cleaning and Repair Services in San Diego - FireSafe Chimney Care</title>
        <meta name="description" content="FireSafe Chimney Care offers professional chimney cleaning and repair services in San Diego. We specialize in chimney maintenance, inspections, and more." />
      </Helmet>
      <Hero setModalOpen={setModalOpen} modalOpen={modalOpen} services={services}/>
      <Services services={services}/>
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} notify={notify}/>
      <Reviews />
      <Contact notify={notify}/>
    </>
  )
}

export default Landing