import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from './components/Jumbotron'
import ListGroup from './components/ListGroupTop'

const Dashboard = ({ history }) => {
  return (
    <div id="dashboard">
      <div className="wrapper wrap-content">
        <Jumbotron history={history} />
        <ListGroup history={history} />
        <div className="logout">
          <a className="btn btn-primary btn-block" href="http://localhost:3000/#/home">退出登录</a>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  history: PropTypes.object,
}

export default Dashboard
