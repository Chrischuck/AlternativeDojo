const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const pharmacistData = req.body

  await queryRunner('INSERT INTO Pharmacist SET ?', pharmacistData)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}