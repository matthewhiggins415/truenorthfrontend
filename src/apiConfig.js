let apiUrl

const apiUrls = {
  production: 'https://firesafebackend-3afcb49789a6.herokuapp.com',
  development: 'http://localhost:5000'
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl