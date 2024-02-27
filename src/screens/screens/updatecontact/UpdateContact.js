import React, { useState, useEffect } from 'react';
import { UpdateContactContainer, BackBtn } from './UpdateContact.styles';
import { getContact } from '../../../api/contact';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, InputContainer, Input, Select, SubmitBtn, LoadingContainer  } from '../../../components/modal/Modal.styles';
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
    chimneys: 0,
    roofType: '', 
    homeType: '',
    chimneyType: '',
    address: '',
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
        chimneys: res.data.contact.chimneys,
        roofType: res.data.contact.roofType, 
        homeType: res.data.contact.homeType,
        chimneyType: res.data.contact.chimneyType,
        address: res.data.contact.address,
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
        chimneys: res.data.newContact.chimneys,
        roofType: res.data.newContact.roofType, 
        homeType: res.data.newContact.homeType,
        chimneyType: res.data.newContact.chimneyType,
        address: res.data.newContact.address,
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
            <label>Chimneys:</label>
            <Input 
              name="chimneys" 
              type="number" 
              value={formData.chimneys} 
              placeholder='number of chimneys' 
              onChange={onChange}
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
            <textarea 
              name="notes" 
              type="textarea"
              value={formData.notes} 
              placeholder='notes' 
              onChange={onChange}
            ></textarea>
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