import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'src/styles/dashboard.scss'
import Jumbotron from './components/Jumbotron'

const Member = ({ isLogin, history }) => {
  useEffect(() => {
    console.log('isLogin', isLogin)
    if (!isLogin) {
      history.push({ pathname: '/login' })
    }
  }, [isLogin])
  return (
    <div id="dashboard">
      <div className="wrapper wrap-content">
        <Jumbotron />
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
          <a className="list-group-item my-card" href="http://m.xishiqu.com/member/discount">
            <span className="icon icon-credit-card" />
            <span className="list-title">我的卡券</span>
          </a>
          <a className="list-group-item my-wallet" href="http://m.xishiqu.com/member/wallet">
            <span className="icon icon-suitcase" />
            <span className="list-title">我的钱包</span>
          </a>
        </div>
      </div>
    </div>
  )
}

Member.propTypes = {
  isLogin: PropTypes.bool,
  history: PropTypes.object,
}

export default connect((state) => {
  const { isLogin } = state.app
  return { isLogin }
})(Member)
