import axios from 'axios'

export const getAll = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return response.data
}

export const getById = async id => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  return response.data
}
