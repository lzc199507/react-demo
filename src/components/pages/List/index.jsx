/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Xheader from '../../common/Xheader'
import Xcategory from '../../common/Xcategory'
import Xfooter from '../../common/Xfooter'
import { queryCategoryList } from '../../../server'

const List = (props) => {
  const {
    cityCode, dispatch, history, frontCate,
  } = props
  console.log(props)

  useEffect(() => {
    dispatch({
      type: 'init',
      Title: '启动项目!',
    })
  }, [])

  useEffect(() => {
    if (cityCode !== '') {
      console.log('cityCode', cityCode)
      console.log('frontCate', frontCate)
      const params = {
        frontCate,
        date: '',
        order: '-1',
        page: '1',
        cityCode,
      }
      console.log(params)
      queryCategoryList(params).then((res) => {
        console.log(res)
        // store.dispatch({
        //   type: 'initListData',
        //   initListData: res.data.result,
        // })
      })
    }
  }, [frontCate, cityCode])

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
        <div className="sticky"><Xcategory {...XcategoryProps} /></div>
      </div>
      <Xfooter history={history} tabNav={1} />
    </div>
  )
}

export default connect((state) => {
  const { cityCode, initListData, categoryIdx } = state
  let frontCate = ''
  if (categoryIdx !== 0) {
    frontCate = initListData.frontCateInfo[categoryIdx - 1].pinyinName
  }
  return { cityCode, frontCate }
})(List)
