import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({ history }) => {
  return (
    <div className="jumbotron">
      <header className="header transparent">
        <span className="left">
          <i className="icon-angle-left icon" onClick={() => history.push({ pathname: '/home' })} />
        </span>
        <span className="middle" />
        <div className="right"><div onClick={() => history.push({ pathname: '/member/letter' })}><span className="icon-bell-o icon" /></div></div>
      </header>
      <div className="member">
        {/* <img alt="menberImg" src="http://m.xishiqu.com/m/images/default-avatar.png" /> */}
        <div className="avatarImg" />
        {/* <img alt="menberImg" src="http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%81%87%E7%AC%91%E7%94%B7%E5%AD%A9&step_word=&hs=0&pn=16&spn=0&di=222310&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1694582513%2C1492770648&os=4098127083%2C1024890722&simid=0%2C0&adpicid=0&lpn=0&ln=887&fr=&fmq=1560190586899_R&fm=result&ic=&s=undefined&hd=&latest=&copyright=&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F213%2Fw570h443%2F20190113%2Ftokg-hrpcmqw3897679.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fh_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3Fw6ptvsj_m99al08n88_80ujlmvduaa8aajfah_z%26e3Bip4s%3Fv6j%3Dptwgyt%26451%3Drvrw2j6_u5v7f%26s5v%3Dn%266%3Dl%2615vp%3Da%266u7gv%3D8aa%26p3%3Dg5gj%26p6%3Dl&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" /> */}
        <span className="nick-name" style={{ overflow: 'auto', width: 'auto' }}>158****2224</span>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  history: PropTypes.object,
}

export default Jumbotron
