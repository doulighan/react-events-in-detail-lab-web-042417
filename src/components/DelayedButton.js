import React from 'react'
import ReactDOM from 'react-dom'

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  delay (e) {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e), 
      this.props.delay
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.delay.bind(this)}>
        </button>
      </div>
    )
  }
}

export default DelayedButton