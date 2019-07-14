module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CPFBlacklist', {
      cpf: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CPFBlacklist')
  }
}
