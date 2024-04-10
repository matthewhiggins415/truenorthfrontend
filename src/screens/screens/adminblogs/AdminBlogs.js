import React, { useState, useEffect } from 'react';
import { AdminBlogScreenContainer, AdminBlogScreenHeader, BlogContainer, Btn, BlogBtn, LoadingContainer } from './AdminBlogs.styles';
import { useNavigate } from "react-router-dom";
import { getBlogs } from '../../../api/blog';
import BounceLoader from "react-spinners/BounceLoader";

const AdminBlogs = ({ user, notify }) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true)
    const getAllBlogs = async () => {
      const res = await getBlogs(user)
      setBlogs(res.data.blogs)
      setIsLoading(false)
    }

    getAllBlogs()
  }, [])

  const navigateCreateBlog = () => {
    navigate('/adminnewblog')
  };

  const handleNavigateBlog = (id) => {
    navigate(`/adminblog/${id}`)
  }

  return (
    <AdminBlogScreenContainer>
      <AdminBlogScreenHeader>
        <h2>Blogs</h2>
        <Btn onClick={navigateCreateBlog}>Create Blog</Btn>
      </AdminBlogScreenHeader>
      {isLoading ?
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      :      
      <div>
        {blogs.map((blog, index) => (
          <BlogContainer onClick={() => handleNavigateBlog(blog._id)} key={blog._id}>
            <p>{index + 1}.</p>
            <p>{blog.date}</p>
            <p>{blog.title}</p>
            <p>{blog.isPublished ? 'published' : 'not published'}</p>
          </BlogContainer>
        ))}
      </div>}
    </AdminBlogScreenContainer>
  )
}

export default AdminBlogs