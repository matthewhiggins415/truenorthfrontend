import axios from 'axios';
import apiUrl from '../apiConfig.js';

// create a job
export const createJob = (user, data) => {
  return axios.post(apiUrl + `/create-job`, {
    job: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get a job
export const getJob = (user, id) => {
  return axios.get(apiUrl + `/get-job/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get all jobs of a contact
export const getJobs = (user, id) => {
  return axios.get(apiUrl + `/get-jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update a single job
export const updateAJob = (data, user, id) => {
  return axios.put(apiUrl + `/update-job/${id}`, {
    job: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  

// delete a single job
export const destroyJob = (user, id) => {
  return axios.delete(apiUrl + `/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
