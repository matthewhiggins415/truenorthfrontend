import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select } from './Modal.styles';
const ontraport_API_ID = process.env.REACT_APP_API_ID;
const ontraport_API_KEY = process.env.REACT_APP_API_KEY;

const Modal = ({ modalOpen, setModalOpen, notify }) => {
  const [formData, setFormData] = useState({
    objectID: 0,
    firstName: '', 
    lastName: '',
    email: '',
    phone: '',
    chimneys: 0,
    roofType: '', 
    address: '',
    city: '',
    zip: '',
    leadSource: 'firesafechimneycare.com'
  })

  const clearForm = () => {
    setFormData({
      objectID: 0,
      firstName: '', 
      lastName: '',
      email: '',
      phone: '',
      chimneys: 0,
      roofType: '', 
      address: '',
      city: '',
      zip: '',
      leadSource: 'firesafechimneycare.com'
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleCloseModal = () => {
    setModalOpen(!modalOpen)
    clearForm()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ontraportUrl = 'https://api.ontraport.com/1/Contacts';
    const payload = formData;
    const headers = {
      'Content-Type': 'application/json',
      'Api-Key': `${process.env.REACT_APP_API_KEY}`,
      'Api-Appid': `${process.env.REACT_APP_API_ID}`
    };

    const makeRequest = async () => {
      try {
        console.log("payload:", payload);
        console.log("headers: ", headers);
        const res = await axios.post(ontraportUrl, payload, headers)
        console.log(res)

        if (res.status === 200) {
          notify('thank you for your info');
          handleCloseModal();
        }

      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger');
        handleCloseModal();
      }
    }

    makeRequest();
  }

  return (
    <ModalContainer modalOpen={modalOpen}>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2>We will follow up with you shortly</h2>
          <InputContainer>
            <label>First Name:</label>
            <Input 
              name="firstName" 
              type="text" 
              value={formData.firstName} 
              placeholder='first name' 
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Last Name:</label>
            <Input 
              name="lastName" 
              type="text" 
              value={formData.lastName} 
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
              name="phone" 
              type="tel" 
              value={formData.phone} 
              placeholder='phone number' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Chimneys:</label>
            <Input 
              name="chimneys" 
              type="number" 
              value={formData.chimneys} 
              placeholder='number of chimneys' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label for="roofType">Roof Type:</label>
            <Select name="roofType" id="roofType" value={formData.roofType} onChange={onChange} required>
              <option value="shingle">Shingle</option>
              <option value="tile">Tile</option>
              <option value="flat">Flat</option>
              <option value="shake">Shake</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <Input 
              name="address" 
              type="text"
              value={formData.address} 
              placeholder='home address' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <Input 
              name="city"
              type="text"
              value={formData.city}
              placeholder='city' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Zip</label>
            <Input 
              name="zip" 
              type="text"
              value={formData.zip} 
              placeholder='zip code' 
              onChange={onChange}
              required/>
          </InputContainer>
          <SubmitBtn type="submit">Submit</SubmitBtn>
          <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
        </Form>
      </FormContainer>
    </ModalContainer>
  )
}

export default Modal