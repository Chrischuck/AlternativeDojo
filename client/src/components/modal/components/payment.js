import React from 'react'
import { Label, TextInput, Combobox, Textarea } from 'evergreen-ui'


import { monthList } from '../../../utils/dates'
const currentYearList = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readableCreditCard: '',
      creditCard: ''
    }
  }

  onCreditCardChange = (event) => {
    this.setState({ 
      readableCreditCard: event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim(),
      creditCard: event.target.value
    })
  }

  chargeCard = () => {

  }

  chargeCash = () => {

  }
  render() {
    const { readableCreditCard } = this.state
    console.log(this.props.paymentData)
    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <h1 style={{margin: '0px'}}>Payment</h1>
        <hr style={{color: 'black', width: '100%', margin:'5px 0px 10px 0px', border: 0, borderTop: '1px solid #ccc'}} />
        
        <div style={{display: 'flex', marginBottom: '10px'}}>
          <div style={{flex: 3, marginRight: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4} >
              Credit Card
            </Label>
            <TextInput maxlength="19" onChange={this.onCreditCardChange} value={readableCreditCard} placeholder="2424 2424 2424 2424" height={36} name={36} id={36} width='100%'/>
          </div>
          <div style={{flex: 1,  marginLeft: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              CVC
            </Label>
            <TextInput maxlength="3" placeholder="123" height={36} name={36} id={36} width={60} />
          </div>
        </div>


        <div style={{marginBottom: '10px'}}>
          <Label htmlFor={36} size={400} display="block" marginBottom={4}>
            Expiration Date
          </Label>
          <div style={{display: 'flex'}}>
            <div style={{width: '150px', marginRight: '5px'}}>
              <Combobox
                openOnFocus
                width={150}
                items={monthList}
                placeholder="Month"
                onChange={selected => console.log(selected)}
              />
            </div>
            <div style={{width: '120px'}}>
              <Combobox
                openOnFocus
                width={120}
                items={currentYearList}
                placeholder="Year"
                onChange={selected => console.log(selected)}
              />
            </div>
          </div>
        </div>

        <a className='button' style={{margin: '20px 0px'}}>Pay Card</a>

        <p className='line-wrap'><span>or</span></p>

        <a className='button' style={{margin: '20px 0px'}}>Cash Payment</a>

      </div>
    )
  }
}