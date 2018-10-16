import express from 'express'
import axios from 'axios'

const router = express.Router()

/* GET home page. */
router.get('/get_location', (req, res) => {
  getLocation().then(location => res.json({ location }))
})

router.post('/set_location', (req, res) => {
  if (req.currentUser) {
    console.log('hre')
    getComputerLocation(req.body.ip).then(place => {
      if (place.city) {
        console.log(place)
        setLocation(place).then(location => res.json({ location }))
      } else {
        getLocation().then(location => res.json({ location }))
      }
    })
  } else {
    getLocation().then(location => res.json({ location }))
  }
})

const ipstackUrl = ip =>
  `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_KEY}`

const getComputerLocation = ip => {
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

const getLocation = () => {
  return new Promise((resolve, reject) => {
    resolve({ city: 'Rochester', code: 'NY' })
  })
}

const setLocation = location => {
  return new Promise((resolve, reject) => {})
}

export default router
