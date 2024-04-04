import axios from "axios"
import apiUrl from "../apiConfig"

// upload multiple images
export const uploadFiles = (user, data) => {
  console.log("data: ", data)

  return axios.post(apiUrl + '/upload-many', 
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
   })
}

// delete a single image 
export const removeFileFromFirebase = (imageName) => {
  return axios.delete(apiUrl + `/remove-image/${imageName}`)
}