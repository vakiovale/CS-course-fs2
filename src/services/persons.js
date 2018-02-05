import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(url)
}

const create = (person) => {
  return axios.post(url, person)
}

const remove = (id) => {
  return axios.delete(url + "/" + id)
}

export default { getAll, create, remove }