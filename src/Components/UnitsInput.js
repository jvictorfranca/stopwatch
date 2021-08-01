import React from 'react';

class UnitsInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleData = this.handleData.bind(this)
    this.sendUpdatedValues = this.sendUpdatedValues.bind(this)
  }
  handleData (event) {
    const {name, value} = event.target
    
    this.setState(()=>({
      [name]: value
    }))
  }
  sendUpdatedValues(){
    let value = this.state.inputValue
    value = value*600
    this.props.updateValues(value)
  }
  render(){
   const {inputValue} = this.state
    return (
      <section>
      <input type="number" name='inputValue' value={inputValue} onChange={this.handleData} />
      <button onClick={this.sendUpdatedValues}>Send</button>
      </section>
      
    )
  }
}

export default UnitsInput