import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { querySearchData } from 'server'

const HotShow = (props) => {
  const {
    cityCode, ifShow, handleSearch,
  } = props
  const [hotList, setHotList] = useState([])

  useEffect(() => {
    if (cityCode !== '') {
      querySearchData({ cityCode }).then(res => setHotList(res.data.result.hotSearches))
    }
  }, [cityCode])

  return (
    <div className="initial" style={{ display: ifShow ? 'block' : 'none' }}>
      <div className="hot-show">
        <h3 className="show__title">热门演出</h3>
        <ul className="show__list clearfix">
          {
            hotList.length > 0 && hotList.map((item, idx) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li key={idx} className="list__item" onClick={() => handleSearch(item)}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

HotShow.propTypes = {
  cityCode: PropTypes.string,
  ifShow: PropTypes.bool,
}

export default HotShow
