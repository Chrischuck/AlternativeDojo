import React from 'react'

import { TextTableHeaderCell, TableBody, TableHead, Table, TableRow, TextTableCell } from 'evergreen-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.row = React.createRef();
  }
  render() {
    const { transaction, index, clicked, onRowClick } = this.props
    return (
      <>
        <TableRow key={index} isSelectable onClick={() => onRowClick(index)}>
          <TextTableCell>{transaction.patient}</TextTableCell>
          <TextTableCell textAlign="center">{transaction.id}</TextTableCell>
          <TextTableCell textAlign="center">{transaction.patientId}</TextTableCell>
          <TextTableCell textAlign="center">{transaction.pharmacistId}</TextTableCell>
          <TextTableCell textAlign="center">{transaction.paymentMethod}</TextTableCell>
          <TextTableCell textAlign="center">{transaction.total}</TextTableCell>
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
                    transaction.medicines.map(medicine => (
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