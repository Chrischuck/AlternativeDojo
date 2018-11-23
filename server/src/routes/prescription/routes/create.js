const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const { pharmacist_id, patient_id, cart } = req.body
  

  const prescriptionId = await queryRunner('INSERT INTO Prescription SET ?', { pharmacist_id, patient_id })
    .then(data => data.insertId)
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  const itemPromises = cart.map(item => (
    queryRunner('INSERT INTO PrescriptionItem SET ?', {
      medicine_id: item.id,
      prescription_id: prescriptionId,
      quantity: item.quantity
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
  ))

  await Promise.all(itemPromises)
  res.send(200)
}