import React from 'react'
import { Text, TableCell, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'


const appointments = [
  {
    id: 1,
    patient: 'John Cena',
    patientId: 23,
    pharmacist: 'Donald Trump',
    date: 'March 3, 2019',
    time: '9:00 AM'
  },
  {
    id: 2,
    patient: 'John Cena',
    patientId: 23,
    pharmacist: 'Donald Trump',
    date: 'March 3, 2019',
    time: '9:00 AM'
  },
  {
    id: 3,
    patient: 'John Cena',
    patientId: 23,
    pharmacist: 'Donald Trump',
    date: 'March 3, 2019',
    time: '9:00 AM'
  },
  {
    id: 4,
    patient: 'John Cena',
    patientId: 23,
    pharmacist: 'Donald Trump',
    date: 'March 3, 2019',
    time: '9:00 AM'
  },
]

export default class Appointments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
    }
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

  render() {
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
                    Date
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Time
                  </TextTableHeaderCell>
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
                      <TextTableCell>{appointment.patient}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.patientId}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.pharmacist}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.date}</TextTableCell>
                      <TextTableCell textAlign="center">{appointment.time}</TextTableCell>
                      <TableCell className='edit-cell' >
                        <Text fontWeight={400} size={300} >
                          <svg onClick={() => console.log('delete')} height='21px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e74c3c" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>
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