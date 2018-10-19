import axios from 'axios'

const ipstackUrl = ip =>
  `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_KEY}`

export const getComputerLocation = ip => {
  return new Promise((resolve, reject) => {
    axios
      .get(ipstackUrl(ip))
      .then(res => {
        resolve({
          city: res.data.city,
          code: res.data.region_code
        })
      })
      .catch(err => reject({ err }))
  })
}
