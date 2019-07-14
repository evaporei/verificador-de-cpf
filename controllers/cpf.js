const {
  cpf: cpfService
} = require('../services')

const add = async (req, res) => {
  const { cpf } = res.locals
  const response = await cpfService.addCpfToBlacklist(cpf)
  return res.status(200).send(response)
}

const search = async (req, res) => {
  const { cpf } = res.locals
  const response = await cpfService.findByCpf(cpf)
  return res.status(200).send(response)
}

const remove = async (req, res) => {
  const { cpf } = res.locals
  const response = await cpfService.removeCpfFromBlacklist(cpf)
  return res.status(200).send(response)
}

module.exports = {
  add,
  search,
  remove
}
