/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Xfooter from '../../common/Xfooter.jsx'

class CityList extends Component {
  constructor (props) {
    super(props)
    this.props = props
    const { history } = this.props
    this.history = history
    this.state = {
      cityList: [],
    }
  }

  navigateTo () {
    this.history.go(-1)
  }

  checkTo (code, e) {
    const { dispatch } = this.props
    dispatch({
      type: 'setCityCode',
      cityCode: code,
    })
    dispatch({
      type: 'setCityName',
      cityName: e.target.innerText,
    })
    this.history.go(-1)
  }

  getCityList () {
    let arr = []
    React.axios.get('http://localhost:1234/getCityList',)
      .then((res) => {
        const { result: cityData } = res.data
        for (let i in cityData) {
          let obj = { py: '', list: [] }
          obj.py = i.toUpperCase()
          obj.list = cityData[i]
          arr.push(obj)
        }
        this.setState({
          cityList: arr,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount () {
    this.getCityList()
  }

  render () {
    const { cityList } = this.state
    const { cityName } = this.props
    return (
      <div id="wrapper-city">
        <div id="city" className="page">
          <header className="header">
            <i className="icon icon-angle-left" onClick={this.navigateTo.bind(this)} />
            {' '}
            选择城市
          </header>
          <div className="location">
            当前定位城市：
            <span className="city--name">{cityName}</span>
          </div>
          <ul className="list list-unstyled">
            {
              cityList.map((item, index) => {
                let eachName = item.list.map((i, idx) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li key={idx} className="group__item" onClick={this.checkTo.bind(this, i.areaCode)}>
                    {i.areaName}
                  </li>
                ))
                return (
                  <li key={index} className="group">
                    <h3 className="group__title">{item.py}</h3>
                    <ul className="group__list">
                      {eachName}
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Xfooter tabNav={0} history={this.history} />
      </div>
    )
  }
}

export default connect((state) => {
  const { cityName } = state
  return { cityName }
})(CityList)
