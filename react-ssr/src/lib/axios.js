import axios from 'axios'
import { BASE_URL } from '../config'


export const clientAxios = axios.create({
  baseURL: '/proxy'
})

export const serverAxios = axios.create({
  baseURL: BASE_URL
})