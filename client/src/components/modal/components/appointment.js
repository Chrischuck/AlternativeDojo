import React from 'react'
import moment from 'moment'
import { Label, TextInput, Combobox, Textarea } from 'evergreen-ui'


import { monthList, generateDayList, hourList, minuteList, currentYearList } from '../../../utils/dates'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  saveAppointment = async payload => {
    await fetch('http://localhost:3000/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify(payload)
    })
    this.props.metadata.refetch()
    this.props.closeModal()
  }

  createAppointment = () => {
    const {
      pharmacist_id,
      patient_id,
      month, day, year, hour, min,
      notes
    } = this.state
    const appointment_date = moment(`${year} ${month} ${day} ${hour}:${min}:00`).format("YYYY-MM-DD HH:mm:ss")

    const payload = {
      pharmacist_id,
      patient_id,
      notes,
      appointment_date
    }
    this.saveAppointment(payload)
  }


  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <h1 style={{margin: '0px'}}>New Appointment</h1>
        <hr style={{color: 'black', width: '100%', margin:'5px 0px 10px 0px', border: 0, borderTop: '1px solid #ccc'}} />
        
        <div style={{display: 'flex', marginBottom: '10px'}}>
          <div style={{flex: 1, marginRight: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Pharmacist ID
            </Label>
            <TextInput placeholder="9235234" onChange={(e) => this.setState({ pharmacist_id: event.target.value })} height={36} name={36} id={36} />
          </div>
          <div style={{flex: 1,  marginLeft: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Patient ID
            </Label>
            <TextInput placeholder="7621349" onChange={(e) => this.setState({ patient_id: event.target.value })} height={36} name={36} id={36} />
          </div>
        </div>

        <div style={{marginBottom: '10px'}}>
          <Label htmlFor={36} size={400} display="block" marginBottom={4}>
            Appointment Date
          </Label>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '180px'}}>
              <Combobox
                openOnFocus
                width={180}
                items={monthList}
                placeholder="Month"
                onChange={(selected) => this.setState({ month: selected })}
              />
            </div>
            <div style={{width: '80px'}}>
              <Combobox
                openOnFocus
                width={80}
                items={generateDayList()}
                placeholder="Day"
                onChange={(selected) => this.setState({ day: selected })}
              />
            </div>
            <div style={{width: '120px'}}>
              <Combobox
                openOnFocus
                width={120}
                items={currentYearList}
                placeholder="Year"
                onChange={(selected) => this.setState({ year: selected })}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{width: '70px'}}>
                <Combobox
                  openOnFocus
                  width={70}
                  items={hourList}
                  placeholder="Hr"
                  onChange={(selected) => this.setState({ hour: selected })}
                />
              </div>
              <span style={{margin: 'auto 3px'}}>:</span>
              <div style={{width: '70px'}}>
                <Combobox
                  openOnFocus
                  width={70}
                  items={minuteList}
                  placeholder="M"
                  onChange={(selected) => this.setState({ min: selected })}
                />
              </div>
            </div>
          </div>
        </div>

  
        <Label htmlFor={36} size={400} display="block" marginBottom={4}>
          Reason/Notes
        </Label>
        <Textarea placeholder="Any extra info..." onChange={(e) => this.setState({ notes: event.target.value })} height={36} name={36} id={36} />

        <a className='button' onClick={this.createAppointment} style={{margin: '20px 0px'}}>Create Appointment</a>
      </div>
    )
  }
}