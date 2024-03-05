import axios from 'axios'
import apiUrl from '../apiConfig.js'

// create a visitor
export const createVisitor = () => {
  return axios.post(apiUrl + '/visitor')
}

// get visitors for the day
export const getVisitorsDay = () => {
  return axios.get(apiUrl + '/visitors/today')
}

// get visitors for the week
export const getVisitorsWeek = () => {
  return axios.get(apiUrl + '/visitors/this-week')
}

// get visitors for the month
export const getVisitorsMonth = () => {
  return axios.get(apiUrl + '/visitors/this-month')
}

// get visitors for the quarter
export const getVisitorsQuarter = () => {
  return axios.get(apiUrl + '/visitors/past-three-months')
}

// get visitors for the year
export const getVisitorsYear = () => {
  return axios.get(apiUrl + '/visitors/this-year')
}