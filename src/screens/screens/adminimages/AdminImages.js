import React, { useState, useEffect } from 'react';
import { ImagesScreenContainer, Img, ImageContainer, ImagesContainer, RemoveBtn, H1, Warning } from './AdminImages.styles';
import { getImages, removeImage } from '../../../api/upload';
import apiUrl from '../../../apiConfig';

const AdminImages = ({ user, notify }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const res = await getImages();
        console.log("res", res)
        setImages(res.data)
      } catch(error) {
        console.log(error)
        notify("something went wrong", "danger")
      }
    }

    getAllImages();
  }, [])

  const handleRemoveImage = async (image) => {
    const res = await removeImage(image)
    setImages(res.data.remainingImages)
  }

  return (
    <ImagesScreenContainer>
        <h2>Manage your Images: </h2>
        <Warning>REQUIRED** Update your blog, service, or company image with a new image before deleting the existing one.</Warning>
        <ImagesContainer>
          {images.map((image, index) => (
            <ImageContainer>
              <Img src={apiUrl + `/uploads/${image}`} key={index + 1}/>
              <RemoveBtn onClick={() => handleRemoveImage(image)}>Remove</RemoveBtn>
              <p>{image}</p>
            </ImageContainer>
          ))}
        </ImagesContainer>
    </ImagesScreenContainer>

  )
}

export default AdminImages