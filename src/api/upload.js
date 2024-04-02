import axios from 'axios'
import apiUrl from '../apiConfig.js'

// upload 
export const uploadImage = (formData) => {
  return axios.post(apiUrl + '/upload-image', formData, {
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
  return axios.delete(apiUrl + `/remove-image/${image}`)
}