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

export default class Inventory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      filter: '',
      clicked: null
    }
    this.table = React.createRef();
  }

  componentDidMount() {
    this.fetchData()
    document.addEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  fetchData = async () => {
    const inventory = await fetch('http://localhost:3000/inventory')
      .then(data => data.json())

    this.setState({ inventory: inventory.data || [] })
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
    this.setState({ filter: value }) 
  }

  render() {
    const { inventory } = this.state
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Transactions</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }} ref={this.table}>

            <Table>
              <TableHead>
                  <SearchTableHeaderCell onChange={this.setFilter} />
                  <TextTableHeaderCell textAlign="center">
                    Strain
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Price
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Quantity
                  </TextTableHeaderCell>
              </TableHead>

              <TableBody height={740}>
                {
                  inventory.filter(this.filterFunc).map((inventory, index) => (
                    <TableRow key={index} isSelectable>
                      <TextTableCell>{inventory.name}</TextTableCell>
                      <TextTableCell textAlign="center">{inventory.strain}</TextTableCell>
                      <TextTableCell textAlign="center">${inventory.price}</TextTableCell>
                      <TextTableCell textAlign="center">x{inventory.quantity}</TextTableCell>
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