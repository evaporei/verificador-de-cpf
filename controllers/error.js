const errorHandler = (error, req, res, next) => {
  console.error(error)
  res.status(500).send()
}

module.exports = errorHandler
