const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const payload = req.body

  let updateStr = 'UPDATE Pharmacist SET '
  let params = []

  const keys = Object.keys(payload)
  if (keys.length < 2) {
    res.sendStatus(200)
    return
  }

  keys.forEach(key => {
    if (key !== 'id' || !payload[key]) {
      updateStr += `${key} = ?, `
      params.push(payload[key])
    }
  })
  updateStr = updateStr.slice(0, -2)

  updateStr += 'WHERE id = ?'
  params.push(payload.id)

  await queryRunner(updateStr, params)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

}