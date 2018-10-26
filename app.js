const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const engineers = require('./router/engineers') 
const projects = require('./router/projects') 
const port = process.env.PORT || 5000
const listener = () => console.log(`Listening on port ${port}`)

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/engineers', engineers) 
app.use('/projects', projects) 

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {}
  })
})

app.listen(port, listener)

module.exports = app