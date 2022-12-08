import React, { Component } from 'react'
import Spinner from './load.gif'
export class loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Spinner} alt="loading"/>
      </div>
    )
  }
}

export default loading
