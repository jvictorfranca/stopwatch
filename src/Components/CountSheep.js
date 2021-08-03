import React from 'react'
import './StopWatch.css'
import gif from './Video/giphy.gif'



class CountingSheep extends React.Component{
render () {
  return(
    <div className="sheeps">
          <img src={gif} alt="" className='sheep'/>
      </div>
  )
}
}

export default CountingSheep