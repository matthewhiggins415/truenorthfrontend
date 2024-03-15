import React, { useState } from 'react';
import { ContactContainer, Container, Img, MapContainer, Form, FormTop, FormBottom, InputTop, InputBottom, SubmitBtn } from './Contact.styles';
import serviceMap from '../../images/servicemap.png';
import { createContact } from '../../api/contact';

const Contact = ({ notify }) => {
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const resetForm = () => {
    setFormData({
      firstname: '', 
      lastname: '',
      email: '',
      cell_phone: ''
    })
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    let payloadData = {
      firstname: formData.firstname, 
      lastname: formData.lastname,
      email: formData.email,
      cell_phone: formData.cell_phone
    }

    try {
      const response = await createContact(payloadData);
      console.log(response)

      if (response.status === 201) {
        notify('thank you for your info');
        resetForm()
      }
    } catch(error) {
      notify('something went wrong', 'danger');
    }
  }

  return (
    <ContactContainer>
      <Container>
        <MapContainer>
          <h1>Area of Service</h1>
          <Img src={serviceMap} alt="area of service"/>
        </MapContainer>
        <Form onSubmit={onHandleSubmit}>
          <h1>We will call you back</h1>
          <FormTop>
            <InputTop 
              name="firstname" 
              type="text" 
              value={formData.firstname} 
              placeholder='First Name' 
              onChange={onChange}
              required
            />
            <InputTop 
              name="lastname" 
              type="text" 
              value={formData.lastname} 
              placeholder='Last Name' 
              onChange={onChange}
              required
            />
          </FormTop>
          <FormBottom>
            <InputBottom 
              name="email" 
              type="email" 
              value={formData.email} 
              placeholder='Email' 
              onChange={onChange}
              required
            />
            <InputBottom 
              name="cell_phone" 
              type="phone" 
              value={formData.cell_phone} 
              placeholder='Cell Phone' 
              onChange={onChange}
              required
            />
          </FormBottom>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
      </Container>
    </ContactContainer>
  )
}

export default Contact