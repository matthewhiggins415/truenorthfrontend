import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, FormContainer, Form, CloseBtn, Input, SubmitBtn, InputContainer, Select, LoadingContainer } from './Modal.styles';
import BounceLoader from "react-spinners/BounceLoader";

const Modal = ({ modalOpen, setModalOpen, notify }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    objectID: 0,
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: '',
    chimneys: 0,
    roofType: '', 
    address: '',
    city: '',
    zip: '',
    website: 'firesafechimneycare.com'
  })

  const clearForm = () => {
    setFormData({
      objectID: 0,
      firstname: '', 
      lastname: '',
      email: '',
      cell_phone: '',
      chimneys: 0,
      roofType: '', 
      address: '',
      city: '',
      zip: '',
      website: 'firesafechimneycare.com'
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

    const url = `https://firesafebackend-3afcb49789a6.herokuapp.com/contactFormSubmit`;
    const payload = formData;

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

    makeRequest();
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
              value={formData.firstName} 
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
              name="cell_phone" 
              type="tel" 
              value={formData.cell_phone} 
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
            <label htmlFor="roofType">Roof Type:</label>
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
        <LoadingContainer loading={loading}>
          <h2>Loading</h2>
          <BounceLoader color="#36d7b7" />
        </LoadingContainer>
      </FormContainer>
    </ModalContainer>
  )
}

export default Modal