const errorHandler = (error, req, res) => {
  console.error(error)
  return res.status(500).send({
    message: 'Internal server error'
  })
}

module.exports = errorHandler
