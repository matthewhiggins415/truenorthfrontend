import React, { useState, useEffect } from 'react';
import { AdminBlogScreenContainer, AdminBlogScreenHeader, BlogContainer, Btn, BlogBtn } from './AdminBlogs.styles';
import { useNavigate } from "react-router-dom";
import { getBlogs } from '../../../api/blog';

const AdminBlogs = ({ user, notify }) => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await getBlogs(user)
      setBlogs(res.data.blogs)
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
      <div>
        {blogs.map((blog, index) => (
          <BlogContainer key={blog._id}>
            <p>{index + 1}.</p>
            <p>{blog.isPublished ? 'published' : 'not published'}</p>
            <p>{blog.date}</p>
            <p>{blog.title}</p>
            <BlogBtn onClick={() => handleNavigateBlog(blog._id)}>...</BlogBtn>
          </BlogContainer>
        ))}
      </div>
    </AdminBlogScreenContainer>
  )
}

export default AdminBlogs