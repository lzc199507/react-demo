/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

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
    path: '/my',
  },
]

const Xfooter = (props) => {
  const { tabNav, history, dispatch } = props
  const [nav, setNav] = useState(0)
  useEffect(() => {
    setNav(tabNav)
  }, [tabNav])

  const navTo = (index) => {
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
    </div>
  )
}

export default connect()(Xfooter)
