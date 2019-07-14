const { CPFBlacklist } = require('../database')

let searches = 0

const getServerUptime = () => Math.floor(process.uptime())

const getSearchesAmount = () => searches

const getBlacklistCount = async () => CPFBlacklist.count()

const incrementSearchAmount = () => { searches += 1 }

module.exports = {
  getServerUptime,
  getSearchesAmount,
  getBlacklistCount,
  incrementSearchAmount
}
