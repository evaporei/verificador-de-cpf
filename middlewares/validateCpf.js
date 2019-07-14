const { isValid } = require('cpf')

const validateCpf = (req, res, next) => {
  const cpf = req.query.cpf || req.body.cpf

  if (isValid(cpf)) {
    return next()
  }

  return res.status(400).send({
    message: 'Invalid CPF number'
  })
}

module.exports = validateCpf
