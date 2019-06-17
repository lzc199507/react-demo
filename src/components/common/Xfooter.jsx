/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile'

const footerNav = [
  {
    text: '首页',
    iconClass: 'i home',
    path: '/',
  },
  {
    text: '分类',
    iconClass: 'i category',
    path: '/list',
  },
  {
    text: '同趣',
    iconClass: 'i article',
    path: '/fun',
  },
  {
    text: '转票',
    iconClass: 'i ticket',
    path: '/zhuan',
  },
  {
    text: '我',
    iconClass: 'i my',
    path: '/member',
  },
]

const Xfooter = (props) => {
  const {
    tabNav, history, dispatch,
  } = props
  const [nav, setNav] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setNav(tabNav)
  }, [tabNav])

  const navTo = (index) => {
    if (index === 2 || index === 3) {
      setShowDialog(true)
      return
    }
    dispatch({
      type: 'setCategoryIdx',
      categoryIdx: 0,
    })
    history.push({ pathname: footerNav[index].path })
  }

  return (
    <div className="bottom-toolbar">
      {
        footerNav.map((item, index) => (
          <div key={index} className={index === nav ? 'item active' : 'item'} onClick={() => navTo(index)}>
            <span className={item.iconClass} />
            <span className="text">{item.text}</span>
          </div>
        ))
      }
      {
        showDialog && (
          <div>
            <div className="dialog">
              <div className="dialog__content">
                <div className="dialog__body">
                  该项功能需要下载西十区APP
                </div>
                <div className="dialog__footer">
                  <div className="btn cancel" onClick={() => setShowDialog(false)}>取消</div>
                  <div className="btn confirm" onClick={() => Toast.info('别下载了，我还没开发手机APP呢= =', 3)}>立即下载</div>
                </div>
              </div>
            </div>
            <div className="dialog-backdrop" />
          </div>
        )
      }
    </div>
  )
}

export default connect()(Xfooter)
