const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const patientData = req.body

  await queryRunner('INSERT INTO Patient SET ?', patientData)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}