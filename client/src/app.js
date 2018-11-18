import React from 'react'

import Siderbar from './components/sidebar'
import Header from './components/header'
import Modal from './components/modal'

import Dashboard from './routes/dashboard'
import Patients from './routes/patients'
import Employees from './routes/employees'
import Transactions from './routes/transactions'
import Prescriptions from './routes/prescriptions'
import Inventory from './routes/inventory'

import Appointments from './routes/appointments'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalType: null,
      page: 'EMPLOYEES',
      paymentData: {} // pass closures in 
    }
  }

  toggleModal = type => {
    this.setState({ modalType: type })
  }

  changePage = page => {
    this.setState({ page })
  }

  updatePaymentData = (data) => {
    this.setState({ paymentData: data })
  }

  renderPage = () => {
    const { page } = this.state

    switch (page) {
      case 'DASHBOARD':
        return <Dashboard />
      case 'PATIENTS':
        return <Patients />
      case 'EMPLOYEES':
        return <Employees />
      case 'TRANSACTIONS':
        return <Transactions />
      case 'APPOINTMENTS':
        return <Appointments />
      case 'INVENTORY':
        return <Inventory />
      case 'PRESCRIPTIONS':
        return <Prescriptions toggleModal={this.toggleModal} updatePaymentData={this.updatePaymentData} />
      default:
        return null
    }
  }

  render() {
    const { modalType, page, paymentData } = this.state
    return (
      <>
        {
         (modalType) &&
          <Modal
            modalType={modalType}
            toggleModal={this.toggleModal}
            paymentData={paymentData}
            updatePaymentData={this.updatePaymentData}
          />
        }
        

        <div className='react-parent'>
          <Siderbar
            toggleModal={this.toggleModal}
            page={page}
            changePage={this.changePage}
          />
          <div className='content-parent'>

            <Header />

            { this.renderPage() }

          </div>
          
        </div>
      </>
    )
  }
}