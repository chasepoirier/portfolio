import { IPAddressAPI } from './types'

const getIPAddress = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then((ip: IPAddressAPI) => {
        resolve(ip)
      })
  })
}

export default getIPAddress
