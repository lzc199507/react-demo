import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { queryKeywordData } from 'server'

const SearchContent = (props) => {
  const {
    cityCode, keyWord, history,
  } = props

  const [listData, setListData] = useState([])

  useEffect(() => {
    if (keyWord !== '') {
      let encodeW = encodeURI(keyWord)
      queryKeywordData({
        kw: encodeW,
        cityCode,
      }).then(res => res.data.result && setListData(res.data.result))
    }
  }, [keyWord])

  const linkToDt = name => history.push({ pathname: `/detail/${name}` })

  return (
    <div className="search-content">
      <div className="vague">
        <div className="vague__content">
          {
            listData.length > 0 && listData.map((item, index) => (
              <div key={index} onClick={() => linkToDt(item.pinyinName)} className="vague-item">
                <span className="item__left">{item.result}</span>
                <span className="item__right">{item.area}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

SearchContent.propTypes = {
  cityCode: PropTypes.string,
  keyWord: PropTypes.string,
  history: PropTypes.object,
}

export default SearchContent
