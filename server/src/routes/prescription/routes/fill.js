const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {
  const { id } = req.body

  const inventory = await queryRunner('SELECT * FROM Medicine')
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const cart = await queryRunner('SELECT * FROM PrescriptionItem WHERE prescription_id = ?', [id])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const updateInventoryPromises = cart.map(item => {
    const inItem = inventory.filter(z => z.id === item.medicine_id)
    return (
        queryRunner(
          'UPDATE Medicine SET quantity = ? WHERE id = ?', 
          [inItem[0].quantity - item.quantity, item.medicine_id]
        )
        .catch((err) => {
          console.log(err)
          res.sendStatus(500)
        })
      )
    }
  )


  await Promise.all(updateInventoryPromises)

  await queryRunner('DELETE FROM PrescriptionItem WHERE prescription_id = ?', [id])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  await queryRunner('DELETE FROM Prescription WHERE id = ?', [id])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
  

  res.sendStatus(200)
}