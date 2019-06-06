import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'src/styles/member.scss'
import Dashboard from './Dashboard'
import Letter from './Letter'
import Discount from './Discount'

const Member = () => {
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

export default Member
