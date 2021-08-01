import React from 'react'
import Watch from './Watch'

class StopWatch extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        units: 864000,
      }  
      this.startCount = this.startCount.bind(this)
      this.stopCount = this.stopCount.bind(this)
    
  }
  componentDidUpdate(props){
    if (this.state.units === 0) {
      this.stopCount()
    }
  }
  startCount () {
    if (this.state.units>0 && !this.countConstant){
    this.countConstant = setInterval(()=>{
      this.setState((prevState)=>({
        units: prevState.units - 1
      }))
    }, 100)}
  }
stopCount () {
  clearInterval(this.countConstant)
  this.countConstant = undefined
}

  render () {
    const {units} = this.state
   return (
   <div>
     <button onClick={this.startCount}>Start</button>
     <button onClick={this.stopCount}>Stop</button>
     <Watch  units= {units}></Watch>
   </div>
   )
  }
}

export default StopWatch