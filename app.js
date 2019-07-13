require('./database')

const express = require('express')
const bodyParser = require('body-parser')

const {
  cpf,
  errorHandler,
  status
} = require('./controllers')

const app = express()

app.use(bodyParser.json())
app.use(express.static('static'))

app.get('/consulta', cpf)
app.post('/consulta', cpf)
app.delete('/consulta', cpf)

app.get('/status', status)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server running on port 3000!')
})
