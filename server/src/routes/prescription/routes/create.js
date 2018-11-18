const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const prescriptionData = req.body

  await queryRunner('INSERT INTO Prescription SET ?', prescriptionData)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}