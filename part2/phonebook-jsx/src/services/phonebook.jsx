import axios from 'axios'
const baseUrl = 'https://fullstackopen-34tj.onrender.com/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then(console.log("Person deleted"))
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove
}
