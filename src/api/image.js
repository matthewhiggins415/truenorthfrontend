import axios from 'axios';
import apiUrl from '../apiConfig.js';

// create image
export const createImage = (data, user) => {
  console.log("data from create image api call:", data)
  return axios.post(apiUrl + '/create-image', 
    {image: data},
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// get single image
export const getImage = (id) => {
  return axios.get(apiUrl + `/images/${id}`)
}

// get all images
export const getImages = () => {
  return axios.get(apiUrl + '/images')
}
  
// destroy image
export const destroyImage = (user, id) => {
  return axios.delete(apiUrl + `/images/${id}`, 
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}