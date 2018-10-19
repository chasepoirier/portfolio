import jwt from 'jsonwebtoken'

const generateJWT = user =>
  jwt.sign(
    {
      email: user.email
    },
    process.env.JWT_SECRET
  )

const toAuthJSON = user => ({
  uid: user.uid,
  email: user.email,
  token: generateJWT(user)
})

export default toAuthJSON
