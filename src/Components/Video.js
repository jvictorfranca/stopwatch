import React from 'react'


class Video extends React.Component{
render () {
  return(
    <div className="App">
          <video controls autostart autoPlay ref='src/Video/ScreamingGoat.mp4' type="video/mp4" />
      </div>
  )
}
}

export default Video