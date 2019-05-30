/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Xheader from '../../common/Xheader'
import Xcategory from '../../common/Xcategory'
import Xfooter from '../../common/Xfooter'
import ActivityList from './components/ActivityList'
// import Test from './components/Calendar'
import { queryCategoryList } from '../../../server'

const List = (props) => {
  const {
    cityCode, dispatch, history, frontCate, list, date, order, page,
  } = props

  const [isFilm, setIsFilm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: 'init',
      Title: '启动项目!',
    })
  }, [])

  useEffect(() => {
    if (cityCode !== '') {
      frontCate === 'film' ? setIsFilm(true) : setIsFilm(false)
      const params = {
        frontCate,
        date,
        order,
        page,
        cityCode,
      }
      // console.log(params)
      queryCategoryList(params).then((res) => {
        dispatch({
          type: 'setListData',
          payload: res.data.result,
        })
      })
    }
  }, [frontCate, cityCode, date, order, page])

  const XheaderProps = {
    showBack: true,
    history,
  }

  const XcategoryProps = {
    showAll: true,
    history,
  }

  return (
    <div id="wrapper-category">
      <div id="category" className="page">
        <Xheader {...XheaderProps} />
        {/* <Test /> */}
        <div className=""><Xcategory {...XcategoryProps} /></div>
        <ActivityList data={list} isFilm={isFilm} history={history} />
      </div>
      <Xfooter history={history} tabNav={1} />
    </div>
  )
}

export default connect((state) => {
  const {
    cityCode, initIndexData, categoryIdx,
  } = state.app
  const { listData } = state.listPage
  const { list, queryParams } = listData
  const { date, order, page } = queryParams
  let frontCate = ''
  if (categoryIdx !== 0) {
    frontCate = initIndexData.frontCateInfo[categoryIdx - 1].pinyinName
  }
  return {
    cityCode, frontCate, list, date, order, page,
  }
})(List)
