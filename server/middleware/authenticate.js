// import express from 'express';
import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
  const header = req.headers.authorization
  let token = { key: null }

  if (header) {
    token = { key: header.split(' ')[1] }
  }

  if (token.key) {
    jwt.verify(token.key, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        next()
      } else {
        req.currentUser = decoded
        next()
      }
    })
  } else {
    next()
  }
}

export default authenticate
