import React from 'react'
import { Label, TextInput, Combobox } from 'evergreen-ui'


const medicineList = [
  {
    name: 'OG Kush',
    price: 10
  },
  {
    name: 'Cookie Monster',
    price: 8
  },
  {
    name: 'Purple Raine',
    price: 12
  },
].sort((a, b) => a.name > b.name)

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: [],
      inCart: []
    }
  }

  onChange = (value, obj) => { 

    obj.clearSelection()
    if (!value) {
      return
    }

    const currentNames = this.state.cart.map(c => c.name)
    if (currentNames.includes(value)) {
      return
    }

    const m = medicineList.filter(c => c.name === value)

    const medicine = m[0]
    if (!medicine) {
      return
    }

    this.setState((prevState, _) => {
      const newCart = [ { ...medicine, quantity: 1 }, ...prevState.cart ]
      return ({ cart: newCart.sort((a, b) => a.name > b.name), inCart: newCart.map(c => c.name) })
    })
  }

  onQuantityChange = (medicine, value) => {
    this.setState((prevState, _) => {
      const newCart = [ ...prevState.cart ]

      newCart.map(c => {
        if (c.name === medicine) {
          c.quantity = value
        }
        return c
      })
      return ({ cart: newCart.sort((a, b) => a.name > b.name) })
    })
  }

  deleteMedicine = (medicine) => {
    this.setState((prevState, _) => {
      const newCart = [ ...prevState.cart ]
      const index = newCart.indexOf(medicine);
      if (index > -1) {
        newCart.splice(index, 1);
      }

      return ({ cart: newCart.sort((a, b) => a.name > b.name), inCart: newCart.map(c => c.name) })
    })
  }

  calculateTotalPrice = () => {
    const { cart } = this.state

    let total = 0
    cart.forEach(c => {
      total += c.quantity * c.price
    })
    return total
  }

  render() {
    const { cart, inCart } = this.state
    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <h1 style={{margin: '0px'}}>New Prescription</h1>
        <hr style={{color: 'black', width: '100%', margin:'5px 0px 10px 0px', border: 0, borderTop: '1px solid #ccc'}} />

        <div style={{display: 'flex', marginBottom: '10px'}}>
          <div style={{flex: 1, marginRight: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Pharmacist ID
            </Label>
            <TextInput placeholder="9235234" height={36} name={36} id={36} />
          </div>
          <div style={{flex: 1,  marginLeft: '5px'}}>
            <Label htmlFor={36} size={400} display="block" marginBottom={4}>
              Patient ID
            </Label>
            <TextInput placeholder="7621349" height={36} name={36} id={36} />
          </div>
        </div>

        <Label htmlFor={36} size={400} display="block" marginBottom={4}>
          Add Items
        </Label>
        <Combobox
          openOnFocus
          width='100%'
          items={medicineList.map(c => c.name).filter(c => !inCart.includes(c))}
          placeholder='Select Items'
          onChange={this.onChange}
        />

        <div style={{display: 'flex', marginTop: '10px', flexDirection: 'column', height: '150px', overflow: 'scroll'}}>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <div style={{width: '70%'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                Name
              </Label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '10%'}}>
              <Label htmlFor={30} size={400} display="block" marginBottom={4}>
                Quantity
              </Label>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '10%'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                Price
              </Label>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', width: '10%'}}>
              <Label htmlFor={36} size={400} display="block" marginBottom={4}>
                Remove
              </Label>
            </div>
          </div>



          <hr style={{color: 'black', width: '100%', margin:'0px 0px 5px 0px', border: 0, borderTop: '1px solid #ccc'}} />
          {
            cart.length === 0 ? 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <h2 style={{margin: '0px'}}>No Items Added!</h2>
            </div> :
            cart.map((medicine, index) => (
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: '100%', margin: '2px 0px', height: '30px', borderBottom: '1px solid #e0e0e0'}}>
                <div style={{ width: '70%'}}>
                  <Label htmlFor={30} size={400} display="block" marginBottom={4}>
                    {medicine.name}
                  </Label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center',  width: '10%'}}>
                    <span style={{fontSize: '14px', height: '20px', marginTop: 'auto', marginRight: '4px'}}>x</span>
                    <input onChange={(e) => this.onQuantityChange(medicine.name, e.target.value)} type='number' value={medicine.quantity} style={{width: '35px', marginBottom: '2px', fontSize: '16px'}}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center',  width: '10%'}}>
                  <Label htmlFor={30} size={400} display="block" marginBottom={4}>
                    {'$' + (medicine.quantity * medicine.price)}
                  </Label>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end',  width: '10%'}}>
                  <Label htmlFor={30} size={400} display="block" marginBottom={4}>
                    <svg onClick={() => this.deleteMedicine(medicine)} style={{marginRight: '10px', cursor:'pointer'}} height='20px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#ff7675" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                  </Label>
                </div>
              </div>
            ))
          }

        </div>
        <Label htmlFor={36} size={400} display="block" marginBottom={4}>
          Total Price: ${this.calculateTotalPrice()}
        </Label>

        <a className='button' style={{margin: '20px 0px'}}>Create Prescription</a>

      </div>
    )
  }
}