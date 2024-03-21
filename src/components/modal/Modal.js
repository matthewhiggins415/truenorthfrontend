import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select, LoadingContainer } from './Modal.styles';
import BounceLoader from "react-spinners/BounceLoader";
import { createContact } from '../../api/contact';

const Modal = ({ modalOpen, setModalOpen, notify }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: ''
  })

  const clearForm = () => {
    setFormData({
      firstname: '', 
      lastname: '',
      email: '',
      cell_phone: ''
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleCloseModal = () => {
    clearForm()
    setModalOpen(!modalOpen)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let payloadData = {
      firstname: formData.firstname, 
      lastname: formData.lastname,
      email: formData.email,
      cell_phone: formData.cell_phone
    }

    try {
      const res = createContact(payloadData);

      if (res.status === 201) {
        notify('thank you for your info');
        setLoading(false);
        handleCloseModal();
      }
    } catch(error) {
      console.log(error);
      notify('something went wrong', 'danger');
      handleCloseModal();
    }
  }

  return (
    <ModalContainer modalOpen={modalOpen}>
      <FormContainer loading={loading}>
        <Form onSubmit={handleSubmit} loading={loading}>
          <h2>We will call you back shortly</h2>
          <InputContainer>
            <Input 
              name="firstname" 
              type="text" 
              value={formData.firstname} 
              placeholder='first name' 
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input 
              name="lastname" 
              type="text" 
              value={formData.lastname} 
              placeholder='last name' 
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input 
              name="email" 
              type="email"
              value={formData.email} 
              placeholder='email' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <Input 
              name="cell_phone" 
              type="tel" 
              value={formData.cell_phone} 
              placeholder='phone number' 
              onChange={onChange}
              required/>
          </InputContainer>
          <SubmitBtn type="submit">Submit</SubmitBtn>
          <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
        </Form>
        <LoadingContainer loading={loading}>
          <h2>Loading</h2>
          <BounceLoader color="#36d7b7" />
        </LoadingContainer>
      </FormContainer>
    </ModalContainer>
  )
}

export default Modal