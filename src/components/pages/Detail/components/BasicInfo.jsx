/* eslint-disable react/prop-types */
import React from 'react'

const BasicInfo = ({ data = {} }) => {
  return (
    <div className="basic-info">
      <div className="bg" style={{ backgroundImage: `url(${data.thumbnail})` }} />
      <div className="mask" />
      <div className="thumbnail">
        {data.thumbnail && <img className="thumbnail__img" src={`${data.thumbnail}`} alt="avatar" />}
      </div>
      <div className="main">
        <h1 className="title">
          {data.actName}
        </h1>
        <div className="date">
          {data.actDate}
        </div>
        <div className="heat">
          <div className="heat__main">
            &nbsp;
            {data.hotLevel}
            &nbsp;℃
            <br />
            <span>
              西十区指数
            </span>
            <br />
          </div>
        </div>
        {
          data.sellerCnt && data.sellerCnt !== 0 && (
            <div className="price">
              {data.minPrice}
              &nbsp;
              <span className="sub">
                起
              </span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default BasicInfo
