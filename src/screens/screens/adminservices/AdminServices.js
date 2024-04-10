import React, { useState, useEffect } from 'react';
import { AdminServiceScreenContainer, AdminServiceScreenHeader, ServiceContainer, Btn, ServiceBtn, LoadingContainer } from './AdminServices.styles';
import { useNavigate } from "react-router-dom";
import { getAllServices } from '../../../api/services';
import { CgDetailsMore } from "react-icons/cg";
import BounceLoader from "react-spinners/BounceLoader";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const requestServices = async () => {
      setIsLoading(true);
      try {
        const res = await getAllServices();
        setServices(res.data.services);
        setIsLoading(false);
      } catch (err) {
        console.log(err)
        setIsLoading(false);
      }
    }

    requestServices()
  }, [])

  const handleNavigateService = (id) => {
    navigate(`/admin/services/${id}`)
  }

  const navigateCreateService = () => {
    navigate('/admin/create-service')
  }
  return (
    <AdminServiceScreenContainer>
      <AdminServiceScreenHeader>
        <h2>Services</h2>
        <Btn onClick={navigateCreateService}>Create Service</Btn>
      </AdminServiceScreenHeader>
      {isLoading ?
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      : 
      <div>
        {services.map((service, index) => (
          <ServiceContainer onClick={() => handleNavigateService(service._id)} key={service._id}>
            <p>{service.name}</p>
          </ServiceContainer>
        ))}
      </div>}
    </AdminServiceScreenContainer>
  )
}

export default AdminServices