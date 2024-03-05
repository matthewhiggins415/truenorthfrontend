import React, { useState } from 'react';
import { CreateServiceContainer, BackBtn, Form, FormContainer, Input, TextArea, SubmitBtn} from './AdminCreateService.styles';
import { useNavigate } from "react-router-dom";
import { createService } from '../../../api/services';

const AdminCreateService = ({ user, notify }) => {
  const [formData, setFormData] = useState({
    img: '',
    name: '',
    title: '', 
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    paragraphFour: '',
    paragraphFive: ''
  })

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await createService(user, formData)
      console.log(res)
      if (res.status === 201) {
        notify('service created');
        navigate('/admin/services')
      }
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleBack = () => {
    navigate('/admin/services')
  }

  return (
    <CreateServiceContainer>
      <BackBtn onClick={handleBack}>back</BackBtn>
      <FormContainer>
        <h2>Create a Service</h2>
        <Form onSubmit={handleSubmit}>
          <Input 
            name="img" 
            type="text" 
            value={formData.img} 
            placeholder='Image Url' 
            onChange={onChange}
            required
          />
          <Input 
            name="name"
            value={formData.name}
            type="text"
            placeholder="Name"
            onChange={onChange}
            required
          />
          <Input 
            name="title"
            value={formData.title}
            type="text"
            placeholder="Title"
            onChange={onChange}
            required
          />
          <TextArea
            name="paragraphOne"
            value={formData.paragraphOne}
            type="text"
            placeholder="Paragraph One"
            onChange={onChange}
            required
          />
          <TextArea
            name="paragraphTwo"
            value={formData.paragraphTwo}
            type="text"
            placeholder="Paragraph Two"
            onChange={onChange}        
          />
          <TextArea
            name="paragraphThree"
            value={formData.paragraphThree}
            type="text"
            placeholder="Paragraph Three"
            onChange={onChange}         
          />
          <TextArea
            name="paragraphFour"
            value={formData.paragraphFour}
            type="text"
            placeholder="Paragraph Four"
            onChange={onChange}
          />
          <TextArea
            name="paragraphFive"
            value={formData.paragraphFive}
            type="text"
            placeholder="Paragraph Five"
            onChange={onChange}         
          />
          <SubmitBtn type="submit">submit</SubmitBtn>
        </Form>
      </FormContainer>
    </CreateServiceContainer>
  )
}

export default AdminCreateService