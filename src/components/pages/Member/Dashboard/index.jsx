import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Toast from 'utils/toast'
import Jumbotron from './components/Jumbotron'
import ListGroup from './components/ListGroupTop'

const Dashboard = (props) => {
  const { history, dispatch } = props
  const handleCheckout = () => {
    Toast.success('退出登录成功')
    setTimeout(() => {
      dispatch({
        type: 'setSignIn',
        payload: { isLogin: false },
      })
      history.push({ pathname: '/home' })
    }, 2000)
  }
  return (
    <div id="dashboard">
      <div className="wrapper wrap-content">
        <Jumbotron history={history} />
        <ListGroup history={history} />
        <div className="logout">
          <a className="btn btn-primary btn-block" onClick={handleCheckout}>退出登录</a>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect()(Dashboard)
