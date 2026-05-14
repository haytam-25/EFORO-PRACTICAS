import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/auth'

export const loginApi = (email, password) =>
  axios.post(`${BASE_URL}/login`, { email, password })