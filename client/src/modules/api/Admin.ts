import axios from 'axios'
import { apiBase } from 'config'

const AdminEndpoints = {
  getCurrentLocation: () =>
    axios.get(`${apiBase}/admin/current_location`).then(res => res.data),
  login: (credentials: { uname: string; password: string }) =>
    axios.post(`${apiBase}/admin/login`, credentials).then(res => res.data),
  verfiy: () => axios.get(`${apiBase}/admin/verify`).then(res => res.data)
}

export default AdminEndpoints
