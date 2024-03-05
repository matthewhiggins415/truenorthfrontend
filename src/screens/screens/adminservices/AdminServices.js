import React, { useState, useEffect } from 'react';
import { AdminServiceScreenContainer, AdminServiceScreenHeader, ServiceContainer, Btn, ServiceBtn } from './AdminServices.styles';
import { useNavigate } from "react-router-dom";
import { getAllServices } from '../../../api/services';
import { CgDetailsMore } from "react-icons/cg";

const AdminServices = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const requestServices = async () => {
      try {
        const res = await getAllServices();
        setServices(res.data.services);
      } catch (err) {
        console.log(err)
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
      <div>
        {services.map((service, index) => (
          <ServiceContainer onClick={() => handleNavigateService(service._id)} key={service._id}>
            <p>{service.name}</p>
          </ServiceContainer>
        ))}
      </div>
    </AdminServiceScreenContainer>
  )
}

export default AdminServices