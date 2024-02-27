import React, { useState, useEffect } from 'react';
import { getAllPublicBlogs } from '../../../api/blog';
import { BlogCard, BlogsPageContainer } from './PublicBlogs.styles'

const PublicBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const retrieveBlogs = async () => {
      const res = await getAllPublicBlogs()
      console.log(res)
      setBlogs(res.data.blogs)
    }

    retrieveBlogs()
  }, [])
   
  return (
    <BlogsPageContainer>
      <h1>Recent Blogs</h1>
      {blogs?.map((blog) => (
        <BlogCard to={`/blogs/${blog._id}`} key={blog._id}>
          <img src={blog.img}/>
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
        </BlogCard>
      ))}
    </BlogsPageContainer>
  )
}

export default PublicBlogs