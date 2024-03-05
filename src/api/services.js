import axios from 'axios'
import apiUrl from '../apiConfig.js'

// create a service 
export const createService = (user, data) => {
  return axios.post(apiUrl + '/service', {
      service: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
    
// get all services
export const getAllServices = () => {
  return axios.get(apiUrl + '/services')
}

// get a single service
export const getSingleService = (id) => {
  return axios.get(apiUrl + `/service/${id}`)
}

// update a service 
export const updateService = (id, user, data) => {
  return axios.put(apiUrl + `/updateservice/${id}`, {
    service: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a service
export const deleteService = (user, id) => {
  return axios.delete(apiUrl + `/service/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}