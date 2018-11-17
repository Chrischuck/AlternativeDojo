const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { initDB } = require('./sql')

const {
  appointmentRouter,
  patientRouter
} = require('./routes')

initDB()

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.use('/appointment', appointmentRouter)
app.use('/patient', patientRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
