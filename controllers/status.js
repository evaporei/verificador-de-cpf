const { status: statusService } = require('../services')

const status = async (req, res) => {
  return res.status(200).send({
    uptime: statusService.getServerUptime(),
    amount: {
      blacklist: await statusService.getBlacklistCount(),
      searches: statusService.getSearchesAmount()
    }
  })
}

module.exports = status
