import React from 'react'
import { Text, TableCell, Table, TableHead, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui'

import RegularRow from './components/regularRow'
import EditRow from './components/editRow'

export default class Patients extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      patients: [],
      filter: '',
      editing: ''
    }
  }

  componentDidMount() {
    this.props.updateMetadata({ refetch: this.fetchData })
    this.fetchData()
  }

  componentWillUnmount() {
    this.props.updateMetadata({})
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

  fetchData = async () => {
    const patients = await fetch('http://localhost:3000/patient')
      .then(data => data.json())

    this.setState({ patients: patients.data || [] })
  }

  saveProfile = async payload => {
    await fetch('http://localhost:3000/patient/update', {
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
    const { patients } = this.state
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flex: 1, flexDirection: 'column'}} >
          <h1 style={{ margin: '0px', marginBottom: '10px', fontSize: '45px'}}>Patients</h1>
          <div style={{ border: '1px solid #ccc', flex: 1 }}>

            <Table>
              <TableHead>
                  <SearchTableHeaderCell onChange={this.setFilter} />
                  <TextTableHeaderCell textAlign="center">
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
                  <TableCell className='edit-cell' >
                    <Text fontWeight={500} size={300} >
                      Edit
                    </Text>
                  </TableCell>
              </TableHead>

              <TableBody height={740}>
                {
                  patients.filter(this.filterFunc).map(profile => this.state.editing === profile.id ?
                    <EditRow setEditableRow={this.setEditableRow} profile={profile} saveProfile={this.saveProfile} /> :
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