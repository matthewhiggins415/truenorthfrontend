import React, { useState, useEffect } from 'react';
import { EditServiceContainer, BackBtn, Form, FormContainer, Input, TextArea, SubmitBtn, RemoveBtn, BtnContainer, Img, ImgContainer, InputContainer } from './AdminEditService.styles';
import { useNavigate } from "react-router-dom";
import { getSingleService, updateService, deleteService, updateServiceImage} from '../../../api/services';
import { useParams } from "react-router-dom";
import SelectImageModal from '../../../components/selectimagemodal/SelectImageModal';

const AdminEditService = ({ user, notify }) => {
  const [showImageModal, setShowImageModal] = useState(false)
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
  }, [showImageModal])

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

  const handleShowImageModal = () => {
    setShowImageModal(!showImageModal);
  }

  return (
    <EditServiceContainer>
      <BtnContainer>
        <BackBtn onClick={handleBack}>back</BackBtn>
        <RemoveBtn onClick={handleDelete}>delete</RemoveBtn>
      </BtnContainer>
      <FormContainer>
        <h2>Edit a Service</h2>
        {
          showImageModal 
        ? 
          <SelectImageModal user={user} notify={notify} handleShowImageModal={handleShowImageModal} id={id}/>
        : 
          <InputContainer>
            <label>Image</label>
            <ImgContainer>
              <Img src={formData.img}/>
              <button onClick={handleShowImageModal}>select new image</button>
            </ImgContainer>
          </InputContainer>
        }
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label>Blog Name</label>
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
    </EditServiceContainer>
  )
}

export default AdminEditService