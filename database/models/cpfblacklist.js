module.exports = (sequelize, DataTypes) => {
  const CPFBlacklist = sequelize.define('CPFBlacklist', {
    cpf: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING,
    }
  }, {
    timestamps: true,
    tableName: 'CPFBlacklist',
    freezeTableName: true
  })

  return CPFBlacklist
}
