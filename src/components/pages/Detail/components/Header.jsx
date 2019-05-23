/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Header = ({ history }) => {
  const [ShowShare, setShowShare] = useState(false)
  const navigateTo = () => history.go(-1)
  const shareShow = () => setShowShare(true)
  const shareNone = () => setShowShare(false)
  return (
    <div className="page__header">
      <div className="left" onClick={navigateTo}>
        <i className="icon icon-angle-left" />
      </div>
      <div className="middle">
        <span>
          演出详情
        </span>
      </div>
      <div className="right">
        <div className="share">
          <i className="icon icon-dynshare" onClick={shareShow} />
          <ReactCSSTransitionGroup
            transitionEnter
            transitionLeave
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionName="animated"
          >
            <div className="share__modal modal animated fadeIn" style={{ display: ShowShare ? 'block' : 'none' }} onClick={shareNone}>
              <div className="modal__dialog animated fadeInUp " style={{ display: ShowShare ? 'block' : 'none' }}>
                <div className="modal__title">
                  分享
                </div>
                <div className="modal__content">
                  <div className="item qq">
                    <i className="icon icon-qq" />
                    QQ好友
                  </div>
                  <div className="item qq-zone">
                    <i className="icon icon-qq-zone" />
                    QQ空间
                  </div>
                  <div className="item weibo">
                    <i className="icon icon-weibo" />
                    新浪微博
                  </div>
                </div>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
  )
}

export default Header
