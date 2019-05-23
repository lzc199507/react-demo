import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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
                <div>
                  <span>
                    ￥
                    {item.lowPrice}
                  </span>
                  <span className="sub">起</span>
                </div>
                {
                  item.isPreSale !== 0 && (
                    <div className="status">预定中</div>
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

Favours.propTypes = {
  data: PropTypes.array,
}

export default Favours
