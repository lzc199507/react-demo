/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Comment = ({ history, detailInfo, cityName }) => {
  const [inputValue, setInputValue] = useState('')
  const getInput = (e) => {
    const { value } = e.target
    setTimeout(() => {
      setInputValue(value)
    }, 300)
  }
  return (
    <div id="wrapper-films.comment">
      <div id="comment" className="page">
        <div className="page__header" type="primary">
          <div className="left" onClick={() => history.go(-1)}>
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
          {/* 顶部文本域部分 */}
          <div className="comment-area clearfix">
            <textarea placeholder="聊聊你的感受..." onKeyUp={e => getInput(e)} />
            <button type="submit" onClick={() => console.log(1)} className="comment-area__submit">
              提交评论
            </button>
          </div>

          {/* 中间上传图片部分 */}
          <div className="comment-area-bar__wrapper">
            <div className="bar__location">
              <i className="icon icon-map" />
              <span>{cityName}</span>
            </div>
            <div className="bar__word-counts">
              <span className={inputValue.length > 350 ? 'alarm' : ''}>
                {inputValue.length < 351 ? inputValue.length : 350 - inputValue.length}
                /350 字
              </span>
            </div>
            <div className="image-uploader">
              <div className="select-btn"><i className="icon icon-camera" /></div>
              <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" capture="camera" multiple="multiple" style={{ display: 'none', border: 'none' }} />
            </div>
          </div>

          {/* 底部关联电影部分 */}
          <div className="related-movie">
            <div className="poster__wrapper">
              <img alt="img" src={detailInfo.filmImg} className="poster-img" />
            </div>
            <div className="movie__info">
              <h2>{detailInfo.filmName}</h2>
              <div className="score__wrapper">
                <span>
                  <label>豆瓣</label>
                  {detailInfo.scoreD}
                </span>
                <span>
                  <label>格瓦拉</label>
                  {detailInfo.scoreG}
                </span>
              </div>
              <p className="critic">痞先生说：</p>
              <p className="criticism">{detailInfo.filmDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  history: PropTypes.object,
  detailInfo: PropTypes.object,
  cityName: PropTypes.string,
}

export default connect((state) => {
  const { cityName } = state.app
  const { movieDetailInfo: detailInfo } = state.movie
  return { detailInfo, cityName }
})(Comment)
