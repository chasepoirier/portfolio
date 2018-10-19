import axios from 'axios'
import { apiBase } from 'config'

const AdminEndpoints = {
  getCurrentLocation: (ip: string) =>
    axios
      .post(`${apiBase}/admin/current_location`, { ip })
      .then(res => res.data.location)
      .catch(err => err),
  login: (credentials: { email: string; password: string }) =>
    axios.post(`${apiBase}/admin/login`, credentials).then(res => res.data)
}

export default AdminEndpoints
