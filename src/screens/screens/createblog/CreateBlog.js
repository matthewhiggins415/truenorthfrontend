import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CreateBlogScreen, Form, SectionContainer, Input, Label, TextArea, Btn } from './CreateBlog.styles';
import { createBlog } from '../../../api/blog';

const CreateBlog = ({ user, notify }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    img: '',
    title: '', 
    metaDescription: '',
    metaKeywords: '',
    author: '',
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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createBlog(user, formData)
      console.log(res)
      if (res.status === 201) {
        notify('blog created');
        navigate('/adminblogs');
      }
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  const handleBack = () => {
    navigate('/adminblogs')
  }

  return (
    <CreateBlogScreen>
      <Btn onClick={handleBack}>back</Btn>
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
            required
          />
          <Label>Ex: Explore the fascinating relationship between bees and chimneys in San Diego's urban landscape. Learn about the importance of bees, implications for residents, and how to promote coexistence.</Label>
          <Input 
            name="metaDescription" 
            type="text" 
            value={formData.metaDescription} 
            placeholder='Meta Description' 
            onChange={onChange}
            required
          />
          <Label>Ex: bees, chimneys, San Diego, urban ecology, coexistence</Label>
          <Input 
            name="metaKeywords" 
            type="text" 
            value={formData.metaKeywords} 
            placeholder='Meta Keywords' 
            onChange={onChange}
            required
          />
          <Label>Ex: February 12, 2024</Label>
          <Input 
            name="date" 
            type="text" 
            value={formData.date} 
            placeholder='Date' 
            onChange={onChange}
            required
          />
          <Label>Author</Label>
          <Input 
            name="author" 
            type="text" 
            value={formData.author} 
            placeholder='Author' 
            onChange={onChange}
            required
          />
        </SectionContainer>
        <SectionContainer>
          <h3>Background Image</h3>
          <Label>Ex: Copy image address by right clicking on image</Label>
          <Input 
            name="img" 
            type="text" 
            value={formData.img} 
            placeholder='Section One Header' 
            onChange={onChange}
            required
          />
          <h3>Section 1</h3>
          <Label>Ex: Introduction</Label>
          <Input 
            name="sectionOneHeader" 
            type="text" 
            value={formData.sectionOneHeader} 
            placeholder='Section One Header' 
            onChange={onChange}
            required
          />
          <Label>Ex: San Diego, renowned for its picturesque coastline and vibrant urban scene, is also home to a fascinating ecological phenomenon that often goes unnoticed – the symbiotic relationship between bees and chimneys...</Label>
          <TextArea 
            name="sectionOneContent" 
            type="text" 
            value={formData.sectionOneContent} 
            placeholder='Section One Content' 
            onChange={onChange}
            required
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
            required
          />
          <Label>Ex: Bees play a critical role in pollinating flowers, fruits, and crops, contributing to ecosystem health and agricultural productivity...</Label>
          <TextArea 
            name="sectionTwoContent" 
            type="text" 
            value={formData.sectionTwoContent} 
            placeholder='Section Two Content' 
            onChange={onChange}
            required
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
            required
          />
          <TextArea 
            name="sectionThreeContent" 
            type="text" 
            value={formData.sectionThreeContent} 
            placeholder='Section Three Content' 
            onChange={onChange}
            required
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
            required
          />
          <TextArea 
            name="sectionFourContent" 
            type="text" 
            value={formData.sectionFourContent} 
            placeholder='Section Four Content' 
            onChange={onChange}
            required
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
            required
          />
          <TextArea 
            name="sectionFiveContent" 
            type="text" 
            value={formData.sectionFiveContent} 
            placeholder='Section Five Content' 
            onChange={onChange}
            required
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
            required
          />
          <Label>Ex: In the heart of San Diego's urban landscape, the harmonious coexistence of bees and chimneys underscores the interconnectedness of nature and human habitation...</Label>
          <TextArea 
            name="conclusionContent" 
            type="text" 
            value={formData.conclusionContent} 
            placeholder='Conclusion Content' 
            onChange={onChange}
            required
          />
        </SectionContainer>
        <Btn type='submit'>submit</Btn>
      </Form>
    </CreateBlogScreen>
  )
}

export default CreateBlog