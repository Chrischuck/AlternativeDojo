import React from 'react'

import Card from '../../components/card'

export default class Dashboard extends React.Component {
  render() {
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
                <h1 style={{margin: '0px', fontSize: '50px'}}>37</h1>
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
                <p>New this week: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>12</span></p>
              </div>
            </Card>

            <Card title='Sales'>
              <div style={{
                  height: '180px',
                  backgroundColor: 'rgb(41, 150, 204)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  letterSpacing: '1px'
              }}>
                <h1 style={{margin: '0px', fontSize: '50px'}}>$3,000,000</h1>
                <p style={{margin: '0px'}}>Total Sales</p>
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
                <p>Last Sale: <span style={{fontWeight: 600, color: 'rgb(137, 138, 142)'}}>$500,000</span></p>
              </div>
            </Card>

            <Card title='Payment Methods'>
              <div className='payment-method-row' style={{ height: '50%', backgroundColor: '#2996cc' }}>
                <p style={{fontSize: '20px'}}>
                  <b style={{fontWeight: 600}}>Card</b> (<span style={{fontWeight: 200}}>50%</span>)
                  <span style={{float: 'right'}}>$50,000</span>
                </p>

              </div>
              <div className='payment-method-row' style={{ height: '20%', backgroundColor: '#3d454d' }}>
                <p style={{fontSize: '19px'}}>
                  <b style={{fontWeight: 600}}>Cash</b> (<span style={{fontWeight: 200}}>20%</span>)
                  <span style={{float: 'right'}}>$20,000</span>
                </p>              
              </div>
              <div className='payment-method-row' style={{ height: '15%', backgroundColor: '#73777a' }}>
                <p style={{fontSize: '19px'}}>
                  <b style={{fontWeight: 600}}>Gift Card</b> (<span style={{fontWeight: 200}}>15%</span>)
                  <span style={{float: 'right'}}>$15,000</span>
                </p> 
              </div>
              <div className='payment-method-row' style={{ height: '15%', backgroundColor: '#c2c7cc' }}>
                <p style={{fontSize: '19px'}}>
                  <b style={{fontWeight: 600}}>Other</b> (<span style={{fontWeight: 200}}>15%</span>)
                  <span style={{float: 'right'}}>$15,000</span>
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

            <Card title='Invoices'>
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
                <h1 style={{margin: '0px', fontSize: '50px'}}>$3,000</h1>
                <p style={{margin: '0px'}}>Outstanding Payments</p>
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
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{width: '5%', color: '#60666d'}}>1</p>
                  <b style={{width: '45%', color: '#60666d'}}>Grand Daddy Purp</b>
                  <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}>$30,000</p>
                  <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>45</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{width: '5%', color: '#60666d'}}>2</p>
                  <b style={{width: '45%', color: '#60666d'}}>OG Kush</b>
                  <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}>$12,000</p>
                  <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>4</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{width: '5%', color: '#60666d'}}>3</p>
                  <b style={{width: '45%', color: '#60666d'}}>Cookie Monster</b>
                  <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}>$3,000</p>
                  <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>10</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{width: '5%', color: '#60666d'}}>4</p>
                  <b style={{width: '45%', color: '#60666d'}}>Purple Raine</b>
                  <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}>$1,500</p>
                  <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>8</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{width: '5%', color: '#60666d'}}>5</p>
                  <b style={{width: '45%', color: '#60666d'}}>Khalifa Kush</b>
                  <p style={{width: '40%', textAlign: 'right', color: '#6e747a'}}>$1,000</p>
                  <p style={{width: '10%', textAlign: 'right', color: '#bbbdbf'}}>5</p>
                </div>
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
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{marginRight: '5px', color: '#60666d'}}>1</p>
                  <b style={{flex: 1, color: '#60666d'}}>Grand Daddy Purp</b>
                  <p style={{color: '#bbbdbf'}}>x145</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{marginRight: '5px', color: '#60666d'}}>2</p>
                  <b style={{flex: 1, color: '#60666d'}}>OG Kush</b>
                  <p style={{color: '#bbbdbf'}}>x54</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{marginRight: '5px', color: '#60666d'}}>3</p>
                  <b style={{flex: 1, color: '#60666d'}}>Cookie Monster</b>
                  <p style={{color: '#bbbdbf'}}>x110</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{marginRight: '5px', color: '#60666d'}}>4</p>
                  <b style={{flex: 1, color: '#60666d'}}>Purple Raine</b>
                  <p style={{color: '#bbbdbf'}}>x81</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #eaeaea'}}>
                  <p style={{marginRight: '5px', color: '#60666d'}}>5</p>
                  <b style={{flex: 1, color: '#60666d'}}>Khalifa Kush</b>
                  <p style={{color: '#bbbdbf'}}>x65</p>
                </div>
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
            <Card title='Average Patient Spending'>
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
                <h1 style={{margin: '0px', fontSize: '50px'}}>$420</h1>
                <p style={{margin: '0px' }}>Average Spent per Visit</p>
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