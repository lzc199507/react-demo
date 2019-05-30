/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import SortsModal from './SortsModal'

const Xheader = (props) => {
  const {
    cityName, showBack = false, history, dispatch,
  } = props
  const navigateTo = () => { history.push({ pathname: '/city' }) }
  const linkToSearch = () => { history.push({ pathname: '/search' }) }
  const backHome = () => { history.push({ pathname: '/' }) }
  const handleSorts = () => {
    dispatch({
      type: 'setListData',
      payload: {
        showSortsModal: true,
      },
    })
  }
  const handleDate = () => {}

  const homeRightNode = (
    <div className="right">
      <div className="icon icon-gift active">
        <div className="task-list" style={{ display: 'none' }}>
          <div className="item active">
            <span className="text">首次消费返现</span>
          </div>
        </div>
      </div>
    </div>
  )

  const listRightNode = (
    <div className="right">
      <div className="sorts" onClick={handleSorts}>
        <i className="btn btn-sort" />
      </div>
      <i className="btn-date" onClick={handleDate} />
    </div>
  )

  return (
    <div className="page__header">
      <div className="left">
        {showBack && (<i onClick={backHome} className="icon icon-angle-left" />)}
        <div onClick={navigateTo}>
          {cityName}
          &nbsp;
          <i className="icon icon-angle-down" aria-hidden="true" />
        </div>
      </div>
      <div className="middle">
        <div className="search" onClick={linkToSearch}>
          <i className="icon icon-search" />
          <input type="text" placeholder="搜索明星、演出、场馆" />
        </div>
      </div>
      {showBack ? listRightNode : homeRightNode}
      {showBack && <SortsModal />}
    </div>
  )
}

export default connect((state) => {
  const { cityName } = state.app
  return { cityName }
})(Xheader)
