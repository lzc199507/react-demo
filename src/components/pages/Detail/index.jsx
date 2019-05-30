/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { queryActivityDetail } from 'server'
import Header from './components/Header'
import BasicInfo from './components/BasicInfo'
import ActivityInfo from './components/ActivityInfo'
import Protection from './components/Protection'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const Detail = (props) => {
  const { history, match } = props
  const { name } = match.params
  const [detailInfo, setDetailInfo] = useState({})
  const [activitySeries, setActivitySeries] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    queryActivityDetail({ pinyinName: name })
      .then((res) => {
        res.data.result.activity && setDetailInfo(res.data.result.activity)
        res.data.result.activitySeries && setActivitySeries(res.data.result.activitySeries)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div id="wrapper-activity">
      <div className="page-group">
        <div id="activity" className="page">
          <Header history={history} />
          <BasicInfo data={detailInfo} />
          <ActivityInfo data={detailInfo} />
          <Protection />
          <MainContent data={detailInfo} activitySeries={activitySeries} />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Detail
