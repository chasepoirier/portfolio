import axios from 'axios'
import setAuthHeaders from './setAuthHeaders'

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    const token: any = localStorage.getItem('token')
    if (token) {
      setAuthHeaders(token)
      fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())
        .then(ip => {
          axios.post('/api/set_location', { ip: ip.ip }).then(res => {
            resolve(res.data.location)
          })
        })
    } else {
      axios.get('/api/get_location').then(res => {
        resolve(res.data.location)
      })
    }
  })
}

export default getCurrentLocation
