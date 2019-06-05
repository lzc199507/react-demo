import React from 'react'
import PropTypes from 'prop-types'

const PageComment = ({ data }) => {
  return (
    <div className="page__comment">
      <div className="comment__title">
        <h3 className="title">
          <span className="title__text">
            观演评论
          </span>
        </h3>
      </div>
      <div className="comment__list" />
      <div className="loading" style={{ display: 'none' }} />
    </div>
  )
}

PageComment.propTypes = {
  data: PropTypes.array,
}

export default PageComment
