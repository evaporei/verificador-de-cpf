module.exports = (sequelize, DataTypes) => {
  const CPFBlacklist = sequelize.define('CPFBlacklist', {
    cpf: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    tableName: 'CPFBlacklist',
    freezeTableName: true
  })

  return CPFBlacklist
}
