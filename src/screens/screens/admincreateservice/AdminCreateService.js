import React, { useState } from 'react';
import { CreateServiceContainer, BackBtn, Form, FormContainer, Input, TextArea, SubmitBtn, BtnContainer, InputContainer, ImgForm, Img } from './AdminCreateService.styles';
import { useNavigate } from "react-router-dom";
import { createService } from '../../../api/services';
import { uploadImage } from '../../../api/upload';
import apiUrl from '../../../apiConfig';

const AdminCreateService = ({ user, notify }) => {
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    console.log(selectedFile)

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const res = await uploadImage(formData);
      console.log("res:", res)

      if (res.status === 200) {

        const picName = res.data.msg

        setFormData(prevFormData => ({
          ...prevFormData,
          img: picName
        }));

        console.log("formData: ", formData)
      }
    } catch(error) {
      console.log(error);
      notify('something went wrong', 'danger');
    }
  }

  return (
    <CreateServiceContainer>
      <BtnContainer>
        <BackBtn onClick={handleBack}>back</BackBtn>
      </BtnContainer>
      <FormContainer>
        <h2>Create a Service</h2>
        {formData.img ? <p>{formData.img}</p> : <></>}
        <ImgForm onSubmit={handleImageUpload}>
          <input type="file" onChange={handleFileChange} />
          { selectedFile ? <button type="submit">Upload</button> : <></> }
        </ImgForm>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label>Name</label>
            <Input 
              name="name"
              value={formData.name}
              type="text"
              placeholder="Name"
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Title</label>
            <Input 
              name="title"
              value={formData.title}
              type="text"
              placeholder="Title"
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Paragraph One</label>
            <TextArea
              name="paragraphOne"
              value={formData.paragraphOne}
              type="text"
              placeholder="Paragraph One"
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Paragraph Two</label>
            <TextArea
              name="paragraphTwo"
              value={formData.paragraphTwo}
              type="text"
              placeholder="Paragraph Two"
              onChange={onChange}        
            />
          </InputContainer>
          <InputContainer>
            <label>Paragraph Three</label>
            <TextArea
              name="paragraphThree"
              value={formData.paragraphThree}
              type="text"
              placeholder="Paragraph Three"
              onChange={onChange}         
            />
          </InputContainer>
          <InputContainer>
            <label>Paragraph Four</label>
            <TextArea
              name="paragraphFour"
              value={formData.paragraphFour}
              type="text"
              placeholder="Paragraph Four"
              onChange={onChange}
            />
          </InputContainer>
          <InputContainer>
            <label>Paragraph Five</label>
            <TextArea
              name="paragraphFive"
              value={formData.paragraphFive}
              type="text"
              placeholder="Paragraph Five"
              onChange={onChange}         
            />
          </InputContainer>
          <SubmitBtn type="submit">submit</SubmitBtn>
        </Form>
      </FormContainer>
    </CreateServiceContainer>
  )
}

export default AdminCreateService