import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getBlog, deleteBlog } from '../../../api/blog';
import { AdminBlogScreenContainer, BlogPostContainer, Btn, BtnContainer, MetaContainer } from './AdminBlog.styles';
import Blog from '../blog/Blog';
import apiUrl from '../../../apiConfig';

const AdminBlog = ({ user, notify }) => {
  const [blog, setBlog] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const retrieveBlog = async () => {
      const res = await getBlog(user, id);
      setBlog(res.data.blog);
      console.log(res.data.blog)
    }

    retrieveBlog()
  }, [])

  const handleBack = () => {
    navigate('/adminblogs')
  }

  const handleEdit = () => {
    navigate(`/adminblogedit/${id}`)
  }

  const handleDelete = async () => {
    const res = await deleteBlog(user, id);
    console.log(res)
    if (res.status === 204) {
      navigate(`/adminblogs`)
      notify('blog deleted')
    }
  }

  return (
    <AdminBlogScreenContainer>
      <BlogPostContainer>
        <BtnContainer>
          <Btn onClick={handleBack}>back</Btn>
          <Btn onClick={handleEdit}>edit</Btn>
          <Btn onClick={handleDelete}>delete</Btn>
        </BtnContainer>
        <MetaContainer>
          <div>
            <h4>Is Blog Currently Published:</h4>
            <p>{blog.isPublished ? 'True' : 'False'}</p>
          </div>
          <div>
            <h4>meta description:</h4>
            <p>{blog.metaDescription}</p>
          </div>
          <div>
            <h4>meta keywords:</h4>
            <p>{blog.metaKeywords}</p>
          </div>
          <div>
            <h4>Background Image Address:</h4>
            <p>{blog.img}</p>
          </div>
        </MetaContainer>
        <Blog 
          img={apiUrl + '/uploads/' + blog.img}
          title={blog.title}
          author={blog.author}
          isPublished={blog.isPublished}
          metaDescription={blog.metaDescription}
          metaKeywords={blog.metaKeywords}
          date={blog.date}
          sectionOneHeader={blog.sectionOneHeader}
          sectionOneContent={blog.sectionOneContent}
          sectionTwoHeader={blog.sectionTwoHeader}
          sectionTwoContent={blog.sectionTwoContent}
          sectionThreeHeader={blog.sectionThreeHeader}
          sectionThreeContent={blog.sectionThreeContent}
          sectionFourHeader={blog.sectionFourHeader}
          sectionFourContent={blog.sectionFourContent}
          sectionFiveHeader={blog.sectionFiveHeader}
          sectionFiveContent={blog.sectionFiveContent}
          conclusionHeader={blog.conclusionHeader}
          conclusionContent={blog.conclusionContent}
        />
      </BlogPostContainer>
    </AdminBlogScreenContainer>
  )
}

export default AdminBlog