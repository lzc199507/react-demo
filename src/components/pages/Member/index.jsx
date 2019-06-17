import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'src/styles/member.scss'
import Dashboard from './Dashboard'
import Letter from './Letter'
import Discount from './Discount'

const Member = ({ isLogin, history }) => {
  useEffect(() => {
    if (!isLogin) {
      history.push({ pathname: '/login' })
    }
  }, [isLogin])

  const baseUrl = '/member'

  return (
    <div id="MemberPage">
      <Switch>
        <Route exact path={`${baseUrl}`} component={Dashboard} />
        <Route exact path={`${baseUrl}/letter`} component={Letter} />
        <Route exact path={`${baseUrl}/discount`} component={Discount} />
      </Switch>
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
