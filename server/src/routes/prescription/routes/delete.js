const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const { id } = req.body

  await queryRunner('DELETE FROM PrescriptionItem WHERE prescription_id = ?', [id])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
  
  await queryRunner('DELETE FROM Prescription WHERE id = ?', [id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}