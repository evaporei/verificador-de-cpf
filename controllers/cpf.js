const { CPFBlacklist } = require('../database')
const { status } = require('../services')

const add = async (req, res) => {
  const { cpf } = req.body
  const createdCpf = await CPFBlacklist.create({ cpf })

  return res.status(200).send({
    cpf: createdCpf.cpf,
    blacklisted: true
  })
}

const search = async (req, res) => {
  const { cpf } = req.query

  const foundCpf = await CPFBlacklist.findOne({
    where: { cpf },
    attributes: ['cpf'],
    raw: true
  })

  const blacklisted = !!foundCpf

  status.incrementSearchAmount()

  return res.status(200).send({
    cpf,
    blacklisted
  })
}

const remove = async (req, res) => {
  const { cpf } = req.body

  await CPFBlacklist.destroy({
    where: { cpf },
    raw: true
  })

  return res.status(200).send({
    cpf,
    blacklisted: false
  })
}

module.exports = {
  add,
  search,
  remove
}
