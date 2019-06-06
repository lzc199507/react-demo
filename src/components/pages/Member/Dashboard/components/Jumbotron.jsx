import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({ history }) => {
  return (
    <div className="jumbotron">
      <header className="header transparent">
        <span className="left">
          <i className="icon-angle-left icon" onClick={() => history.go(-1)} />
        </span>
        <span className="middle" />
        <div className="right"><div onClick={() => history.push({ pathname: '/member/letter' })}><span className="icon-bell-o icon" /></div></div>
      </header>
      <div className="member">
        <img alt="menberImg" src="http://m.xishiqu.com/m/images/default-avatar.png" />
        <span className="nick-name" style={{ overflow: 'auto', width: 'auto' }}>15820302224</span>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  history: PropTypes.object,
}

export default Jumbotron
