const express = require('express')

const { queryRunner } = require('../../sql')

const router = express.Router({ mergeParams: true })

router.route('/').get(async (req, res) => {
  const patientCount = await queryRunner('SELECT count(*) FROM Patient')
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const employeeCount = await queryRunner('SELECT count(*) FROM Pharmacist')
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
  
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const recentPatientCount = await queryRunner('SELECT count(*) FROM Patient WHERE created_at > ?', [d])
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const recentSalesCount = await queryRunner('SELECT count(*) FROM Transaction WHERE created_at > ?', [d])
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const inventory = await queryRunner('SELECT * FROM Medicine')
  .then(data => data)
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const transactionItems = await queryRunner('SELECT * FROM TransactionItem')
  .then(data => data)
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  let totalSales = 0
  transactionItems.forEach(item => {
    const currItemList = inventory.filter(i => i.id === item.medicine_id)
    const currItem = currItemList[0]

    totalSales += currItem.price * item.quantity
  })

  const cardPaymentCount = await queryRunner('SELECT count(*) FROM Transaction WHERE payment_type = ?', ['card'])
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  const cashPaymentCount = await queryRunner('SELECT count(*) FROM Transaction WHERE payment_type = ?', ['cash'])
  .then(data => data[0]['count(*)'])
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })

  paymentData = {
    cardPercentage: cardPaymentCount /(cashPaymentCount + cardPaymentCount),
    cashPercentage: cashPaymentCount /(cashPaymentCount + cardPaymentCount)
  }

  const topSalesMap = {}
  transactionItems.forEach(item => {
    const currItemList = inventory.filter(i => i.id === item.medicine_id)
    const currItem = currItemList[0]
    if (topSalesMap[currItem.id]) {
      topSalesMap[currItem.id].quantity += item.quantity
    } else {
      topSalesMap[currItem.id] = {
        quantity: item.quantity,
        name: currItem.name
      }
    }
    totalSales += currItem.price * item.quantity
  })
  const topSalesList = Object.values(topSalesMap).sort((a, b) => a.quantity < b.quantity)

  res.send({
    topSalesList,
    paymentData,
    totalSales,
    inventory,
    patientCount,
    recentPatientCount,
    employeeCount,
    recentSalesCount
  })


})

module.exports = router