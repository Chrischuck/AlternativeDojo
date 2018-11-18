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
      employees: [],
      filter: '',
      editing: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const employees = await fetch('http://localhost:3000/pharmacist')
      .then(data => data.json())

    this.setState({ employees: employees.data || [] })
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
    const { employees } = this.state
    console.log(employees)
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Employees</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }}>

            <Table>
              <TableHead>
              <TextTableHeaderCell textAlign="center">

                  <SearchTableHeaderCell onChange={this.setFilter} size={500}/></TextTableHeaderCell>

                  <TableCell className='small-cell' >
                    <Text fontWeight={500} size={300} >
                      ID
                    </Text>
                  </TableCell>

                  <TableCell className='small-cell' >
                    <Text fontWeight={500} size={300} >
                      Date of Birth
                    </Text>
                  </TableCell>
                  <TextTableHeaderCell textAlign="center">
                    Phone
                  </TextTableHeaderCell>
                  <TextTableHeaderCell textAlign="center">
                    Email
                  </TextTableHeaderCell>
                  
                  <TableCell className='small-cell' >
                    <Text fontWeight={500} size={300} >
                    Job Start Date
                    </Text>
                  </TableCell>


                  <TableCell className='small-cell' >
                    <Text fontWeight={500} size={300} >
                      Years of Exp
                    </Text>
                  </TableCell>

                  <TableCell className='small-cell' >
                    <Text fontWeight={500} size={300} >
                      Salary
                    </Text>
                  </TableCell>

                  <TableCell className='edit-cell' >
                    <Text fontWeight={500} size={300} >
                      Edit
                    </Text>
                  </TableCell>
              </TableHead>

              <TableBody height={740}>
                {
                  employees.length > 0 ?
                  employees.filter(this.filterFunc).map(profile => this.state.editing === profile.id ?
                    <EditRow setEditableRow={this.setEditableRow} profile={profile} /> :
                    <RegularRow setEditableRow={this.setEditableRow} profile={profile} />
                  ) :
                  [1,1,1,1].map((_, index) => (
                    <TableRow key={index} isSelectable>
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