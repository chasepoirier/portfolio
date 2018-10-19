import express from 'express'
import { firebase } from '../firebase'
import toAuthJSON from '../utils/toAuthJSON'

const router = express.Router()

router.post('/login', (req, res) => {
  const { email, password } = req.body
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(ref => res.json({ user: toAuthJSON(ref.user) }))
    .catch(err => console.log(err))
})

export default router
