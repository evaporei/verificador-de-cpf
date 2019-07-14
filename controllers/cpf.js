const cpf = (req, res) => {
  return res.status(200).send({
    cpf: '53842707053',
    blacklisted: true
  })
}

module.exports = cpf
