const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const prescriptions = await queryRunner('SELECT * FROM Prescription')
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  const prescriptionItemsPromises = prescriptions.map(prescription => {
    return queryRunner('SELECT * FROM PrescriptionItem WHERE prescription_id = ?', [prescription.id])
      .catch((err) => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  const prescriptionItems = await Promise.all(prescriptionItemsPromises)

  const inventory = await queryRunner('SELECT * FROM Medicine')
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  const newDataList = prescriptionItems.map(itemsList => (
    itemsList.map(item => {
      const inItem = inventory.filter(z => z.id === item.medicine_id)
      return {
        ...item,
        price: inItem[0].price,
        medicine_name: inItem[0].name
      }
    })
  ))



  console.log(newDataList)


  
  res.sendStatus(200)


}