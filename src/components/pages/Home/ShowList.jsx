/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const ShowList = (props) => {
  const { data = [] } = props

  const getContent = (data1) => {
    return data1.map((item, idx) => (
      <Link key={idx} className="node node--activity vertical" to={`/detail/${item.pinyinName}`}>
        <div className="thumbnail" style={{ backgroundImage: `url(${item.actImgUrl})`, width: '10rem' }}>
          <div className="thumbnail__hot">
            <span>
              {item.hotLevel}
            </span>
              ℃
          </div>
        </div>
        <div className="main">
          <h1 className="title">
            {item.actName}
          </h1>
          <div className="price">
            <div>
              <span>
                ￥
                {item.lowPrice}
              </span>
              <span className="sub">
                起
              </span>
            </div>
          </div>
          <div className="date">
            {item.actTime}
          </div>
          <div className="venue">
            {item.veName}
          </div>
        </div>
      </Link>
    ))
  }
  return (
    <div className="node-list">
      {
        data.length === 0 && (
          <div className="empty">当前日期没有演出， 请选择其他日期</div>
        )
      }
      {
        data.length !== 0 && (
          <div className="wrapper" style={{ width: `${11.2 * data.length}rem` }}>
            {
              getContent(data)
            }
          </div>
        )
      }
    </div>
  )
}

export default ShowList
