const status = (req, res) => {
  return res.status(200).send({
    uptime: new Date().toISOString(),
    amount: {
      blacklist: 10,
      searches: 8
    }
  })
}

module.exports = status
