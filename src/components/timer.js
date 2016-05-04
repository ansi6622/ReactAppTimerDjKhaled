import React, { Component } from 'react'
export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
    count: 0
    }
  }
  componentWillMount(){
    let i = 1;
    setInterval(()=>{
      this.setState({
        count: i++
      })
    }, 1000)
  }
  render(){
    return (
      <div>
      {this.state.count}
      </div>
    )
  }
}
