import React from 'react'
import PropTypes from 'prop-types'

const Recommends = ({ data }) => {
  return (
    <div className="recommends">
      <div className="main">
        <div className="item">
          <div className="img" style={{ backgroundImage: `url(${data[0].imgUrl})` }} />
          <h4 className="title">
            限时
            {data[0].actTitle}
          </h4>
          <div className="count-down">
            <span className="i">
              00
            </span>
              天
            <span className="i">
              00
            </span>
              :
            <span className="i">
               00
            </span>
              :
            <span className="i">
               00
            </span>
          </div>
          <div className="next">
            下一场
            {' '}
            {data[0].nextStartTime}
          </div>
        </div>
      </div>
      <div className="minor">
        <div className="item">
          <div className="left">
            <h4 className="title">
              {data[1].actTitle}
            </h4>
            <div className="remark" />
          </div>
          <div className="img" style={{ backgroundImage: `url(${data[1].imgUrl})` }} />
        </div>
        <div className="item">
          <div className="left">
            <h4 className="title">
              {data[2].actTitle}
            </h4>
            <div className="remark">
              赢100西米缤纷活动进行中
            </div>
          </div>
          <div className="img" style={{ backgroundImage: `url(${data[2].imgUrl})` }} />
        </div>
      </div>
    </div>
  )
}

Recommends.propTypes = {
  data: PropTypes.array,
}

export default Recommends
