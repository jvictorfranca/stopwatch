import React from 'react'
import './Watch.css'

class Watch extends React.Component{
  fixString(number){
    let string = number
    let answer;
    string = number.toString()
    answer = string
    if (string.length === 1)
    {answer = `0${string}`}
    return answer
  }
  render () {
   const {units} = this.props 
   let rest = units
   let days = Math.floor(rest/864000)
   rest -= days*864000
   const stringDays = this.fixString(days)
   let hours = Math.floor(rest/36000)
   rest -= hours*36000
   const stringHours = this.fixString(hours)
   let minutes = Math.floor(rest/600)
   rest -= minutes*600
   minutes = this.fixString(minutes)
   let seconds = Math.floor(rest/10)
   rest -= seconds*10
   seconds = this.fixString(seconds)
   let dSeconds = rest
    return(

      <main className='stopWatch'> 
        <section className='container'>
          <div className='number little'>:{dSeconds}</div>
          <div className='number'>{seconds}</div>
          <div className='number'>{minutes}:</div>
          {hours > 0  && <div className='number'>{stringHours}h: </div>}
          {days > 0 && <div className='number'>{stringDays}d: </div>}
        </section>

        
        </main>
    )
  }
}

export default Watch