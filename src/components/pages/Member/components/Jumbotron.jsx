import React from 'react'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <header className="header transparent">
        <span className="left">
          <i className="icon-angle-left icon" href="http://m.xishiqu.com" />
        </span>
        <span className="middle" />
        <div className="right"><a href="http://m.xishiqu.com/member/letter"><span className="icon-bell-o icon" /></a></div>
      </header>
      <div className="member">
        <img alt="menberImg" src="http://m.xishiqu.com/m/images/default-avatar.png" />
        <span className="nick-name" style={{ overflow: 'auto', width: 'auto' }}>15820302224</span>
      </div>
    </div>
  )
}

export default Jumbotron
