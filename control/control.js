let model = require('../model/database.js')

let getAll = (req, res, next) => {
  let data = model.findAll()
  res.status(200).json({ data })
}

module.exports = {
  getAll
}
