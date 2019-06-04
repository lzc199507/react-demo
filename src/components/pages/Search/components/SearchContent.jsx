import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { queryKeywordData } from 'server'
// import { usePrevious } from 'utils/hooks'

const SearchContent = (props) => {
  const {
    cityCode, keyWord, history,
  } = props

  const [listData, setListData] = useState([])

  // const prevKeyWord = usePrevious(keyWord)

  useEffect(() => {
    if (keyWord !== '') {
      queryKeywordData({
        kw: keyWord,
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
            listData.length > 0 && listData.map((item, index) => {
              let res = item.result
              res = res.replace(eval(`/${item.keywords}/g`), "<strong class='orange'>$&</strong>")
              return (
                <div key={index} onClick={() => linkToDt(item.pinyinName)} className="vague-item">
                  <span className="item__left" dangerouslySetInnerHTML={{ __html: res }} />
                  <span className="item__right">{item.area}</span>
                </div>
              )
            })
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
