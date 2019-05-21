/* eslint-disable react/prop-types */
import React, { Component } from 'react'

class Xheader extends Component {
  constructor (props) {
    super(props)
    this.props = props
    const { history } = this.props
    this.history = history
    this.state = {
      cityName: '',
    }
  }

  navigateTo () {
    this.history.push({ pathname: '/city' })
  }

  linkToSearch () {
    this.history.push({ pathname: '/search' })
  }

  // 获取cookie
  // eslint-disable-next-line class-methods-use-this
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

  componentDidMount () {
    let code = this.getCookie('cityCode')
    if (code === '') {
      this.setState({
        cityName: '上海',
      })
    } else {
      this.getCityName(code)
    }
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

  render () {
    const { cityName } = this.state
    return (
      <div className="page__header">
        <div className="left" onClick={this.navigateTo.bind(this)}>
          <div>
            {cityName}
            <i className="icon icon-angle-down" aria-hidden="true" />
          </div>
        </div>
        <div className="middle">
          <div className="search" onClick={this.linkToSearch.bind(this)}>
            <i className="icon icon-search" />
            <input type="text" placeholder="搜索明星、演出、场馆" />
          </div>
        </div>
        <div className="right">
          <div className="icon icon-gift active">
            <div className="task-list" style={{ display: 'none' }}>
              <div className="item active">
                <span className="text">首次消费返现</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Xheader
