import React from 'react'

const monthNames = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
const dayNames = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];

const getTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthName = monthNames[month - 1]
  const dayName = dayNames[date.getDay()]

  let hour = date.getHours(); // 0 - 23
  let minute = date.getMinutes(); // 0 - 59
  let period = "AM";
  
  if (hour == 0) {
    hour = 12;
  }
  
  if (hour >= 12) {
    hour = hour - 12;
    period = "PM";
  }
  
  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  
  return `${dayName}, ${monthName} ${day}, ${year}, ${hour}:${minute} ${period}`;
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: getTime(),
      timeouts: []
    }
  }

  componentDidMount() {
    this.setTime()
  }

  componentWillUnmount() {
    const { timeouts } = this.state
    timeouts.forEach(clearTimeout)
  }

  setTime = () => {
    const { timeouts } = this.state
    const newTimeout = setTimeout(this.setTime, 1000)

    const newTimeouts = [...timeouts]
    clearTimeout(newTimeouts.shift())
    newTimeouts.push(newTimeout)

    this.setState({ time: getTime(), timeouts: newTimeouts })
  }

  render() {
    const { time } = this.state

    return (
      <div className='content-header'>
        <h1 style={{fontWeight: 200}}>{time}</h1>

      </div>
    )
  }
}

