import React, { useState, useEffect } from 'react';
import { getImages } from '../../api/image';
import { ModalContainer, CloseBtn, LoadingContainer, ImagesContainer, Img, H3, ImageContainer, ImgSelectBtn } from './SelectBlogImageModal.styles';
import { IoIosCloseCircleOutline } from "react-icons/io";
import BounceLoader from "react-spinners/BounceLoader";
import { IoMdAddCircle } from "react-icons/io";
import { updateBlog } from '../../api/blog';

const SelectBlogImageModal = ({ user, notify, toggleModal, id }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getExistingImages = async () => {
      try {
        setLoading(true);
        const res = await getImages();
        console.log("res", res);
        setImages(res.data.images);
        setLoading(false);
      } catch (error) {
        console.log(error);
        notify('something went wrong', 'danger')
      }
    }

    getExistingImages();
  }, [])

  const handleCloseModal = () => {
    toggleModal();
  }

  const handleSelectImage = async (img) => {
    setLoading(true)
    const { downloadURL } = img

    const data = {
      img: downloadURL
    }

    try {
      const res = await updateBlog(data, user, id)
      console.log("blog updated with new img", res)
      if (res.status === 201) {
        notify('image updated');
        setLoading(false)
        handleCloseModal();
      }
    } catch(error) {
      notify('something went wrong')
      console.log(error)
    }
  }

  return (
    <ModalContainer>
      <H3>Choose a new image</H3>
      <CloseBtn onClick={handleCloseModal}>
        <IoIosCloseCircleOutline color="red" size={30}/>
      </CloseBtn>
      {loading ? 
        <LoadingContainer>
          <BounceLoader color="#ee1c4a" />
        </LoadingContainer>
      : <ImagesContainer>
        {images ? images.map((img) => (
          <ImageContainer>
            <Img src={img.downloadURL}/>
            <ImgSelectBtn onClick={() => handleSelectImage(img)}>
              <IoMdAddCircle color="white" size={25}/>
            </ImgSelectBtn>
          </ImageContainer>
        )) : <></> }
      </ImagesContainer>}
    </ModalContainer>
  )
}

export default SelectBlogImageModal