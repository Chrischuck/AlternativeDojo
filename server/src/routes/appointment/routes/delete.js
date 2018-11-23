const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const { id } = req.body
  
  await queryRunner('DELETE FROM Appointment WHERE id = ?', [id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}