import express from 'express'
import { firebase } from '../firebase'
import toAuthJSON from '../utils/toAuthJSON'
import { getComputerLocation } from '../apis/location'
import authenticate from '../middleware/authenticate'
import { db } from '../firebase'

const router = express.Router()

router.post('/login', (req, res) => {
  const { email, password } = req.body
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(ref => res.json({ user: toAuthJSON(ref.user) }))
    .catch(err => console.log(err))
})

/* GET home page. */
router.get('/get_location', (req, res) => {
  getLocation().then(location => res.json({ location }))
})

router.post('/current_location', authenticate, async (req, res) => {
  if (req.currentUser) {
    const newLocation = await getComputerLocation(req.body.ip)
    const location = await setLocation(newLocation)
    res.json({ location })
  } else {
    const location = await getLocation()
    res.json({ location })
  }
})

const getLocation = () => {
  return new Promise(async (resolve, reject) => {
    const locations = await db
      .collection('locations')
      .orderBy('timestamp')
      .get()
      .then(refs => {
        const places = []
        refs.forEach(snap => places.push(snap.data()))
        return places
      })
    resolve({ city: locations[0].city, code: locations[0].code })
  })
}

const setLocation = location => {
  return new Promise((resolve, reject) => {
    db.collection('locations')
      .doc(createID(location))
      .set({ ...location, timestamp: Date.now() })
      .then(ref => resolve({ ...location }))
      .catch(() => getLocation().then(location => resolve({ ...location })))
  })
}

const createID = location =>
  `${location.city.toLowerCase()}${location.code.toLowerCase()}`

export default router
