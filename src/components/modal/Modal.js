import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select, LoadingContainer } from './Modal.styles';
import BounceLoader from "react-spinners/BounceLoader";
import { createContact } from '../../api/contact';

const Modal = ({ modalOpen, setModalOpen, notify }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    objectID: 0,
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: ''
  })

  const clearForm = () => {
    setFormData({
      objectID: 0,
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

    const url = `https://firesafebackend-3afcb49789a6.herokuapp.com/contactFormSubmit`;
    const payload = formData;
    console.log('payload:', payload)

    setLoading(true);

    const makeRequest = async () => {
      try {
        const res = await axios.post(url, payload);

        if (res.status === 200) {
          notify('thank you for your info');
          setLoading(false);
          handleCloseModal();
        }

      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger');
        handleCloseModal();
      }
    }

    const createContactRequest = async () => {
      let payloadData = {
        firstname: formData.firstname, 
        lastname: formData.lastname,
        email: formData.email,
        cell_phone: formData.cell_phone
      }

      try {
        const res = createContact(payloadData)
        console.log(res)
        if (res.status === 201) {
          notify('thank you for your info');
          setLoading(false);
          handleCloseModal();
        }
      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger');
        handleCloseModal();
      }
    }

    makeRequest();
    createContactRequest();
  }

  return (
    <ModalContainer modalOpen={modalOpen}>
      <FormContainer loading={loading}>
        <Form onSubmit={handleSubmit} loading={loading}>
          <h2>We will follow up with you shortly</h2>
          <InputContainer>
            <label>First Name:</label>
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
            <label>Last Name:</label>
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
            <label>Email:</label>
            <Input 
              name="email" 
              type="email"
              value={formData.email} 
              placeholder='email' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Phone:</label>
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