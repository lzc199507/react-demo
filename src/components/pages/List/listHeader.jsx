/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class listHeader extends Component {
  constructor (props) {
    super(props)
    this.props = props
    const { history } = this.props
    this.history = history
    this.state = {
      cityName: '',
    }
    console.log('this.props', this.props)
  }

  navigateTo () {
    this.history.push({ pathname: '/city' })
  }

  linkToSearch () {
    this.history.push({ pathname: '/search' })
  }

  // 获取cookie
  getCookie (cname) {
    let name = `${cname}=`
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  getCityName (cityCode) {
    React.axios.get(`http://localhost:1234/getCity?cityCode=${cityCode}`)
      .then((res) => {
        this.setState({
          cityName: res.data.result.cityName,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount () {
    let code = this.getCookie('cityCode')
    console.log(code)
    if (code === '') {
      this.setState({
        cityName: '上海',
      })
    } else {
      this.getCityName(code)
    }
  }

  backHome () {
    this.history.push({ pathname: '/' })
  }

  render () {
    const { cityName } = this.state
    return (
      <div className="listHeader">
        <div className="page__header">
          <div className="left">
            <i onClick={this.backHome.bind(this)} className="icon icon-angle-left" />
            <div onClick={this.navigateTo.bind(this)}>
              {cityName}
              &nbsp;
              <i className="icon icon-angle-down" />
            </div>
          </div>
          <div className="middle">
            <div className="search" onClick={this.linkToSearch.bind(this)}>
              <i className="icon icon-search" />
              <input placeholder="搜索明星、演出、场馆" type="text" />
            </div>
          </div>
          <div className="right">
            <div className="sorts" onClick={this.props.toggleBox.bind(this)}>
              <i className="btn btn-sort" />
            </div>
            <i className="btn-date" onClick={this.props.toggleCalendar.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return state
}, ((dispatch) => {
  return {
    toggleBox () {
      dispatch({
        type: 'toggleBox',
        isShowBox: !this.props.isShowBox,
      })
    },
    toggleCalendar () {
      dispatch({
        type: 'toggleCalendar',
        isCalendar: !this.props.isCalendar,
      })
    },
  }
}))(listHeader)
