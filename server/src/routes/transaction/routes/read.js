const { queryRunner } = require('../../../sql')

module.exports = async (req, res) => {

    const transactions = await queryRunner('SELECT * FROM Transaction')
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  const transactionItemsPromises = transactions.map(transaction => {
    return queryRunner('SELECT * FROM TransactionItem WHERE Transaction_id = ?', [transaction.id])
      .catch((err) => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  const transactionItems = await Promise.all(transactionItemsPromises)

  const inventory = await queryRunner('SELECT * FROM Medicine')
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })

  const newDataList = transactionItems.map(itemsList => (
    itemsList.map(item => {
      const inItem = inventory.filter(z => z.id === item.medicine_id)
      return {
        ...item,
        price: inItem[0].price * item.quantity,
        medicine_name: inItem[0].name,
        
      }
    })
  ))

  const patientPromises =  transactions.map(transaction => {
    return queryRunner('SELECT name FROM Patient WHERE id = ?', [transaction.patient_id])
      .then( data => data[0])
      .catch((err) => {
        console.log(err)
        res.sendStatus(500)
      })
  })

  const patients = await Promise.all(patientPromises)

  const payload = transactions.map((p, index) => {
    let total = 0

    newDataList[index].forEach(t => total += t.price)

    return {
      ...p,
      patient: patients[index].name,
      medicines: newDataList[index],
      total
    }
  })

  res.send(payload)
}