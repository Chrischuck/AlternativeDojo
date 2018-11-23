const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const appointmentData = req.body
  console.log(appointmentData)
  await queryRunner('INSERT INTO Appointment SET ?', appointmentData)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}