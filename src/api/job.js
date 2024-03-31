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

// get all jobs of a contact
export const getJobs = (user, id) => {
  return axios.get(apiUrl + `/get-jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit a job

// delete a job 
