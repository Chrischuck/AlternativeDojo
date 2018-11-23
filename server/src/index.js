const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { initDB } = require('./sql')

const {
  appointmentRouter,
  patientRouter,
  inventoryRouter,
  pharmacistRouter,
  transactionRouter,
  prescriptionRouter
} = require('./routes')

//initDB()

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.use('/appointment', appointmentRouter)
app.use('/patient', patientRouter)
app.use('/inventory', inventoryRouter)
app.use('/pharmacist', pharmacistRouter)
app.use('/transaction', transactionRouter)
app.use('/prescription', prescriptionRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
