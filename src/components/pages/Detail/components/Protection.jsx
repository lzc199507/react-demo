/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Protection = () => {
  const [showing, setShowing] = useState(false)
  return (
    <div className="protection">
      <div className="protection__content" onClick={() => setShowing(true)}>
        <div className="protection__icons">
          <span className="icon-display icon-secured">
            担保交易
          </span>
          <span className="icon-display icon-guaranteed">
            保证金制度
          </span>
          <span className="icon-display icon-accompany">
            先行赔付
          </span>
          <span className="icon-display icon-seller">
            1家竞价
          </span>
        </div>
        <span className="icon icon-angle-right" />
      </div>
      <ReactCSSTransitionGroup
        transitionEnter
        transitionLeave
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionName="animated"
      >
        <div className="protection__modal modal animated fadeIn" style={{ display: showing ? 'block' : 'none' }} key="amache" onClick={() => setShowing(false)}>
          <div className="modal__dialog animated fadeInUp" style={{ display: showing ? 'block' : 'none' }} key="amache">
            <div className="modal__title">
            购票保障
            </div>
            <div className="modal__content">
              <ul className="list">
                <li className="item icon-secured">
                  <h6>
                    担保交易
                  </h6>
                  <div>
                    由西十区提供交易担保，演出结束后无争议才打款给卖家;
                  </div>
                </li>
                <li className="item icon-guaranteed">
                  <h6>
                    保证金制度
                  </h6>
                  <div>
                    卖家已缴纳保证金，用于担保此次交易;
                  </div>
                </li>
                <li className="item icon-accompany">
                  <h6>
                    先行赔付
                  </h6>
                  <div>
                    卖家无票、假票、票面不符等一旦违约先行赔付;
                  </div>
                </li>
                <li className="item icon-seller">
                  <h6>
                    1家竞价
                  </h6>
                  <div>
                    1卖家共同在线比价购买;
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Protection
