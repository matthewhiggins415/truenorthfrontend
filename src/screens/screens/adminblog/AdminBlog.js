import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getBlog, deleteBlog } from '../../../api/blog';
import { AdminBlogScreenContainer, BlogPostContainer, Btn, BtnContainer, MetaContainer, RemoveBtn, LoadingContainer } from './AdminBlog.styles';
import Blog from '../blog/Blog';
import BounceLoader from "react-spinners/BounceLoader";

const AdminBlog = ({ user, notify }) => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true)
    const retrieveBlog = async () => {
      const res = await getBlog(user, id);
      setBlog(res.data.blog);
      console.log(res.data.blog)
      setIsLoading(false)
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
      <BtnContainer>
        <Btn onClick={handleBack}>back</Btn>
        <div>
          <Btn onClick={handleEdit}>edit</Btn>
          <RemoveBtn onClick={handleDelete}>delete</RemoveBtn>
        </div>
      </BtnContainer>
      {isLoading ?
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      : 
        <BlogPostContainer>
          <MetaContainer>
            <div>
              <h3>Is Blog Currently Published:</h3>
              <p>{blog.isPublished ? 'True' : 'False'}</p>
            </div>
            <div>
              <h3>meta description:</h3>
              <p>{blog.metaDescription}</p>
            </div>
            <div>
              <h3>meta keywords:</h3>
              <p>{blog.metaKeywords}</p>
            </div>
          </MetaContainer>
          <Blog 
            img={blog.img}
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
      }
      </AdminBlogScreenContainer>
  )
}

export default AdminBlog