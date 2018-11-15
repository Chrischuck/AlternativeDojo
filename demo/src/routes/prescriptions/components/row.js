import React from 'react'

import { TableCell, Text, TextTableHeaderCell, TableBody, TableHead, Table, TableRow, TextTableCell } from 'evergreen-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.row = React.createRef();
  }

  fillPrescription = (event) => {
    event.stopPropagation();
    const { prescription } = this.props

    this.props.updatePaymentData({
      prescription,
      refetch: this.props.refetchData
    })
    this.props.toggleModal('PAYMENT')
  }


  deletePrescription = (event) => {
    event.stopPropagation();
    // ... refetch
  }
  render() {
    const { prescription, index, clicked, onRowClick } = this.props
    return (
      <>
        <TableRow key={index} isSelectable onClick={() => onRowClick(index)}>
          <TextTableCell>{prescription.patient}</TextTableCell>
          <TextTableCell textAlign="center">{prescription.id}</TextTableCell>
          <TextTableCell textAlign="center">{prescription.patientId}</TextTableCell>
          <TextTableCell textAlign="center">{prescription.pharmacistId}</TextTableCell>
          <TextTableCell textAlign="center">${prescription.total}</TextTableCell>
          <TableCell className='edit-cell' >
            <Text fontWeight={400} size={300} >
              <svg onClick={this.fillPrescription} height='21px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2ecc71" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
            </Text>
          </TableCell>
          <TableCell className='edit-cell' >
            <Text fontWeight={400} size={300} >
              <svg onClick={this.deletePrescription} height='21px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e74c3c" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>
            </Text>
          </TableCell>
        </TableRow>
          <div style={{backgroundColor: '#e5e9ea', transition: 'linear .25s', height: index === clicked ? (this.row.current ? (this.row.current.clientHeight + 14) + 'px' : '0px') : '0px', overflow: 'hidden'}}>
            <div style={{ margin: '7px' }} ref={this.row}>
              <Table>
                <TableHead>
                  <TextTableHeaderCell textAlign="center">
                    Medicine
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Quantity
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Price
                  </TextTableHeaderCell>
                </TableHead>

                <TableBody >
                  {
                    prescription.medicines.map(medicine => (
                      <TableRow className='medicine-transaction-row' key={medicine.name} >
                        <TextTableCell textAlign="center">{medicine.name}</TextTableCell>
                        <TextTableCell textAlign="center">{medicine.quantity}</TextTableCell>
                        <TextTableCell textAlign="center">${medicine.price}</TextTableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>

              </Table>
            </div>
          </div>
      </>
    )
  }
}