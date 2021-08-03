import React from 'react'
import Watch from './Watch'
import UnitsInput from './UnitsInput'
import video from './Video/ScreamingGoat.mp4'

import ReactPlayer from "react-player";
import './StopWatch.css'
import CountingSheep from './CountSheep';

class StopWatch extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        units: 0,
        startingUnits: 0,
        stopWatchShow: true,
        videoShow: false,
        playing: false,
      }  
      this.startCount = this.startCount.bind(this)
      this.stopCount = this.stopCount.bind(this)
      this.resetUnits = this.resetUnits.bind(this)
      this.setStartUnits = this.setStartUnits.bind(this)
      this.handleCheckbox = this.handleCheckbox.bind(this)
      this.playVideo = this.playVideo.bind(this)
      this.videoEnd = this.videoEnd.bind(this)
      this.showStartVideo = this.showStartVideo.bind(this)

      this.counting = false
      this.showSheep = false

  }
  
  componentDidUpdate(){
    if (this.state.units === 0 && this.counting) {
      this.stopCount() 
      this.showStartVideo()
       
    }
  }
  startCount () {
    if (this.state.units>0 && !this.countConstant){
      this.counting = true
      this.showSheep = true
      this.countConstant = setInterval(()=>{
      this.setState((prevState)=>({
        units: prevState.units - 1
      }))
    }, 100)
  }
  }
stopCount () {
  clearInterval(this.countConstant)
  this.countConstant = undefined
  this.counting = false
  this.showSheep = false
  this.forceUpdate()
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

  handleCheckbox (event) {
    let value = event.target.checked
    this.setState({
      stopWatchShow: value
    })
  }

  playVideo () {
    this.setState({
      playing:true
    })
  }

  videoEnd() {
    this.setState(()=>({
      videoShow:false,
      stopWatchShow: true,
      units:0
    }))
  }

  showStartVideo () {
    this.setState(()=>({
      videoShow: true,
      stopWatchShow: false
    }), ()=>{
      this.playVideo()
    })
  }

  render () {
    const {units} = this.state
   return (

   <div>
     {/* <label htmlFor="show">
       Show stopwatch
     <input type="checkbox" name='show' onChange={this.handleCheckbox} checked={stopWatchShow}/>
     </label> */}
 { this.state.stopWatchShow && <main>
     <UnitsInput updateValues={this.setStartUnits}></UnitsInput>
    <div className='side-buttons'>
      <div className='button-container'>
          <button onClick={this.startCount}>Start</button>
          <button onClick={this.stopCount}>Stop</button>
          <button onClick={this.resetUnits}>Reset</button>
      </div>
     <Watch  units= {units}></Watch>
    </div>
    {this.showSheep && <CountingSheep />}
   </main>
   }
   {this.state.videoShow && <ReactPlayer
    url={video}
    width="100%"
    height="100%"
    playing={this.state.playing}
    onEnded={this.videoEnd}
    volume = '0.2'
     />}
   
   </div>
   )
  }
}

export default StopWatch