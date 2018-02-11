import axios from 'axios'

const url = '/api/persons'

const getAll = () => {
  return axios.get(url)
}

const create = (person) => {
  return axios.post(url, person)
}

const remove = (id) => {
  return axios.delete(`${url}/${id}`)
}

const update = (id, person) => {
  return axios.put(`${url}/${id}`, person)
}

export default { getAll, create, remove, update }
