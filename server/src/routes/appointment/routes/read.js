const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const appointmentData = await queryRunner('SELECT * FROM Appointment')
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  let patientData = []
  let pharmacistData = []
  appointmentData.forEach(app => {
    patientData.push(
      queryRunner('SELECT name from Patient WHERE id = ?', [app.patient_id])
        .then(data => data[0])  
        .catch((err) => {
          console.log(err)
          res.sendStatus(500)
        })
    )

    pharmacistData.push(
      queryRunner('SELECT name from Pharmacist WHERE id = ?', [app.pharmacist_id])
        .then(data => data[0])  
        .catch((err) => {
          console.log(err)
          res.sendStatus(500)
        })
    )
  })

  patientData = await Promise.all(patientData)
  pharmacistData = await Promise.all(pharmacistData)

  const payload = appointmentData.map((app, index) => {
    return ({
      ...app,
      patient_name: patientData[index].name,
      pharmacist_name: pharmacistData[index].name
    })
  })


  res.send(payload)
  
}