import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select } from './Modal.styles';
const ontraport_API_ID = process.env.REACT_APP_API_ID;
const ontraport_API_KEY = process.env.REACT_APP_API_KEY;

const Modal = ({ modalOpen, setModalOpen, notify }) => {
  const [formData, setFormData] = useState({
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
    const ontraportUrl = 'https://api.ontraport.com/1/objects'
    const headers = {
      'Content-Type': 'application/json',
      'Api-Key': ontraport_API_ID,
      'Api-Appid': ontraport_API_KEY
    }
    const payload = formData
    const res = await axios.post(ontraportUrl, payload, headers)
    console.log(res)
    
    if (res.status === 200) {
      notify('thank you for your info')
      setModalOpen(!modalOpen)
      clearForm()
    }
  }

  return (
    <ModalContainer modalOpen={modalOpen}>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2>We will follow up with you shortly</h2>
          <InputContainer>
            <label>First Name:</label>
            <Input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              placeholder='first name' 
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Last Name:</label>
            <Input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              placeholder='last name' 
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Email:</label>
            <Input 
              type="email"
              name="email" 
              value={formData.email} 
              placeholder='email' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Phone:</label>
            <Input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              placeholder='phone number' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Chimneys:</label>
            <Input 
              type="number" 
              name="chimneys" 
              value={formData.chimneys} 
              placeholder='number of chimneys' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label for="roofs">Roof Type:</label>
            <Select name="roofs" id="roofs" value={formData.roofType} onChange={onChange} required>
              <option value="shingle">Shingle</option>
              <option value="tile">Tile</option>
              <option value="flat">Flat</option>
              <option value="shake">Shake</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <Input 
              type="text"
              name="address" 
              value={formData.address} 
              placeholder='home address' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <Input 
              type="text"
              name="city"
              value={formData.city}
              placeholder='city' 
              onChange={onChange}
              required/>
          </InputContainer>
          <InputContainer>
            <label>Zip</label>
            <Input 
              type="text"
              name="zip" 
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