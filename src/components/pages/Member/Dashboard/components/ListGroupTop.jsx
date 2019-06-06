import React from 'react'

const { Fragment } = React

const ListGroup = ({ history }) => {
  return (
    <Fragment>
      <div className="list-group with-icon">
        <a className="list-group-item my-order" href="http://m.xishiqu.com/member/order">
          <span className="icon icon-list" />
          <span className="list-title">
            演出订单
          </span>
        </a>
        <a className="list-group-item my-film" href="/films/my-film">
          <span className="icon icon-list" />
          <span className="list-title">电影订单</span>
        </a>
        <a className="list-group-item my-card" onClick={() => history.push({ pathname: '/member/discount' })}>
          <span className="icon icon-credit-card" />
          <span className="list-title">我的卡券</span>
        </a>
        <a className="list-group-item my-wallet" href="http://m.xishiqu.com/member/wallet">
          <span className="icon icon-suitcase" />
          <span className="list-title" style={{ borderBottom: 'none' }}>我的钱包</span>
        </a>
      </div>
      <div className="list-group with-icon">
        <a className="list-group-item my-favorite" href="http://m.xishiqu.com/member/favorite">
          <span className="icon icon-heart-o" />
          <span className="list-title">我的收藏</span>
        </a>
        <a className="list-group-item my-address" href="http://m.xishiqu.com/member/address">
          <span className="icon icon-address" />
          <span className="list-title">收货地址</span>
        </a>
        <a className="list-group-item my-password" href="http://m.xishiqu.com/member/password/change">
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

export default ListGroup
