import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  timeout: 8000,
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
