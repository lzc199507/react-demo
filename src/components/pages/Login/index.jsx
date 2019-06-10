import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'src/styles/login.scss'
import Toast from 'utils/toast'

const Login = (props) => {
  const { dispatch, history } = props
  const [tab, setTab] = useState(0)
  const [eye, setEye] = useState(0)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [btnAllow, setBtnAllow] = useState(0)

  useEffect(() => {
    if (userName !== '' && password !== '') {
      setBtnAllow(1)
    } else {
      setBtnAllow(0)
    }
  }, [userName, password])

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleLoging = () => {
    console.log('userName', userName)
    console.log('password', password)
    Toast.success('登录成功,稍后进行跳转')
    setTimeout(() => {
      // Toast.close()
      dispatch({
        type: 'setSignIn',
        payload: { isLogin: true },
      })
      history.push({ pathname: '/member' })
    }, 2000)
    // history.push({ pathname: '/member' })
  }

  const renderTabContent = (tabNum) => {
    if (!tabNum) {
      return (
        <div className="tab-content__shortcut" style={{ textAlign: 'center' }}>
          暂不支持短信登录
        </div>
      )
    }
    return (
      <div className="tab-content__account">
        <div className="input__account">
          <i className="icon icon-admin" />
          <input onChange={handleUserName} type="text" name="account" placeholder="请输入登录账号" className="form-control" />
        </div>
        <div className="input__password">
          <i className="icon icon-lock" />
          <input onChange={handlePassword} type={eye ? 'text' : 'password'} maxLength="18" name="password" placeholder="请输入登录密码" className="form-control" />
          <button type="button" onClick={() => setEye(!eye)}><i className={eye ? 'icon icon icon-eye-open' : 'icon icon icon-eye-close'} /></button>
        </div>
        <button type="button" onClick={handleLoging} className={`btn btn-default login-btn ${btnAllow ? 'login-btn--activite' : ''}`} disabled={!btnAllow}>登录</button>
        <a className="forgot-pwd">找回密码</a>
        <a className="register">新用户注册</a>
      </div>
    )
  }

  return (
    <div id="wrapper-login">
      <div id="login" className="page">
        <div className="login__header" />
        <div className="page__tabs">
          <ul>
            <li className={tab ? '' : 'tabs--activated'}><a name="shortcut" onClick={() => setTab(0)}>短信验证</a></li>
            <li className={tab ? 'tabs--activated' : ''}><a name="account" onClick={() => setTab(1)}>账号密码</a></li>
          </ul>
        </div>
        <div className="page__tab-content">
          {renderTabContent(tab)}
          <div className="other-methods">
            <div className="other-methods__qq icon icon-qq">
              {/* <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101214754&amp;redirect_uri=http%3A%2F%2Fwww.xishiqu.com%2FthirdPartyLogin%2Fqq%2Fcallback.php&amp;state=a4a3caf84695b6102ebe5d1ef831bd4d&amp;scope=get_user_info" /> */}
            </div>
            <div className="other-methods__weibo icon icon-weibo">
              {/* <a href="https://api.weibo.com/oauth2/authorize?client_id=2689896212&amp;redirect_uri=http%3A%2F%2Fm.xishiqu.com%2FthirdPartyLogin%2Fweibo&amp;response_type=code" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
}

export default connect()(Login)
