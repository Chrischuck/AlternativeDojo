const express = require('express')

const connectionPool = require('./sql')

const app = express()
const port = 3000

initSQL()


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


async function initSQL() {
  await simpleQueryRunner('DROP TABLE IF EXISTS Medicine')

  const createMedicineTable = `
    CREATE TABLE IF NOT EXISTS Medicine (
      id int(11) AUTO_INCREMENT NOT NULL,
      strain varchar(20) NOT NULL,
      name varchar(20) NOT NULL,
      price DECIMAL(4,2) NOT NULL DEFAULT 8.00, 
      quantity int(5) NOT NULL DEFAULT 0,
      PRIMARY KEY (id)
    );
  `
  const createPharmacistTable = `
    CREATE TABLE IF NOT EXISTS Medicine (
      id int(11) AUTO_INCREMENT NOT NULL,
      name varchar(20) NOT NULL,
      date_of_birth date NOT NULL,
      phone_number varchar(20) NOT NULL,
      job_start_date date NOT NULL,
      years_of_exp int(2) NOT NULL,
      salary int(10) NOT NULL,
      PRIMARY KEY (id)
    );
  `

  const createPrescriptionTable = `
    CREATE TABLE IF NOT EXISTS Medicine (
      id int(11) AUTO_INCREMENT NOT NULL,
      created_at TIMESTAMP NOT NULL,
      patient_id int(11) NOT NULL,
      pharmacist_id int(11) NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (patient_id) REFERENCES Patient(id),
      FOREIGN KEY (pharmacist_id) REFERENCES Pharmacist(id)
    );
  `

  const createPrescriptionItemTable = `
    CREATE TABLE IF NOT EXISTS Medicine (
      id int(11) AUTO_INCREMENT NOT NULL,
      medicine_id int(11) NOT NULL,
      prescription_id int(11) NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (medicine_id) REFERENCES Medicine(id),
      FOREIGN KEY (prescription_id) REFERENCES Prescription(id)
    );
  `

  simpleQueryRunner(createMedicineTable)

}


function simpleQueryRunner(query) {
  return new Promise(function(resolve, reject) {
    connectionPool.query(query, (error, results, fields) => {
      if (error) {
        console.log(error)
        reject(error)
      }
      resolve(results)
    })
  })
}