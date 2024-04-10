import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, SectionContainer, Label, Input, TextArea } from '../createblog/CreateBlog.styles';
import { getBlog, updateBlog, publishBlog, unpublishBlog, updateBlogImage } from '../../../api/blog';
import { EditBlogScreen, Img, BtnContainer, Btn, SubmitBtn, ImgForm, InputContainer, ImgContainer, FormContainer, LoadingContainer} from './AdminEditBlog.styles';
import SelectBlogImageModal from '../../../components/selectblogimagemodal/SelectBlogImageModal';
import BounceLoader from "react-spinners/BounceLoader";

const AdminEditBlog = ({ user, notify }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [formData, setFormData] = useState({
    img: '',
    author: '',
    isPublished: false,
    title: '', 
    metaDescription: '',
    metaKeywords: '',
    date: '',
    sectionOneHeader: '', 
    sectionOneContent: '',
    sectionTwoHeader: '',
    sectionTwoContent: '',
    sectionThreeHeader: '',
    sectionThreeContent: '',
    sectionFourHeader: '',
    sectionFourContent: '',
    sectionFiveHeader: '',
    sectionFiveContent: '',
    conclusionHeader: '',
    conclusionContent: ''
  })

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const retrieveBlog = async () => {
      setIsLoading(true)
      const res = await getBlog(user, id);

      console.log(res)

      setFormData({
        img: res.data.blog.img,
        author: res.data.blog.author,
        isPublished: res.data.blog.isPublished, 
        title: res.data.blog.title, 
        metaDescription: res.data.blog.metaDescription,
        metaKeywords: res.data.blog.metaKeywords,
        date: res.data.blog.date,
        sectionOneHeader: res.data.blog.sectionOneHeader, 
        sectionOneContent: res.data.blog.sectionOneContent,
        sectionTwoHeader: res.data.blog.sectionTwoHeader,
        sectionTwoContent: res.data.blog.sectionTwoContent,
        sectionThreeHeader: res.data.blog.sectionThreeHeader,
        sectionThreeContent: res.data.blog.sectionThreeContent,
        sectionFourHeader: res.data.blog.sectionFourHeader,
        sectionFourContent: res.data.blog.sectionFourContent,
        sectionFiveHeader: res.data.blog.sectionFiveHeader,
        sectionFiveContent: res.data.blog.sectionFiveContent,
        conclusionHeader: res.data.blog.conclusionHeader,
        conclusionContent: res.data.blog.conclusionContent
      })

      setIsLoading(false)
    }

    retrieveBlog()
  }, [showImageModal])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')

    try {
      setIsLoading(true)
      const res = await updateBlog(formData, user, id)
      console.log(res)
    
      setFormData({
        img: res.data.newBlog.img,
        author: res.data.newBlog.author,
        isPublished: res.data.newBlog.isPublished, 
        title: res.data.newBlog.title, 
        metaDescription: res.data.newBlog.metaDescription,
        metaKeywords: res.data.newBlog.metaKeywords,
        date: res.data.newBlog.date,
        sectionOneHeader: res.data.newBlog.sectionOneHeader, 
        sectionOneContent: res.data.newBlog.sectionOneContent,
        sectionTwoHeader: res.data.newBlog.sectionTwoHeader,
        sectionTwoContent: res.data.newBlog.sectionTwoContent,
        sectionThreeHeader: res.data.newBlog.sectionThreeHeader,
        sectionThreeContent: res.data.newBlog.sectionThreeContent,
        sectionFourHeader: res.data.newBlog.sectionFourHeader,
        sectionFourContent: res.data.newBlog.sectionFourContent,
        sectionFiveHeader: res.data.newBlog.sectionFiveHeader,
        sectionFiveContent: res.data.newBlog.sectionFiveContent,
        conclusionHeader: res.data.newBlog.conclusionHeader,
        conclusionContent: res.data.newBlog.conclusionContent
      })

      notify('blog updated')
      setIsLoading(false)
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleBack = () => {
    navigate(`/adminblog/${id}`)
  }

  const handlePublish = async () => {
    try {
      const res = await publishBlog(user, id)
      console.log(res)
      setFormData({ ...formData, isPublished: res.data.updatedBlog.isPublished });
      notify('blog published')
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleUnpublish = async () => {
    try {
      const res = await unpublishBlog(user, id)
      console.log(res)
      setFormData({ ...formData, isPublished: res.data.updatedBlog.isPublished })
      notify('blog unpublished')
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const toggleModal = () => {
    setShowImageModal(!showImageModal)
  }

  return (
    <EditBlogScreen>
      <BtnContainer>
        <Btn onClick={handleBack}>back</Btn>
        {formData.isPublished ? <Btn onClick={handleUnpublish}>unpublish</Btn> : <Btn onClick={handlePublish}>publish</Btn>}
      </BtnContainer>
      {isLoading ?
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      :
        <FormContainer>
        <h2>Edit Blog</h2>
          {
            showImageModal 
          ? 
            <SelectBlogImageModal user={user} notify={notify} toggleModal={toggleModal} id={id}/>
          : 
            <InputContainer>
              <label>Image</label>
              <ImgContainer>
                <Img src={formData.img}/>
                <button onClick={toggleModal}>select new image</button>
              </ImgContainer>
            </InputContainer>
          }
        <Form onSubmit={handleSubmit}>
          <SectionContainer>
            <h3>Meta Info</h3>
            <Label>Ex: The Harmony of Bees and Chimneys in San Diego</Label>
            <Input 
              name="title" 
              type="text" 
              value={formData.title} 
              placeholder='blog title' 
              onChange={onChange}
            />
            <Label>Ex: Explore the fascinating relationship between bees and chimneys in San Diego's urban landscape. Learn about the importance of bees, implications for residents, and how to promote coexistence.</Label>
            <Input 
              name="metaDescription" 
              type="text" 
              value={formData.metaDescription} 
              placeholder='Meta Description' 
              onChange={onChange}
            />
            <Label>Ex: bees, chimneys, San Diego, urban ecology, coexistence</Label>
            <Input 
              name="metaKeywords" 
              type="text" 
              value={formData.metaKeywords} 
              placeholder='Meta Keywords' 
              onChange={onChange}
            />
            <Label>Ex: February 12, 2024</Label>
            <Input 
              name="date" 
              type="text" 
              value={formData.date} 
              placeholder='Date' 
              onChange={onChange}
            />
            <Label>Author</Label>
            <Input 
              name="author" 
              type="text" 
              value={formData.author} 
              placeholder='Author' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Section 1</h3>
            <Label>Ex: Introduction</Label>
            <Input 
              name="sectionOneHeader" 
              type="text" 
              value={formData.sectionOneHeader} 
              placeholder='Section One Header' 
              onChange={onChange}
            />
            <Label>Ex: San Diego, renowned for its picturesque coastline and vibrant urban scene, is also home to a fascinating ecological phenomenon that often goes unnoticed – the symbiotic relationship between bees and chimneys...</Label>
            <TextArea 
              name="sectionOneContent" 
              type="text" 
              value={formData.sectionOneContent} 
              placeholder='Section One Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Section 2</h3>
            <Label>Ex: The Urban Bee's Refuge</Label>
            <Input 
              name="sectionTwoHeader" 
              type="text" 
              value={formData.sectionTwoHeader} 
              placeholder='Section Two Header' 
              onChange={onChange}
            />
            <Label>Ex: Bees play a critical role in pollinating flowers, fruits, and crops, contributing to ecosystem health and agricultural productivity...</Label>
            <TextArea 
              name="sectionTwoContent" 
              type="text" 
              value={formData.sectionTwoContent} 
              placeholder='Section Two Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Section 3</h3>
            <Input 
              name="sectionThreeHeader" 
              type="text" 
              value={formData.sectionThreeHeader} 
              placeholder='Section Three Header' 
              onChange={onChange}
            />
            <TextArea 
              name="sectionThreeContent" 
              type="text" 
              value={formData.sectionThreeContent} 
              placeholder='Section Three Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Section 4</h3>
            <Input 
              name="sectionFourHeader" 
              type="text" 
              value={formData.sectionFourHeader} 
              placeholder='Section Four Header' 
              onChange={onChange}
            />
            <TextArea 
              name="sectionFourContent" 
              type="text" 
              value={formData.sectionFourContent} 
              placeholder='Section Four Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Section 5</h3>
            <Input 
              name="sectionFiveHeader" 
              type="text" 
              value={formData.sectionFiveHeader} 
              placeholder='Section Five Header' 
              onChange={onChange}
            />
            <TextArea 
              name="sectionFiveContent" 
              type="text" 
              value={formData.sectionFiveContent} 
              placeholder='Section Five Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SectionContainer>
            <h3>Conclusion</h3>
            <Label>Ex: Conclusion</Label>
            <Input
              name="conclusionHeader" 
              type="text" 
              value={formData.conclusionHeader} 
              placeholder='Conclusion Header' 
              onChange={onChange}
            />
            <Label>Ex: In the heart of San Diego's urban landscape, the harmonious coexistence of bees and chimneys underscores the interconnectedness of nature and human habitation...</Label>
            <TextArea 
              name="conclusionContent" 
              type="text" 
              value={formData.conclusionContent} 
              placeholder='Conclusion Content' 
              onChange={onChange}
            />
          </SectionContainer>
          <SubmitBtn type='submit'>submit</SubmitBtn>
        </Form>
      </FormContainer>}
    </EditBlogScreen>
  )
}

export default AdminEditBlog