import React from 'react'

class Watch extends React.Component{
  render () {
   const {units} = this.props 
   let rest = units
   const days = Math.floor(rest/864000)
   rest -= days*864000
   const hours = Math.floor(rest/36000)
   rest -= hours*36000
   const minutes = Math.floor(rest/600)
   rest -= minutes*600
   const seconds = Math.floor(rest/10)
   rest -= seconds*10
   const dSeconds = rest
    return(

      <div> 
        <div>units: {units} </div>
        <div>dSeconds : {dSeconds}</div>
        <div>seconds: {seconds}</div>
        <div>minutes: {minutes}</div>
        {hours > 0 && <div>hours: {hours} </div>}
        {days > 0 && <div>days: {days} </div>}
        
        </div>
    )
  }
}

export default Watch