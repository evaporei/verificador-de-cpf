require('./database')

const express = require('express')
const bodyParser = require('body-parser')

const {
  cpf,
  status
} = require('./controllers')

const {
  error,
  validateCpf
} = require('./middlewares')

const app = express()

app.use(bodyParser.json())
app.use(express.static('./static/build'))

app.get('/v1/cpf', validateCpf, cpf.search)
app.post('/v1/cpf', validateCpf, cpf.add)
app.delete('/v1/cpf', validateCpf, cpf.remove)

app.get('/v1/status', status)

app.use(error)

module.exports = app
