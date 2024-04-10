import React, { useState, useEffect } from 'react';
import { UpdateContactContainer, BackBtn, FormContainer, Form, InputContainer, Input, Select, SubmitBtn, LoadingContainer, TextArea } from './UpdateContact.styles';
import { getContact } from '../../../api/contact';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import BounceLoader from "react-spinners/BounceLoader";
import { updateAContact } from '../../../api/contact';

const UpdateContact = ({ user, notify }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: '',
    systemType: '',
    modelNumber: '',
    serialNumber: '', 
    fuelType: '',
    systemSize: '',
    address: '',
    unit: '',
    city: '',
    zip: '',
    notes: ''
  })

  useEffect(() => {
    if (Object.keys(user).length === 0 || user.isAdmin === false) {
      navigate("/");
    }

    const retrieveContact = async () => {
      const res = await getContact(user, id)

      setFormData({
        firstname: res.data.contact.firstname, 
        lastname: res.data.contact.lastname,
        email: res.data.contact.email,
        cell_phone: res.data.contact.cell_phone,
        systemType: res.data.contact.systemType,
        modelNumber: res.data.contact.modelNumber,
        serialNumber: res.data.contact.serialNumber, 
        fuelType: res.data.contact.fuelType,
        systemSize: res.data.contact.systemSize,
        address: res.data.contact.address,
        unit: res.data.contact.unit,
        city: res.data.contact.city,
        zip: res.data.contact.zip,
        notes: res.data.contact.notes
      })
    }

    retrieveContact()
  }, [])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await updateAContact(formData, user, id)
      console.log(res)

      setFormData({
        firstname: res.data.newContact.firstname, 
        lastname: res.data.newContact.lastname,
        email: res.data.newContact.email,
        cell_phone: res.data.newContact.cell_phone,
        systemType: res.data.newContact.systemType,
        modelNumber: res.data.newContact.modelNumber,
        serialNumber: res.data.newContact.serialNumber, 
        fuelType: res.data.newContact.fuelType,
        systemSize: res.data.newContact.systemSize,
        address: res.data.newContact.address,
        unit: res.data.newContact.unit,
        city: res.data.newContact.city,
        zip: res.data.newContact.zip,
        notes: res.data.newContact.notes
      })

      notify('contact updated')
    } catch(error) {
      console.log(error);
      notify('something went wrong', 'danger')
    }
  }

  const handleBack = () => {
    navigate(`/contact/${id}`)
  }

  return (
    <UpdateContactContainer>
        <BackBtn onClick={handleBack}>back</BackBtn>
        <FormContainer loading={loading}>
        <Form onSubmit={handleSubmit} loading={loading}>
          <h2>Update Existing Contact</h2>
          <InputContainer>
            <label>First Name:</label>
            <Input 
              name="firstname" 
              type="text" 
              value={formData.firstname} 
              placeholder='first name' 
              onChange={onChange} 
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
              />
          </InputContainer>
          <InputContainer>
            <label>Phone:</label>
            <Input 
              name="cell_phone" 
              type="tel" 
              value={formData.cell_phone} 
              placeholder='phone number' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>System Type:</label>
            <Input 
              name="systemType" 
              type="text" 
              value={formData.systemType} 
              placeholder='system type' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Model Number:</label>
            <Input 
              name="modelNumber" 
              type="text" 
              value={formData.modelNumber} 
              placeholder='model number' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Serial Number:</label>
            <Input 
              name="serialNumber" 
              type="text" 
              value={formData.serialNumber} 
              placeholder='serial number' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Fuel Type:</label>
            <Input 
              name="fuelType" 
              type="text" 
              value={formData.fuelType} 
              placeholder='fuel number' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>System Size:</label>
            <Input 
              name="systemSize" 
              type="text" 
              value={formData.systemSize} 
              placeholder='system size' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Address</label>
            <Input 
              name="address" 
              type="text"
              value={formData.address} 
              placeholder='home address' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Unit</label>
            <Input 
              name="unit" 
              type="text"
              value={formData.unit} 
              placeholder='unit address' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>City</label>
            <Input 
              name="city"
              type="text"
              value={formData.city}
              placeholder='city' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Zip</label>
            <Input 
              name="zip" 
              type="text"
              value={formData.zip} 
              placeholder='zip code' 
              onChange={onChange}
              />
          </InputContainer>
          <InputContainer>
            <label>Notes</label>
            <TextArea 
              name="notes" 
              type="textarea"
              value={formData.notes} 
              placeholder='notes' 
              onChange={onChange}
            ></TextArea>
          </InputContainer>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
        <LoadingContainer loading={loading}>
          <h2>Loading</h2>
          <BounceLoader color="#36d7b7" />
        </LoadingContainer>
      </FormContainer>
    </UpdateContactContainer>
  )
}

export default UpdateContact