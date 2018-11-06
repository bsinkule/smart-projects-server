const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const engineers = require('./router/engineers') 
const projects = require('./router/projects') 
const port = process.env.PORT || 5000
const listener = () => console.log(`Listening on port ${port}`)

const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())

app.use('/engineers', engineers) 
app.use('/projects', projects) 

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
  .create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.to,
    body: req.body.body
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
});

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