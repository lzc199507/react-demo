import React from 'react'
import PropTypes from 'prop-types'

const PageBtn = ({ history }) => {
  return (
    <div className="page__btn">
      <div className="btn btn__write" onClick={() => history.push({ pathname: '/comment' })}>
        <i className="icon icon-chat" />
          &nbsp;写影评&nbsp;
      </div>
      <div className="btn btn__seat">
        比价选座
      </div>
    </div>
  )
}

PageBtn.propTypes = {
  history: PropTypes.object,
}

export default PageBtn
