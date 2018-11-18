const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  await queryRunner('SELECT * FROM Pharmacist')
    .then((data) => {
      res.send({ data })
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}