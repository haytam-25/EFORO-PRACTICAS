import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/incidencias'

export const getIncidencias = () => axios.get(BASE_URL)

export const crearIncidencia = (incidencia) => axios.post(BASE_URL, incidencia)

export const editarIncidencia = (id, incidencia) => axios.put(`${BASE_URL}/${id}`, incidencia)

export const eliminarIncidencia = (id) => axios.delete(`${BASE_URL}/${id}`)