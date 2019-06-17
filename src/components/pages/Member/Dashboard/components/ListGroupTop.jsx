import React from 'react'
import PropTypes from 'prop-types'

const { Fragment } = React

const ListGroup = ({ history }) => {
  return (
    <Fragment>
      <div className="list-group with-icon">
        <a className="list-group-item my-order" onClick={() => history.push({ pathname: '/member/order' })}>
          <span className="icon icon-list" />
          <span className="list-title">
            演出订单
          </span>
        </a>
        <a className="list-group-item my-film" onClick={() => history.push({ pathname: '/films/my-film' })}>
          <span className="icon icon-list" />
          <span className="list-title">电影订单</span>
        </a>
        <a className="list-group-item my-card" onClick={() => history.push({ pathname: '/member/discount' })}>
          <span className="icon icon-credit-card" />
          <span className="list-title">我的卡券</span>
        </a>
        <a className="list-group-item my-wallet" onClick={() => history.push({ pathname: '/member/wallet' })}>
          <span className="icon icon-suitcase" />
          <span className="list-title" style={{ borderBottom: 'none' }}>我的钱包</span>
        </a>
      </div>
      <div className="list-group with-icon">
        <a className="list-group-item my-favorite" onClick={() => history.push({ pathname: '/member/favorite' })}>
          <span className="icon icon-heart-o" />
          <span className="list-title">我的收藏</span>
        </a>
        <a className="list-group-item my-address" onClick={() => history.push({ pathname: '/member/address' })}>
          <span className="icon icon-address" />
          <span className="list-title">收货地址</span>
        </a>
        <a className="list-group-item my-password" onClick={() => history.push({ pathname: '/member/password/change' })}>
          <span className="icon icon-user" />
          <span className="list-title">修改密码</span>
        </a>
        <a className="list-group-item my-service" href="tel:400-003-9992">
          <span className="icon icon-service" />
          <span className="list-last">客服电话 ：400-003-9992</span>
        </a>
      </div>
    </Fragment>
  )
}

ListGroup.propTypes = {
  history: PropTypes.object,
}

export default ListGroup
