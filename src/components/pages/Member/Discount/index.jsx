import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { queryMemberDiscount } from 'server'

const Discount = ({ history }) => {
  const [list, setList] = useState([])
  const [tab, setTab] = useState(1)
  useEffect(() => {
    queryMemberDiscount().then(res => setList(res.data.coupons)).catch(err => console.log(err))
  }, [])
  return (
    <div id="discount">
      <div className="wrapper wrap-content">
        <div className="header">
          <i className="left"><span className="icon-angle-left icon" onClick={() => history.go(-1)} /></i>
          <div className="middle">
            我的卡券
          </div>
          <div className="right" />
        </div>

        <div className="tab">
          <ul>
            <li className={tab === 1 ? 'active' : ''}><a className="item" onClick={() => setTab(1)}>优惠券</a></li>
            <li className={tab === 2 ? 'active' : ''}><a className="item" onClick={() => setTab(2)}>文化卡</a></li>
          </ul>
        </div>

        <div className="tab-content">
          <div className="coupon-list node-list tab-pane" style={{ display: tab === 1 ? 'block' : 'none' }}>
            <div className="form">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="请输入优惠码" />
                <div className="add-on">
                  <button type="button" className="btn btn-default">绑定</button>
                </div>
              </div>
            </div>

            <ul>
              {
                list.length > 0 && list.map((item, idx) => (
                  <li key={idx} className="node-coupon disabled">
                    <div className="coupon-header">
                      <span className="coupon-title">
                        ¥
                        {item.packageAmt}
                        抵用券
                      </span>
                      <span className="coupon-origin">{item.status}</span>
                    </div>
                    <div className="coupon-body">
                      <span>{item.frontCate}</span>
                      <br />
                      <span className="remark">{item.discount[0]}</span>

                    </div>
                    <div className="coupon-footer">
                      <span className="coupon-limit">{item.info}</span>
                      <span className="expire-date">
                        有效期：
                        {item.expireTime}
                      </span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="card-list node-list tab-pane" style={{ display: tab === 2 ? 'block' : 'none' }}>
            <p className="empty" style={{ color: '#999' }}>没有可用的文化卡</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Discount.propTypes = {
  history: PropTypes.object,
}

export default Discount
