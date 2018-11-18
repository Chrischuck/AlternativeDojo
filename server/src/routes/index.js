const appointmentRouter = require('./appointment')
const patientRouter = require('./patient')
const inventoryRouter = require('./inventory')
const pharmacistRouter = require('./pharmacist')
const transactionRouter = require('./transaction')
const prescriptionRouter = require('./prescription')

module.exports = {
  appointmentRouter,
  patientRouter,
  inventoryRouter,
  pharmacistRouter,
  transactionRouter,
  prescriptionRouter
}