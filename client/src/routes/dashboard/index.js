import React from 'react'

import Card from '../../components/card'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const data = await fetch('http://localhost:3000/dashboard').then(data => data.json())
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    return (
      <div className='content-body'>
        <div style={{display: 'flex', padding: '15px', flexDirection: 'column', flex: 1}} >

          <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
            <Card title='Patients'>
              <div style={{
                  height: '180px',
                  backgroundColor: '#4ab300',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  letterSpacing: '1px'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>{data.patientCount}</h1>
                <p style={{margin: '0px' }}>Total Patients</p>
              </div>
              <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: '#a8aaae',
                  fontSize: '18px'
              }}>
                <p>New this week: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>{data.recentPatientCount}</span></p>
              </div>
            </Card>

            <Card title='Sales'>
              <div style={{
                  height: '100%',
                  backgroundColor: 'rgb(41, 150, 204)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  letterSpacing: '1px'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>${data.totalSales}</h1>
                <p style={{margin: '0px'}}>Total Sales</p>
              </div>
            </Card>

            <Card title='Payment Methods'>
              <div className='payment-method-row' style={{ height: data.paymentData ? `${data.paymentData.cardPercentage * 100}%` : '0%', backgroundColor: '#2996cc' }}>
                <p style={{fontSize: '20px'}}>
                  <b style={{fontWeight: 600}}>Card</b> (<span style={{fontWeight: 200}}>{data.paymentData ? Math.round(data.paymentData.cardPercentage * 100) : ''}%</span>)
                </p>

              </div>
              <div className='payment-method-row' style={{ height: data.paymentData ? `${data.paymentData.cashPercentage * 100}%` : '0%', backgroundColor: '#3d454d' }}>
                <p style={{fontSize: '19px'}}>
                  <b style={{fontWeight: 600}}>Cash</b> (<span style={{fontWeight: 200}}>{ data.paymentData ? Math.round(data.paymentData.cashPercentage * 100) : '0%'}%</span>)
                </p>              
              </div>
            </Card>
          </div>


          <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
            <Card title='Capital'>
              <div style={{
                  height: '180px',
                  backgroundColor: '#4ab300', ///'rgb(84, 114, 204)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  letterSpacing: '1px'
              }}>
                <h2 style={{margin: '0px', fontSize: '35px'}}>$30,000</h2>
                <p style={{margin: '0px' }}>Remaining Balance</p>
                <div style={{ display:'block', width: '75%', height: '20px', borderRadius: '25px', marginTop: '20px', backgroundColor: '#f8f8f8a1'}}>
                  <div style={{ display:'block', backgroundColor: 'white', width: '76%', height: '100%', borderRadius:'25px 0px 0px 25px'}} /> 
                </div>
                <p style={{fontSize: '19px', margin: '4px'}}>
                  <b style={{fontWeight: 600}}>80</b><span style={{fontWeight: 200}}>% Complete</span>
                </p> 
              </div>
              <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: '#59aed8',
                  fontSize: '18px'
              }}>
                <p><span style={{fontWeight: 200, color: '#59aed8'}}>View Plan</span></p>
              </div>
            </Card>

            <Card title='Employees'>
              <div style={{
                  flex: 1,
                  backgroundColor: 'rgb(84, 114, 204)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  letterSpacing: '1px'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>{data.employeeCount}</h1>
                <p style={{margin: '0px'}}>Total Employees</p>
              </div>
            </Card>

            <Card title='Top Items by Sales'>
              <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '1px solid #eaeaea',
                  margin: '0px 15px',
                  overflowY: 'scroll'
              }}>
                {
                  data.topSalesList ? data.topSalesList.map((t, index) => (
                    <div style={{display: 'flex', minHeight: '50px', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                      <p style={{width: '5%', color: '#60666d'}}>{index + 1}.</p>
                      <b style={{width: '45%', color: '#60666d'}}>{t.name}</b>
                      <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}></p>
                      <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>x{t.quantity}</p>
                    </div>
                  )) : []
                }
              </div>
            </Card>
          </div>


          <div style={{display: 'flex', flexDirection: 'row', flex: 1 }}>
          <Card title='Inventory'>
              <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '1px solid #eaeaea',
                  margin: '0px 15px',
                  overflowY: 'scroll'
              }}>
                {
                  data.inventory ? data.inventory.map((t, index) => (
                    <div style={{display: 'flex', minHeight: '50px', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                      <p style={{marginRight: '5px', color: '#60666d'}}>{index + 1}.</p>
                      <b style={{flex: 1, color: '#60666d'}}>{t.name}</b>
                      <p style={{color: '#bbbdbf'}}>x{t.quantity}</p>
                    </div>
                  )) : []
                }
              </div>
            </Card>

            <Card title='Deposit'>
              <div style={{
                  height: '180px',
                  backgroundColor: 'rgb(149, 0, 223)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>$1,200,000</h1>
                <p style={{margin: '0px' }}>Upcoming Deposits</p>
              </div>
              <div style={{

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: '#a8aaae',
                  fontSize: '18px'
              }}>
                <p>Last Deposit: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>$630,000</span></p>
              </div>
            </Card>
            <Card title='Recent Sales'>
              <div style={{
                  height: '180px',
                  backgroundColor: '#63526b',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>{data.recentSalesCount}</h1>
                <p style={{margin: '0px' }}>Sales</p>
              </div>
              <div style={{

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: '#a8aaae',
                  fontSize: '18px'
              }}>
                <p>Last 30 Days</p>
              </div>
            </Card>
          </div>



        </div>
      </div>
    )
  }
}