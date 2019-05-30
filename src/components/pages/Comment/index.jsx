import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {
  console.log('props', props)
  return (
    <div id="wrapper-films.comment">
      <div id="comment" className="page">
        <div className="page__header" type="primary">
          <div className="left">
            <i className="icon icon-angle-left" />
          </div>
          <div className="middle">
            <span>
                发表评论
            </span>
          </div>
          <div className="right" />
        </div>

        <div className="page__content">
          <div className="comment-area clearfix">
            <textarea placeholder="聊聊你的感受..." />
            <button type="submit" onClick={() => console.log(1)} className="comment-area__submit">
              提交评论
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {

}

export default Comment
