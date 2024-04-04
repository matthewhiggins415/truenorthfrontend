import axios from 'axios'
import apiUrl from '../apiConfig.js'

// upload 
export const uploadImage = (formData) => {
  return axios.post(process.env.REACT_APP_API_URL + '/upload-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

// get uploads 
export const getImages = () => {
  return axios.get(process.env.REACT_APP_API_URL + `/get-images`)
}

// remove upload
export const removeImage = (image) => {
  return axios.delete(process.env.REACT_APP_API_URL + `/remove-image/${image}`)
}