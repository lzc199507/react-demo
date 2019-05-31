import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Xcategory = (props) => {
  const {
    showAll = false, data = [], categoryIdx, dispatch, history,
  } = props

  let allData = [{
    pinyinName: 'all', title: '全部', isCustom: 0, code: '0000',
  }]

  let newData = []
  let highlightIdx = 0

  if (showAll) {
    data.length > 0 && data.map((item) => {
      allData.push(item)
    })
  }

  showAll ? newData = allData : newData = data
  !showAll ? highlightIdx = -1 : highlightIdx = categoryIdx

  const chooseNav = (i) => {
    dispatch({
      type: 'resetListData',
    })
    dispatch({
      type: 'setCategoryIdx',
      payload: {
        categoryIdx: showAll ? i : i + 1,
      },
    })
    if (!showAll) {
      history.push({ pathname: '/list' })
    }
  }

  return (
    <div className="categories">
      <div className="wrapper">
        {
          newData.length > 0 && newData.map((item, index) => (
            <div key={index} className={index === highlightIdx ? 'item active' : 'item'} onClick={() => chooseNav(index)}>
              <span className={`cate-icon ${item.pinyinName}`} />
              {item.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

Xcategory.propTypes = {
  showAll: PropTypes.bool,
  data: PropTypes.array,
  categoryIdx: PropTypes.number,
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default connect((state) => {
  const { initIndexData, categoryIdx } = state.app
  const { frontCateInfo: data } = initIndexData
  return { data, categoryIdx }
})(Xcategory)
