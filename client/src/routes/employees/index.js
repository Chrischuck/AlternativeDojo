import React from 'react'
import { Text, Table, TableCell, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow } from 'evergreen-ui'

import RegularRow from './components/regularRow'
import EditRow from './components/editRow'

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

  saveProfile = async payload => {
    await fetch('http://localhost:3000/pharmacist/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify(payload)
    })

    this.fetchData()
  }

  render() {
    const { employees } = this.state

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
                    <EditRow setEditableRow={this.setEditableRow} saveProfile={this.saveProfile} profile={profile} /> :
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