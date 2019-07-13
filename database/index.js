const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const databaseConfigurations = require('../configuration/database.json')

const environment = process.env.NODE_ENV || 'development'
const configuration = databaseConfigurations[environment]
const { database, username, password } = configuration

const sequelize = new Sequelize(database, username, password, configuration)
const db = {}

const modelsPath = path.resolve(__dirname, './models')

fs.readdirSync(modelsPath)
  .forEach(file => {
    const modelPath = path.join(modelsPath, file)
    const model = sequelize['import'](modelPath)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
db.Op = Sequelize.Op

module.exports = db
