import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Hcategory = (props) => {
  const { dispatch, history, data } = props
  const chooseNav = (idx) => {
    dispatch({
      type: 'setCategoryIdx',
      categoryIdx: idx + 1,
    })
    history.push({ pathname: '/list' })
  }
  return (
    <div className="categories">
      <div className="wrapper">
        {
          data.map((item, idx) => (
            <div key={idx} className="item" onClick={() => chooseNav(idx)}>
              <span className={`cate-icon ${item.pinyinName}`} />
              {item.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

Hcategory.propTypes = {
  data: PropTypes.array,
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default connect()(Hcategory)
