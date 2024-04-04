import React, { useState, useEffect } from 'react';
import { ImagesScreenContainer, Img, ImagesContainer, RemoveBtn, H1, Warning, Form, UploadContainer, UploadBtn, FileLabel, RemoveFilesBtn, LoadingContainer, ImgContainer, DeleteImageButton } from './AdminImages.styles';
// import { getImages, removeImage } from '../../../api/upload';
import { uploadFiles, removeFileFromFirebase } from '../../../api/firebase';
import { getImages, createImage, getImage, destroyImage } from '../../../api/image';
import BounceLoader from "react-spinners/BounceLoader";
import { RiDeleteBin7Fill } from "react-icons/ri";

const AdminImages = ({ user, notify }) => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [imgUploading, setImgUploading] = useState(false);

  useEffect(() => {
    const getAllImages = async () => {
      setLoading(true);

      try {
        const res = await getImages();
        console.log("res:", res)
        setImages(res.data.images)
        setLoading(false)
      } catch(error) {
        console.log(error)
        notify("something went wrong", "danger")
      }
    }

    getAllImages();
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (files.length === 0) {
      alert('please select an image/video')
    }

    for (const file of files) {
      const formData = new FormData();
      formData.append('images', file);

      try {
        setImgUploading(true)
        console.log("formdata", formData)
        const response = await uploadFiles(user, formData)
        console.log("response: ", response)
        
        if (response.status === 201) {
          notify('successfully uploaded media');
          console.log("response: ", response)
          
          const imgObj = {
            downloadURL: response.data.image.downloadURL,
            imgName: response.data.image.imgName
          }
          console.log(imgObj)
          
          const newImageResponse = await createImage(imgObj, user);
          console.log("newImageResponse:", newImageResponse)
        }
      } catch (error) {
        console.error('Error uploading images:', error);
        notify('Error uploading media', 'warning')
      }
    }
    setFiles([]);
    setImgUploading(false);

    const getAllImages = async () => {
      setLoading(true);

      try {
        const res = await getImages();
        console.log("res:", res)
        setImages(res.data.images)
        setLoading(false)
      } catch(error) {
        console.log(error)
        notify("something went wrong", "danger")
      }
    }

    getAllImages();
  }

  const onImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  }

  // delete image from firebase & mongodb
  // then get all the images again
  const handleRemoveImage = async (img) => {
    console.log('remove image', img)
    console.log(img.imgName)
    setLoading(true)

    try {
      const response = await removeFileFromFirebase(img.imgName)
      console.log(response)

      if (response.status === 200) {
        const res = await destroyImage(user, img._id)
        console.log("mongod delete image:", res)
        
        if (res.status === 204) {
          notify('image deleted')

          const remainingImages = await getImages();
          console.log("remainingImages:", remainingImages)
          setImages(remainingImages.data.images)
          setLoading(false);
        }
      }
    } catch(error) {
      console.log(error);
      notify('something went wrong', 'danger');
    }
  }

  return (
    <ImagesScreenContainer>
        <div>
          <h2>Manage your Images: </h2>
          <UploadContainer>
            <h1>Add a new batch of photos/videos</h1>
            { 
              imgUploading ? 
              <h1>{`uploading... ${files.length} files`}</h1> :
              <>
                <Form onSubmit={handleSubmit}>
                  <input style={{ display: 'none' }} onChange={onImageChange} type="file" accept="image/*" id="fileInput" multiple />
                  <FileLabel htmlFor="fileInput">Choose Files</FileLabel>
                  { files.length > 0 ? <p>{`${files.length} files chosen`}</p> : <p>no files chosen</p> }
                  <UploadBtn type="submit">Upload</UploadBtn>
                </Form>
              </>
            }
          </UploadContainer>
        </div>
        <ImagesContainer>
          {images.length > 0 && loading === false ? images.map((img) => (
            <ImgContainer>
              <Img src={img.downloadURL} key={img._id}/>
              <DeleteImageButton onClick={() => handleRemoveImage(img)}>
                <RiDeleteBin7Fill style={{color: 'red'}} size={20}/>
              </DeleteImageButton>
            </ImgContainer>
          )) : 
            <LoadingContainer>
              <BounceLoader color="#ee1c4a" /></LoadingContainer>}
            </ImagesContainer>        
    </ImagesScreenContainer>

  )
}

export default AdminImages