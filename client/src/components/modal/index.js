import React from 'react'
import { StyleSheet, css } from 'aphrodite';

import Appointment from './components/appointment'
import Patient from './components/patient'
import Prescription from './components/prescription'
import Payment from './components/payment'


export default class Modal extends React.Component {
  renderModal = () => {
    const { modalType, metadata, page } = this.props
    switch (modalType) {
      case 'PATIENT':
        return <Patient page={page} metadata={metadata} closeModal={this.closeModal}/>
      case 'PRESCRIPTION':
        return <Prescription page={page} metadata={metadata} closeModal={this.closeModal}/>
      case 'APPOINTMENT':
        return <Appointment page={page} metadata={metadata} closeModal={this.closeModal}/>
      case 'PAYMENT':
        return <Payment page={page} metadata={metadata} closeModal={this.closeModal}/>
      default:
        return null
    }
  }

  closeModal = () => {
    this.props.toggleModal(null)
  }
  
  render() {
    const { modalType } = this.props

    return (
      <div style={{display:'flex', justifyContent:'center', backgroundColor:'#000000b3', alignItems: 'center', position:'absolute', height: '100%', width: '100%', zIndex: 2 }}>
        <div className={css(styles.animate)} style={{ backgroundColor: 'white', minHeight: '30%', minWidth: modalType === 'PAYMENT' ? '0%' : '30%', opacity: 1, zIndex: 3, borderRadius: '5px'}}>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <svg onClick={this.closeModal} style={{margin: '3px 5px', cursor:'pointer'}} height='20px' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="rgb(168, 170, 174)" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
          </div>

          <div style={{display: 'flex', flex: 1, padding: '0px 20px'}}>
            { this.renderModal() }
          </div>
        </div>
      </div>
    )
  }
}

const translateKeyframes = {
  '0%': {
      transform: 'translateY(-1000px)',
  },
  '100%': {
      transform: 'translateY(-1000)',
  },
};

const styles = StyleSheet.create({
  animate: {
      animationName: [translateKeyframes],
      animationDuration: '500ms',
  },
});