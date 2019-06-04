import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { Fragment } = React

const MainContent = ({ data, handleCheckMore }) => {
  const data1 = JSON.parse(JSON.stringify(data))
  const newData = data1.map((item) => {
    if (item.pinyinName !== 'film' && item.mData) {
      item.otherData = item.mData.splice(1, item.mData.length)
    } else if (item.pinyinName === 'film' && item.mData) {
      item.otherData = item.mData
      item.mData = []
    }
    return item
  })

  return (
    <Fragment>
      {
        newData && newData.length > 0 && newData.map((item, idx) => {
          return (
            <div className="block" key={idx}>
              <h3 className="block__title">
                {item.mTitle}
                <small onClick={() => handleCheckMore(item.pinyinName)}>
                  查看更多
                </small>
              </h3>
              {
                item.mData.length > 0 && item.mData.map((iitem, iidx) => (
                  <Link key={iidx} className="main-node" to={`/detail/${iitem.pinyinName}`}>
                    <div className="node node--activity primary">
                      <div className="bg" style={{ backgroundImage: `url(${iitem.actImgUrl})` }} />
                      <div className="mask" />
                      <div className="thumbnail" style={{ backgroundImage: `url(${iitem.actImgUrl})` }}>
                        <div className="thumbnail__hot">
                          <span>
                            {iitem.hotLevel}
                          </span>
                            ℃
                        </div>
                      </div>
                      <div className="main">
                        <h1 className="title">
                          {iitem.actName}
                        </h1>
                        <div className="quote">
                          {iitem.intro}
                        </div>
                        <div className="date">
                          {iitem.actTime}
                        </div>
                        <div className="price">
                          <div>
                            <span>
                              ￥
                              {iitem.lowPrice}
                            </span>
                            <span className="sub">
                              起
                            </span>
                          </div>
                          <div>
                            在售卖家
                            {iitem.sellerCount}
                            家
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              }
              <div className="node-list">
                <div className="wrapper" style={{ width: `${11.2 * item.otherData.length}rem` }}>
                  {
                    item.pinyinName !== 'film' && item.otherData.length > 0 && item.otherData.map((iitem, iidx) => (
                      <Link key={iidx} className="node node--activity vertical" to={`/detail/${iitem.pinyinName}`}>
                        <div className="thumbnail" style={{ backgroundImage: `url(${iitem.actImgUrl})` }}>
                          {
                            iitem.maxDiscount !== '' && (
                              <div className="thumbnail__tag">
                                <span>
                                  {iitem.maxDiscount}
                                </span>
                                折 起
                              </div>
                            )
                          }
                          <div className="thumbnail__hot">
                            <span>
                              {iitem.hotLevel}
                            </span>
                              ℃
                          </div>
                        </div>
                        <div className="main">
                          <h1 className="title">
                            {iitem.actName}
                          </h1>
                          <div className="price">
                            <div>
                              <span>
                                ￥
                                {iitem.lowPrice}
                              </span>
                              <span className="sub">
                                起
                              </span>
                            </div>
                          </div>
                          <div className="date">
                            {iitem.actTime}
                          </div>
                          <div className="venue" />
                        </div>
                      </Link>
                    ))
                  }
                  {
                    item.pinyinName === 'film' && item.otherData.length > 0 && item.otherData.map((iitem, iidx) => (
                      <Link key={iidx} className="node node--film vertical" to={`/moviedetail/${iitem.filmId}`}>
                        <div className="thumbnail" style={{ backgroundImage: `url(${iitem.filmImg})` }}>
                          <div className="thumbnail__score">
                            {iitem.scoreD}
                          </div>
                        </div>
                        <div className="main">
                          <h1 className="title">
                            {iitem.filmName}
                          </h1>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  )
}

MainContent.propTypes = {
  data: PropTypes.array,
  handleCheckMore: PropTypes.func,
}

export default MainContent
