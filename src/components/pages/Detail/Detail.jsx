import React, { Component } from 'react'
import Basic from './Basic.jsx'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.props = props
    console.log(props)
  }

  render () {
    const { match } = this.props
    return (
      <div id="wrapper-activity">
        <div className="page-group">
          <Basic history={match.params.name} backto={this.props} />
        </div>
      </div>
    )
  }
}

export default Detail
