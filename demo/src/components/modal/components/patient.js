import React from 'react'
import { Label, TextInput, Combobox } from 'evergreen-ui'

import { monthList, generateDayList, yearList } from '../../../utils/dates'

export default class extends React.Component {
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
              <TextInput placeholder="John" height={36} name={36} id={36} />
            </div>
            <div style={{flex: 1,  marginLeft: '5px'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                Last Name
              </Label>
              <TextInput placeholder="Adams" height={36} name={36} id={36} />
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
                  onChange={selected => console.log(selected)}
                />
              </div>
              <div style={{width: '150px'}}>
                <Combobox
                  openOnFocus
                  width={150}
                  items={generateDayList()}
                  placeholder="Day"
                  onChange={selected => console.log(selected)}
                />
              </div>
              <div style={{width: '200px'}}>
                <Combobox
                  openOnFocus
                  width={200}
                  items={yearList}
                  placeholder="Year"
                  onChange={selected => console.log(selected)}
                />
              </div>
            </div>
          </div>

          <div style={{marginBottom: '10px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Email
            </Label>
            <TextInput placeholder="JohnAdams@whitehouse.gov" width='100%' height={36} name={36} id={36} />
          </div>

          <div style={{marginBottom: '10px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Telephone Number
            </Label>
            <TextInput placeholder="202-456-1111" type='tel' width='100%' height={36} name={36} id={36} />
          </div>


        <a className='button' style={{margin: '20px 0px'}}>Create Patient</a>

      </div>
    )
  }
}