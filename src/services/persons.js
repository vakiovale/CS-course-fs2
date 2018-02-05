import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(url)
}

const create = (person) => {
  return axios.post(url, person)
}

export default { getAll, create }