import React from 'react'

export default ({ title, style, children }) => (
  <div className='card' style={style}>
    <div className='card-title'>
      <h2 style={{height: '50px', margin: '0px', color: '#399ed0'}}>{title}</h2>
    </div>
    <div className='card-body'> 
      { children }
    </div>
  </div>
)