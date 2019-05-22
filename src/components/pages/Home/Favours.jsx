/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const { Fragment } = React

const Favours = ({ data }) => {
  return (
    <div className="block favours">
      <h3 className="block__title">
        投你所喜
      </h3>
      {
        data.map((item, idx) => (
          <Link key={idx} className="node node--activity horizontal" to={`/detail/${item.pinyinName}`}>
            <div className="thumbnail" style={{ backgroundImage: `url(${item.actImgUrl})` }} />
            <div className="main">
              <h1 className="title">
                {item.actName}
              </h1>
              <div className="date">
                {item.actTime}
              </div>
              <div className="venue">
                {item.veName}
              </div>
              <div className="tags" />
              <div className="price">
                {
                  item.isPreSale !== 0 && (
                    <Fragment>
                      <div>
                        <span>
                          ￥
                          {item.lowPrice}
                        </span>
                        <span className="sub">起</span>
                      </div>
                      <div className="status">预定中</div>
                    </Fragment>
                  )
                }
              </div>
              <div className="quote">
                {item.intro}
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Favours
