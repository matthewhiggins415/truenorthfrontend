import axios from 'axios';
import apiUrl from '../apiConfig.js';

// create company
export const createCompany = (user, data) => {
  return axios.post(apiUrl + `/create-company`, {
    company: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update company info 
export const updateCompany = (user, data, id) => {
  return axios.put(apiUrl + `/update-company/${id}`, {
    company: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get company 
export const getCompany = () => {
  return axios.get(apiUrl + '/company')
}