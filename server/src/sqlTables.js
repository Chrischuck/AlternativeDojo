const createMedicineTable = `
CREATE TABLE IF NOT EXISTS Medicine (
  id int(11) AUTO_INCREMENT NOT NULL,
  strain varchar(20) NOT NULL,
  name varchar(60) NOT NULL,
  price DECIMAL(4,2) NOT NULL DEFAULT 8.00, 
  quantity int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);
`
const createPharmacistTable = `
CREATE TABLE IF NOT EXISTS Pharmacist (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(60) NOT NULL,
  date_of_birth date NOT NULL,
  phone_number varchar(20) NOT NULL UNIQUE,
  email varchar(60) NOT NULL UNIQUE,
  job_start_date date NOT NULL,
  years_of_exp int(2) NOT NULL,
  salary int(10) NOT NULL,
  PRIMARY KEY (id)
);
`
const createPatientTable = `
  CREATE TABLE IF NOT EXISTS Patient (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(60) NOT NULL,
  date_of_birth date NOT NULL,
  phone_number varchar(20) NOT NULL UNIQUE,
  email varchar(60) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
  );
`

const createPrescriptionTable = `
  CREATE TABLE IF NOT EXISTS Prescription (
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
  CREATE TABLE IF NOT EXISTS PrescriptionItem (
    id int(11) AUTO_INCREMENT NOT NULL,
    medicine_id int(11) NOT NULL,
    prescription_id int(11) NOT NULL,
    quantity int(5) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (medicine_id) REFERENCES Medicine(id),
    FOREIGN KEY (prescription_id) REFERENCES Prescription(id)
  );
`

const createTransactionTable = `
  CREATE TABLE IF NOT EXISTS Transaction (
    id int(11) AUTO_INCREMENT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    patient_id int(11) NOT NULL,
    pharmacist_id int(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id),
    FOREIGN KEY (pharmacist_id) REFERENCES Pharmacist(id)
  );
`

const createTransactionItemTable = `
CREATE TABLE IF NOT EXISTS TransactionItem (
  id int(11) AUTO_INCREMENT NOT NULL,
  medicine_id int(11) NOT NULL,
  prescription_id int(11) NOT NULL,
  quantity int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (medicine_id) REFERENCES Medicine(id),
  FOREIGN KEY (prescription_id) REFERENCES Prescription(id)
);
`

const createAppointmentTable = `
CREATE TABLE IF NOT EXISTS Appointment (
  id int(11) AUTO_INCREMENT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  patient_id int(11) NOT NULL,
  pharmacist_id int(11) NOT NULL,
  appointment_date DATETIME NOT NULL,
  notes TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (patient_id) REFERENCES Patient(id),
  FOREIGN KEY (pharmacist_id) REFERENCES Pharmacist(id)
);
`

module.exports = {
  createMedicineTable,
  createPharmacistTable,
  createPatientTable,
  createPrescriptionTable,
  createPrescriptionItemTable,
  createTransactionTable,
  createTransactionItemTable,
  createAppointmentTable
}