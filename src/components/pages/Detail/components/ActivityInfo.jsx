/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ActivityInfo = ({ data = {} }) => {
  const [showing, setShowing] = useState(false)
  return (
    <div className="activity-info">
      <div className="info-item address">
        <span className="text-content">
          <i className="icon icon-marker" />
          {data.veName}
        </span>
      </div>
      {
        data.isPreSale !== 0 && (
          <div className="booking">
            <div className="booking__content info-item" onClick={() => setShowing(true)}>
              <span className="text-content">
                <span className="orange">
                  预订
                </span>
                预订演出票的相关说明
              </span>
              <span className="icon icon-angle-right" />
            </div>
            <ReactCSSTransitionGroup
              transitionEnter
              transitionLeave
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="animated"
            >
              <div className="booking__modal modal animated fadeIn" style={{ display: showing ? 'block' : 'none' }} key="amache" onClick={() => setShowing(false)}>
                <div className="modal__dialog animated fadeInUp " style={{ display: showing ? 'block' : 'none' }} key="amache">
                  <div className="modal__title">
                    预订票提示
                  </div>
                  <div className="modal__content">
                    <ol className="list">
                      <li>
                        当前本演出的全部或部分场次、票档为预订状态， 即主办方暂未开始开票;
                      </li>
                      <li>
                        该演出具体开票日期将由主办方、演出场馆及相关卖家确定;
                      </li>
                      <li>
                        演出票是稀缺资源，订票完成后不能取消。若您因个人原因无法观演，您可在西十区卖票平台上挂牌售卖;
                      </li>
                      <li>
                        正式开票后，西十区将督促平台上的票源方尽快为用户配票（根据用户付款的先后顺序）;
                      </li>
                      <li>
                        如根据先后顺序配票后您未能获得演出票，您可以发布求票信息;
                      </li>
                      <li>
                        客服电话：400-003-9992。服务时间：9:00-22:00。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        )
      }
    </div>
  )
}

export default ActivityInfo
