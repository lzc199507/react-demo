/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { queryCategoryList } from 'server'
import Xheader from 'components/common/Xheader'
import Xcategory from 'components/common/Xcategory'
import Xfooter from 'components/common/Xfooter'
import ActivityList from './components/ActivityList'
// import Test from './components/Calendar'

const List = (props) => {
  const {
    cityCode, dispatch, history, frontCate, list, date, order, page, hasMore,
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
      let loadingEl = document.createElement('div')
      loadingEl.classList.add('toast', 'toast-enter-active')
      loadingEl.innerHTML = '<div class="icon-loading" />'
      document.body.appendChild(loadingEl)

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
        document.body.removeChild(loadingEl)
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

  const activityListProps = {
    data: list,
    page,
    frontCate,
    isFilm,
    history,
    hasMore,
    changPage (newPage) {
      console.log('hasMore', hasMore)
      console.log('newPage', newPage)
      if (hasMore) {
        dispatch({
          type: 'setQueryParams',
          payload: {
            page: newPage,
          },
        })
      } else {
        console.log('page', page)
      }
    },
  }

  return (
    <div id="wrapper-category">
      <div id="category" className="page">
        <Xheader {...XheaderProps} />
        {/* <Test /> */}
        <div className=""><Xcategory {...XcategoryProps} /></div>
        <ActivityList {...activityListProps} />
      </div>
      {/* <div className="toast toast-enter-active">
        <div className="icon-loading" />
      </div> */}
      <Xfooter history={history} tabNav={1} />
    </div>
  )
}

export default connect((state) => {
  const {
    cityCode, initIndexData, categoryIdx,
  } = state.app
  const { listData } = state.listPage
  const { list, queryParams, hasMore } = listData
  const { date, order, page } = queryParams
  let frontCate = ''
  if (categoryIdx !== 0) {
    frontCate = initIndexData.frontCateInfo[categoryIdx - 1].pinyinName
  }
  return {
    cityCode, frontCate, list, date, order, page, hasMore,
  }
})(List)
