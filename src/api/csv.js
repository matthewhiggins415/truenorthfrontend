import axios from 'axios'
import apiUrl from '../apiConfig.js'

// download contacts csv 
export const getContactsCSV = (user) => {
  return axios.get(apiUrl + '/contacts-csv-download', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  

// upload csv