const mysql = require('mysql')

const {
  createMedicineTable,
  createPharmacistTable,
  createPatientTable,
  createPrescriptionTable,
  createPrescriptionItemTable,
  createTransactionTable,
  createTransactionItemTable,
  createAppointmentTable
} = require('./sqlTables')

const pool = mysql.createPool({
  connectionLimit : 4,
  host     : '172.20.0.1',
  user     : 'user',
  password : 'password',
  database : 'db',
  port: 3306
});

function queryRunner(query, params) {
  return new Promise(function(resolve, reject) {
    pool.query(query, params, (error, results, fields) => {
      if (error) {
        console.log(error)
        reject(error)
      }
      resolve(results)
    })
  })
}

async function initDB() {
  await queryRunner('SET FOREIGN_KEY_CHECKS=0')
  await queryRunner('DROP TABLE IF EXISTS Medicine')
  await queryRunner('DROP TABLE IF EXISTS Pharmacist')
  await queryRunner('DROP TABLE IF EXISTS Patient')
  await queryRunner('DROP TABLE IF EXISTS Prescription')
  await queryRunner('DROP TABLE IF EXISTS PrescriptionItem')
  await queryRunner('DROP TABLE IF EXISTS Transaction')
  await queryRunner('DROP TABLE IF EXISTS TransactionItem')
  await queryRunner('DROP TABLE IF EXISTS Appointment')
  await queryRunner('SET FOREIGN_KEY_CHECKS=1')

  await queryRunner(createMedicineTable)
  await queryRunner(createPharmacistTable)
  await queryRunner(createPatientTable)
  await queryRunner(createPrescriptionTable)
  await queryRunner(createPrescriptionItemTable)
  await queryRunner(createTransactionTable)
  await queryRunner(createTransactionItemTable)
  await queryRunner(createAppointmentTable)

  await queryRunner('ALTER TABLE Medicine AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE Pharmacist AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE Patient AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE Prescription AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE PrescriptionItem AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE Transaction AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE TransactionItem AUTO_INCREMENT=420')
  await queryRunner('ALTER TABLE Appointment AUTO_INCREMENT=420')
}


module.exports = {
  initDB,
  queryRunner
}