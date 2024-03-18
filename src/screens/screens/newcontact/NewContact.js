import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NewContactContainer, Form, BackBtn, InputContainer, SubmitBtn, TextArea, Select, Input } from './NewContact.styles';
import { FormContainer, LoadingContainer  } from '../../../components/modal/Modal.styles';
import BounceLoader from "react-spinners/BounceLoader";
import { createContact } from '../../../api/contact';

const NewContact = ({ user, notify }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '',
    email: '',
    cell_phone: '',
    chimneys: 0,
    roofType: '', 
    homeType: '',
    chimneyType: '',
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
  }, [])

  const clearForm = () => {
    setFormData({
      firstname: '', 
      lastname: '',
      email: '',
      cell_phone: '',
      chimneys: 0,
      roofType: '', 
      homeType: '',
      chimneyType: '',
      address: '',
      unit: '',
      city: '',
      zip: '',
      notes: '',
    })
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  if (user.isAdmin === false) {
    navigate("/");
  }

  const handleBack = () => {
    navigate('/contacts')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit")
    try {
      let res = await createContact(formData)
      console.log(res)

      if (res.status === 201) {
        notify('new contact created')
        navigate('/contacts')
      }
    } catch(e) {
      notify('something went wrong', 'danger')
      console.log('issue')
    }
  }

  return (
    <NewContactContainer>
      <BackBtn onClick={handleBack}>back</BackBtn>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Create a new Contact</h2>
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
            <label>Chimneys:</label>
            <Input 
              name="chimneys" 
              type="number" 
              value={formData.chimneys} 
              placeholder='number of chimneys' 
              onChange={onChange}
              min="1"
              />
          </InputContainer>
          <InputContainer>
            <label htmlFor="roofType">Roof Type:</label>
            <Select name="roofType" id="roofType" value={formData.roofType} onChange={onChange} >
              <option value="shingle">Shingle</option>
              <option value="tile">Tile</option>
              <option value="flat">Flat</option>
              <option value="other">Other</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label htmlFor="homeType">Home Type:</label>
            <Select name="homeType" id="homeType" value={formData.homeType} onChange={onChange} >
              <option value="onestory">One Story</option>
              <option value="twostory">Two Story</option>
              <option value="other">Other</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <label htmlFor="chimneyType">Chimney Type:</label>
            <Select name="chimneyType" id="chimneyType" value={formData.chimneyType} onChange={onChange} >
              <option value="masonry">Masonry</option>
              <option value="prefab">Prefab</option>
              <option value="other">Other</option>
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
              />
          </InputContainer>
          <InputContainer>
            <label>Unit</label>
            <Input 
              name="unit" 
              type="text"
              value={formData.unit} 
              placeholder='home unit address' 
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
      </FormContainer>
    </NewContactContainer>
  )
}

export default NewContact