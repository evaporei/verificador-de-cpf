const blacklist = [
  {
    cpf: '53842707053'
  },
  {
    cpf: '33385445027'
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    const options = {}

    return queryInterface.bulkInsert('CPFBlacklist', blacklist, options)
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    const cpfs = blacklist.map(listItem => listItem.cpf)
    const allCpfsQuery = { cpf: { [Op.in]: cpfs } }
    const options = {}

    return queryInterface.bulkDelete('CPFBlacklist', allCpfsQuery, options)
  }
}
