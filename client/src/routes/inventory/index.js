import React from 'react'
import { Text, TableCell, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'

const transactions = [
  {
    id: 1,
    patient: 'John Cena',
    paymentMethod: 'card',
    total: 69,
    patientId: 23,
    pharmacistId: 12,
    medicines: [
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      },
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      }
    ]
  },
  {
    id: 2,
    patient: 'John Cena',
    paymentMethod: 'cash',
    total: 69,
    patientId: 23,
    pharmacistId: 12,
    medicines: [
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      },
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      }
    ]
  },
  {
    id: 3,
    patient: 'John Cena',
    paymentMethod: 'card',
    total: 69,
    patientId: 23,
    pharmacistId: 12,
    medicines: [
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      },
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      }
    ]
  },
  {
    id: 4,
    patient: 'John Cena',
    paymentMethod: 'card',
    total: 69,
    patientId: 23,
    pharmacistId: 12,
    medicines: [
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      },
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      }
    ]
  },
  {
    id: 5,
    patient: 'John Cena',
    paymentMethod: 'card',
    total: 69,
    patientId: 23,
    pharmacistId: 12,
    medicines: [
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      },
      {
        name: 'Purple Raine',
        quantity: 10,
        price: 69
      }
    ]
  },
]

export default class Transactions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      clicked: null
    }
    this.table = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  filterFunc = filtee => {
    const { filter } = this.state
    if (!filter) {
      return true
    }

    if (filtee.name.toLowerCase().includes(filter.toLowerCase())) {
      return true
    }
    return false
  }

  setFilter = value => {
    this.setState({ filter:value }) 
  }

  onRowClick = (index) => {
    this.setState((prevState) => ({ clicked: prevState.clicked === index ? null : index }))
  }

  handleOutsideMousedown = (event) => {
    if (!this.table.current.contains(event.target)) {
      this.setState(() => ({ clicked: null }))
    }
  }

  render() {
    const { clicked } = this.state
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Transactions</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }} ref={this.table}>

            <Table>
              <TableHead>
                  <SearchTableHeaderCell onChange={this.setFilter} />
                  <TextTableHeaderCell textAlign="center">
                    ID
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Patient ID
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Pharmacist ID
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Payment Method
                  </TextTableHeaderCell>

                  <TextTableHeaderCell textAlign="center">
                    Total Sale
                  </TextTableHeaderCell>
              </TableHead>

              <TableBody height={740}>
                {
                  transactions.map((transaction, index) => (
                    <TableRow key={index} isSelectable>
                      <TextTableCell>{transaction.patient}</TextTableCell>
                      <TextTableCell textAlign="center">{transaction.id}</TextTableCell>
                      <TextTableCell textAlign="center">{transaction.patientId}</TextTableCell>
                      <TextTableCell textAlign="center">{transaction.pharmacistId}</TextTableCell>
                      <TextTableCell textAlign="center">{transaction.paymentMethod}</TextTableCell>
                      <TextTableCell textAlign="center">{transaction.total}</TextTableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>


        </div>
      </div>
    )
  }
}