import React from 'react'
import { Text, TableCell, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'

export default class Appointments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      appointments: [],
      filter: '',
    }
  }

  componentDidMount() {
    this.props.updateMetadata({ refetch: this.fetchData })
    this.fetchData()
  }

  componentWillUnmount() {
    this.props.updateMetadata({})
  }

  fetchData = async () => {
    const appointments = await fetch('http://localhost:3000/appointment')
      .then(data => data.json())

      this.setState({ appointments: appointments || [] })
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

  delete = async (id) => {
    await fetch('http://localhost:3000/appointment/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify({ id })
    })
    this.fetchData()
  }
 
  render() {
    const { appointments } = this.state
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Appointments</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }}>

            <Table>
              <TableHead>
                  <SearchTableHeaderCell onChange={this.setFilter} />
                  <TextTableHeaderCell textAlign="center">
                    Patient ID
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Pharmacist
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Date/Time
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Notes
                  </TextTableHeaderCell>
                  <TableCell className='edit-cell-2' >
                    <Text fontWeight={500} size={300} >
                      Check in
                    </Text>
                  </TableCell>
                  <TableCell className='edit-cell' >
                    <Text fontWeight={500} size={300} >
                      Delete
                    </Text>
                  </TableCell>
              </TableHead>

              <TableBody height={740}>
                {
                  appointments.map((appointment, index)=> (
                    <TableRow key={index} isSelectable>
                      <TextTableCell>{appointment.patient_name}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.patient_id}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.pharmacist_name}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.appointment_date}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.notes}</TextTableCell>
                      <TableCell className='edit-cell-2' >
                        <Text fontWeight={400} size={300} >
                          <svg onClick={() => this.delete(appointment.id)} style={{cursor: 'pointer'}} height='21px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2ecc71" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                        </Text>
                      </TableCell>
                      <TableCell className='edit-cell' >
                        <Text fontWeight={400} size={300} >
                          <svg onClick={() => this.delete(appointment.id)} style={{cursor: 'pointer'}} height='21px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e74c3c" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>
                        </Text>
                      </TableCell>
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