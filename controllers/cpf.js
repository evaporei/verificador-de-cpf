const cpf = (req, res, next) => {
  return res.status(200).send({
    status: 'FREE' // 'BLOCK'
  })
}

module.exports = cpf
