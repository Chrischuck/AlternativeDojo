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
      page: 'PRESCRIPTIONS',
      metadata: {} // pass closures in 
    }
  }

  toggleModal = type => {
    this.setState({ modalType: type })
  }

  changePage = page => {
    this.setState({ page })
  }

  updateMetadata = (data) => {
    this.setState({ metadata: data })
  }

  renderPage = () => {
    const { page } = this.state

    switch (page) {
      case 'DASHBOARD':
        return <Dashboard updateMetadata={this.updateMetadata} />
      case 'PATIENTS':
        return <Patients updateMetadata={this.updateMetadata} />
      case 'EMPLOYEES':
        return <Employees updateMetadata={this.updateMetadata} />
      case 'TRANSACTIONS':
        return <Transactions updateMetadata={this.updateMetadata} />
      case 'APPOINTMENTS':
        return <Appointments updateMetadata={this.updateMetadata} />
      case 'INVENTORY':
        return <Inventory updateMetadata={this.updateMetadata} />
      case 'PRESCRIPTIONS':
        return <Prescriptions toggleModal={this.toggleModal} updateMetadata={this.updateMetadata} />
      default:
        return null
    }
  }

  render() {
    const { modalType, page, metadata } = this.state
    return (
      <>
        {
         (modalType) &&
          <Modal
            modalType={modalType}
            toggleModal={this.toggleModal}
            metadata={metadata}
            updateMetadata={this.updateMetadata}
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