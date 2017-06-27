import React from 'react'
import ReactDOM from 'react-dom'

export default class CoordiantedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  getCoordinates(e) {
    this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render () {
    return (
      <div> 
        <button onClick={this.getCoordinates.bind(this)}></button>
      </div>
    )
  }
}