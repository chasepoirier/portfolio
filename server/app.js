import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import forceDomain from 'forcedomain'

import index from './routes/index'
import admin from './routes/admin'

dotenv.config()

const app = express()

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// if (process.env.NODE_ENV !== 'dev') {
//   app.use(function(req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(301, ['https://', req.get('Host'), req.url].join(''))
//     }
//     return next()
//   })
// app.use(forceDomain({
//     hostname: 'chasepoirier.com',
//     protocol: 'https'
// }));
// app.use(forceSsl);
// }

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(cookieParser())

app.use('/api', index)
app.use('/api/admin', admin)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  console.log(err)
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
