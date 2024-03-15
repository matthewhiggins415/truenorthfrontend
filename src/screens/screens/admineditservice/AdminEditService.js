import React, { useState, useEffect } from 'react';
import { EditServiceContainer, BackBtn, Form, FormContainer, Input, TextArea, SubmitBtn, RemoveBtn, BtnContainer, Img } from './AdminEditService.styles';
import { useNavigate } from "react-router-dom";
import { getSingleService, updateService, deleteService, updateServiceImage} from '../../../api/services';
import { useParams } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../../../apiConfig';
import { uploadImage } from '../../../api/upload';

const AdminEditService = ({ user, notify }) => {
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

  const { id } = useParams();

  useEffect(() => {
    const retrieveService = async () => {
      const res = await getSingleService(id)
      console.log("get service: ", res)

      setFormData({
        img: res.data.service.img,
        name: res.data.service.name,
        title: res.data.service.title,
        description: res.data.service.description,
        paragraphOne: res.data.service.paragraphOne,
        paragraphTwo: res.data.service.paragraphTwo,
        paragraphThree: res.data.service.paragraphThree,
        paragraphFour: res.data.service.paragraphFour,
        paragraphFive: res.data.service.paragraphFive
      })
    }

    retrieveService()
  }, [])

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
      const res = await updateService(id, user, formData)
      console.log(res)
      if (res.status === 200) {
        notify('service updated');
      }
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleBack = () => {
    navigate('/admin/services')
  }

  const handleDelete = async () => {
    try { 
      const response = await deleteService(user, id)
      console.log(response)

      if (response.status === 204) {
        navigate('/admin/services')
        notify('service deleted')
      }
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const res = await uploadImage(formData)

      if (res.status === 200) {
        const picName = res.data.msg
        const updateImgResponse = await updateServiceImage(id, picName);
        console.log(updateImgResponse)

        setFormData({
          img: updateImgResponse.data.updatedService.img
        })

        notify('image updated')
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <EditServiceContainer>
      <BtnContainer>
        <BackBtn onClick={handleBack}>back</BackBtn>
        <RemoveBtn onClick={handleDelete}>delete</RemoveBtn>
      </BtnContainer>
      <FormContainer>
        <h2>Edit a Service</h2>
        <Img src={apiUrl + "/uploads/" + formData.img} />
        <p>{formData.img}</p>
        <form onSubmit={handleImageUpload}>
          <Input type="file" onChange={handleFileChange} />
          { selectedFile ? <button type="submit">Upload</button> : <></> }
        </form>
        <Form onSubmit={handleSubmit}>
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
    </EditServiceContainer>
  )
}

export default AdminEditService