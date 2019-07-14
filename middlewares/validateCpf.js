const { validate, strip } = require('cpf-check')

const validateCpf = (req, res, next) => {
  const cpf = req.query.cpf || req.body.cpf
  const isValidCpf = validate(cpf)

  if (isValidCpf) {
    res.locals.cpf = strip(cpf)
    return next()
  }

  return res.status(400).send({
    message: 'Invalid CPF number'
  })
}

module.exports = validateCpf
