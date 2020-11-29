import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return(
    request.then((response) => {
      console.log("Successfully retrieved persons from server :", response.data)
      return(response.data)
    })
  )
}

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}


export default {
  getAll: getAll,
  create: create
}