import React from 'react'
import Watch from './Watch'
import UnitsInput from './UnitsInput'

class StopWatch extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        units: 0,
        startingUnits: 864000,
      }  
      this.startCount = this.startCount.bind(this)
      this.stopCount = this.stopCount.bind(this)
      this.resetUnits = this.resetUnits.bind(this)
      this.setStartUnits = this.setStartUnits.bind(this)
  }
  componentDidUpdate(){
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
resetUnits () {
  this.setState(()=>({
    units: this.state.startingUnits
  }))
  this.stopCount()
}

async setStartUnits (number) {
   this.setState(()=>({
    startingUnits: number
  }), ()=>{
  this.resetUnits()
  })}

  render () {
    const {units} = this.state
   return (
   <div>
     <UnitsInput updateValues={this.setStartUnits}></UnitsInput>
     <button onClick={this.startCount}>Start</button>
     <button onClick={this.stopCount}>Stop</button>
     <button onClick={this.resetUnits}>Reset</button>
     <Watch  units= {units}></Watch>
   </div>
   )
  }
}

export default StopWatch