import axios from 'axios'
import apiUrl from '../apiConfig.js'

// create a contact
export const createContact = (data) => {
  return axios.post(apiUrl + '/contact', data)
}

// get all contacts
export const getContacts = (user) => {
  return axios.get(apiUrl + '/contacts', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get a single contact
export const getContact = (user, id) => {
  return axios.get(apiUrl + `/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  
// update a single contact
export const updateAContact = (data, user, id) => {
  return axios.put(apiUrl + `/updatecontact/${id}`, {
    contact: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  

// delete a single contact
export const destroyContact = (user, id) => {
  return axios.delete(apiUrl + `/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}


// search for contact
export const searchContacts = (input, searchType) => {
  return axios.post(apiUrl + `/contacts/search`, {
    searchValue: input, 
    searchType: searchType
  })
}