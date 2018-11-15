import React from 'react'
import { TextInput, EditableCell, EditableCellField, Text, Label, Table, TableCell, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'

import RegularRow from './components/regularRow'
import EditRow from './components/editRow'

const profiles = [
  {
    id: 1,
    name: 'John Cena',
    dob: '10/10/10',
    phone: '650-494-4949',
    email: 'adfs@adf.com',
    jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'

  },
  {
    id: 2,
    name: 'Donald Trump',
    dob: '10/10/10',
    phone: '650-494-4949',
    email: 'adfs@adf.com',
    jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
  {
    id: 3,
    name: 'Scarlett Johanson',
        dob: '10/10/10',     phone: '650-494-4949',     email: 'adfs@adf.com',
        jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
  {
    id: 4,
    name: 'Nick cage',
        dob: '10/10/10',     phone: '650-494-4949',     email: 'adfs@adf.com',
        jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
  {
    id: 5,
    name: 'Megan Fox',
        dob: '10/10/10',     phone: '650-494-4949',     email: 'adfs@adf.com',
        jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
  {
    id: 6,
    name: 'Hillary Clinton',
        dob: '10/10/10',     phone: '650-494-4949',     email: 'adfs@adf.com',
        jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
  {
    id: 7,
    name: 'George Washington',
        dob: '10/10/10',     phone: '650-494-4949',     email: 'adfs@adf.com',
        jobStartDate: '10/10/10', yearsOfExp: 420, salary: '420,000'
  },
]

export default class Employees extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      editing: ''
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

  setEditableRow = id => {
    this.setState({ editing: id })
  }

  render() {
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Employees</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }}>

            <Table>
              <TableHead>
              <TextTableHeaderCell textAlign="center">

                  <SearchTableHeaderCell onChange={this.setFilter} size={500}/></TextTableHeaderCell>
                  <TextTableHeaderCell size={7000}textAlign="center">
                    ID
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Date of Birth
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Phone
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Email
                  </TextTableHeaderCell>
                  
                  <TextTableHeaderCell textAlign="center">
                    Job Start Date
                  </TextTableHeaderCell>

                  <TextTableHeaderCell textAlign="center">
                    Years of Exp
                  </TextTableHeaderCell>

                  <TextTableHeaderCell textAlign="center">
                    Salary
                  </TextTableHeaderCell>

                  <TableCell className='edit-cell' >
                    <Text fontWeight={500} size={300} >
                      Edit
                    </Text>
                  </TableCell>
              </TableHead>

              <TableBody height={740}>
                {
                  profiles.filter(this.filterFunc).map(profile => this.state.editing === profile.id ?
                    <EditRow setEditableRow={this.setEditableRow} profile={profile} /> :
                    <RegularRow setEditableRow={this.setEditableRow} profile={profile} />
                  )
                }
              </TableBody>
            </Table>
          </div>


        </div>
      </div>
    )
  }
}