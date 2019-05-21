/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import ListHeader from './listHeader.jsx'
import Xcategory from '../../common/Xcategory.jsx'
import NodeList from './NodeList.jsx'
import Xfooter from '../../common/Xfooter.jsx'
import Box from './Box.jsx'
// import Calendar from './Calendar.jsx'


class List extends Component {
  constructor (props) {
    super(props)
    this.props = props
    console.log('~~~', this.props)
    this.state = {
      frontCate: '',
    }
  }

  getFrontCate (fc) {
    // console.log('fc:', fc)
    // console.log(this);
    this.setState({
      frontCate: fc,
    })
  }

  render () {
    const { history } = this.props
    return (
      <div id="wrapper-category">
        <div id="category" className="page">
          <ListHeader history={history} />
          <div>
            <Xcategory sendFc={this.getFrontCate.bind(this)} />
          </div>
          <NodeList history={history} frontCate={this.state.frontCate} />
          <Box />
        </div>
        <Xfooter history={history} tabNav={1} />
      </div>
    )
  }
}

export default List
