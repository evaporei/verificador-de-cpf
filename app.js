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
app.use(express.static('static'))

app.get('/consulta', validateCpf, cpf)
app.post('/consulta', validateCpf, cpf)
app.delete('/consulta', validateCpf, cpf)

app.get('/status', status)

app.use(error)

app.listen(3000, () => {
  console.log('Server running on port 3000!')
})
