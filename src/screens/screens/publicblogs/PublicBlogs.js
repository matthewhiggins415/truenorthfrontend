import React, { useState, useEffect } from 'react';
import { getAllPublicBlogs } from '../../../api/blog';
import { BlogCard, BlogsPageContainer, BackBtn } from './PublicBlogs.styles';
import { useNavigate } from "react-router-dom";
import apiUrl from '../../../apiConfig';

const PublicBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const retrieveBlogs = async () => {
      const res = await getAllPublicBlogs()
      console.log(res)
      setBlogs(res.data.blogs)
    }

    retrieveBlogs()
  }, [])

  const handleBack = () => {
    navigate('/')
  }
   
  return (
    <BlogsPageContainer>
      <BackBtn onClick={handleBack}>Back</BackBtn>
      {blogs?.map((blog) => (
        <BlogCard to={`/blogs/${blog._id}`} key={blog._id}>
          <img src={blog.img} />
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
        </BlogCard>
      ))}
    </BlogsPageContainer>
  )
}

export default PublicBlogs