import React from 'react'
import { Text, TableCell, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'

import Row from './components/row'

export default class Transactions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      clicked: null,
      transactions: []
    }
    this.table = React.createRef();
  }

  componentDidMount() {
    this.props.updateMetadata({ refetch: this.fetchData })
    this.fetchData()
    document.addEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideMousedown, false)
  }

  fetchData = async () => {
    const transactions = await fetch('http://localhost:3000/transaction')
      .then(data => data.json())

    this.setState({ transactions: transactions || [] })
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
    const { clicked, transactions } = this.state
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
                    <Row transaction={transaction} index={index} clicked={clicked} onRowClick={this.onRowClick} />
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