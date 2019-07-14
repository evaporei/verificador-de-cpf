const cpf = require('./cpf')
const status = require('./status')
const wrapAsync = require('./wrapAsync')

module.exports = {
  cpf: {
    add: wrapAsync(cpf.add),
    search: wrapAsync(cpf.search),
    remove: wrapAsync(cpf.remove)
  },
  status: wrapAsync(status)
}
