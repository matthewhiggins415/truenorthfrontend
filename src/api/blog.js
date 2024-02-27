import axios from 'axios'
import apiUrl from '../apiConfig.js'

// create a blog
export const createBlog = (user, data) => {
  return axios.post(apiUrl + '/blog', {
    blog: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  
// get a blog 
export const getBlog = (user, id) => {
  return axios.get(apiUrl + `/blog/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get all blogs
export const getBlogs = (user) => {
  return axios.get(apiUrl + '/blogs', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update a blog
export const updateBlog = (data, user, id) => {
  return axios.put(apiUrl + `/updateblog/${id}`, {
    blog: data
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// publish blog
export const publishBlog = (user, id) => {
  let data
  return axios.put(apiUrl + `/blog/publish/${id}`, data, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// unpublish blog
export const unpublishBlog = (user, id) => {
  let data
  return axios.put(apiUrl + `/blog/unpublish/${id}`, data, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a blog
export const deleteBlog = (user, id) => {
  return axios.delete(apiUrl + `/blog/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}