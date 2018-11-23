import React from 'react'
import moment from 'moment'
import { Label, TextInput, Combobox } from 'evergreen-ui'

import { monthList, generateDayList, yearList } from '../../../utils/dates'


export default class extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  savePatient = async payload => {
    await fetch('http://localhost:3000/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify(payload)
    })
    if (this.props.page === 'PATIENTS') {
      this.props.metadata.refetch()
    }
    this.props.closeModal()
  }

  createPatient = () => {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      month, day, year,
    } = this.state

    const date_of_birth = moment(`${year} ${month} ${day}`).format("YYYY-MM-DD")

    const payload = {
      name: `${first_name} ${last_name}`,
      phone_number,
      email,
      date_of_birth
    }
    this.savePatient(payload)
  }


  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <h1 style={{margin: '0px'}}>New Patient</h1>
        <hr style={{color: 'black', width: '100%', margin:'5px 0px 10px 0px', border: 0, borderTop: '1px solid #ccc'}} />

          <div style={{display: 'flex', marginBottom: '10px'}}>
            <div style={{flex: 1, marginRight: '5px'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                First Name
              </Label>
              <TextInput onChange={(e) => this.setState({ first_name: event.target.value })} placeholder="John" height={36} name={36} id={36} />
            </div>
            <div style={{flex: 1,  marginLeft: '5px'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                Last Name
              </Label>
              <TextInput onChange={(e) => this.setState({ last_name: event.target.value })} placeholder="Adams" height={36} name={36} id={36} />
            </div>
          </div>

          <div style={{marginBottom: '10px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Date of Birth
            </Label>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{width: '200px'}}>
                <Combobox
                  openOnFocus
                  width={200}
                  items={monthList}
                  placeholder="Month"
                  onChange={(selected) => this.setState({ month: selected })}
                />
              </div>
              <div style={{width: '150px'}}>
                <Combobox
                  openOnFocus
                  width={150}
                  items={generateDayList()}
                  placeholder="Day"
                  onChange={(selected) => this.setState({ day: selected })}
                />
              </div>
              <div style={{width: '200px'}}>
                <Combobox
                  openOnFocus
                  width={200}
                  items={yearList}
                  placeholder="Year"
                  onChange={(selected) => this.setState({ year: selected })}
                />
              </div>
            </div>
          </div>

          <div style={{marginBottom: '10px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Email
            </Label>
            <TextInput onChange={(e) => this.setState({ email: event.target.value })} placeholder="JohnAdams@whitehouse.gov" width='100%' height={36} name={36} id={36} />
          </div>

          <div style={{marginBottom: '10px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Telephone Number
            </Label>
            <TextInput onChange={(e) => this.setState({ phone_number: event.target.value })} placeholder="202-456-1111" type='tel' width='100%' height={36} name={36} id={36} />
          </div>


        <a onClick={this.createPatient} className='button' style={{margin: '20px 0px'}}>Create Patient</a>

      </div>
    )
  }
}