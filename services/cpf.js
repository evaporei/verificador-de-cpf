const { CPFBlacklist } = require('../database')
const { incrementSearchAmount } = require('./status')

const findByCpf = async (cpf) => {
  const foundCpf = await CPFBlacklist.findOne({
    where: { cpf },
    attributes: ['cpf'],
    raw: true
  })

  incrementSearchAmount()

  const blacklisted = !!foundCpf

  return { cpf, blacklisted }
}

const addCpfToBlacklist = async (cpf) => {
  const createdCpf = await CPFBlacklist.create({ cpf })

  return {
    cpf: createdCpf.cpf,
    blacklisted: true
  }
}

const removeCpfFromBlacklist = async (cpf) => {
  await CPFBlacklist.destroy({
    where: { cpf },
    raw: true
  })

  return { cpf, blacklisted: false }
}

module.exports = {
  findByCpf,
  addCpfToBlacklist,
  removeCpfFromBlacklist
}
