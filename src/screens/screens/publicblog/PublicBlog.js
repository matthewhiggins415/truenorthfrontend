import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SectionContainer, Title } from '../blog/Blog.styles';
import { PublicBlogContainer, Img, Btn } from './PublicBlog.styles'
import { getAPublicBlog } from '../../../api/blog';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiUrl from '../../../apiConfig';

const PublicBlog = () => {
  const [blog, setBlog] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const retrieveBlog = async () => {
      try {
        const res = await getAPublicBlog(id)
        console.log(res)
        setBlog(res.data.blog)
      } catch(error) {
        console.log(error)
      }
    }

    retrieveBlog()
  }, [])
  
  const handleBack = () => {
    navigate('/blogs')
  }

  return (
    <PublicBlogContainer>
      <div>
      <Btn onClick={handleBack}>back</Btn>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.metaKeywords} />
      </Helmet>
      <header>
        <Title>{blog.title}</Title>
        <Img src={apiUrl + '/uploads/' + blog.img} />
        <p>{blog.date}</p>
        <p>{blog.author}</p>
      </header>
      <main>
        <article>
          <SectionContainer>
            <h2>{blog.sectionOneHeader}</h2>
            <p>{blog.sectionOneContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{blog.sectionTwoHeader}</h2>
            <p>{blog.sectionTwoContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{blog.sectionThreeHeader}</h2>
            <p>{blog.sectionThreeContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{blog.sectionFourHeader}</h2>
            <p>{blog.sectionFourContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{blog.sectionFiveHeader}</h2>
            <p>{blog.sectionFiveContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{blog.conclusionHeader}</h2>
            <p>{blog.conclusionContent}</p>
          </SectionContainer>
        </article>
      </main>
      </div>
    </PublicBlogContainer>
  )
}

export default PublicBlog