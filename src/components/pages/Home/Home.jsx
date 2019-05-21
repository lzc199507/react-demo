/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Huaju from './Huaju.jsx'
import Slideshow from './Slideshow.jsx'
import Xheader from '../../common/Xheader.jsx'
import Xfooter from '../../common/Xfooter.jsx'
import Hcotegory from './Hcategory.jsx'
import Recommends from './Recommends.jsx'
import Show from './Show.jsx'
// import Hlist from './Hlist.jsx'
import Concert from './Concert.jsx'

// import MovieData from './MovieData.jsx'


const Home = (props) => {
  const {
    history, cityCode, dispatch, initListData = {},
  } = props
  console.log('###', props)
  useEffect(() => {
    console.log('--', cityCode)
    React.axios.get('http://localhost:1234/getIndexData', {
      params: {
        cityCode,
      },
    }).then((res) => {
      console.log(res)
      let data = res.data.result
      dispatch({
        type: 'initListData',
        initListData: data,
      })
    })
      .catch((err) => {
        console.log(err)
      })
  }, [cityCode])

  const { activitySevenInfo = [], bannerInfo =[] } = initListData

  return (
    <div id="wrapper-home">
      <div id="home" className="page">
        <Xheader history={history} />
        <div className="block-wrapper">
          <Slideshow data={bannerInfo} />
        </div>
        <div className="block-wrapper">
          <Hcotegory history={history} />
          <Recommends />
          {activitySevenInfo.length !== 0 && <Show history={history} data={activitySevenInfo} />}
          <Concert />
          <Huaju />

        </div>
        <div className="report">
          <span className="text">
              举报电话：
            <a href="tel:021-52398129" className="tel">021-52398129-403</a>
          </span>
        </div>
      </div>
      <Xfooter history={history} tabNav={0} />

    </div>

  )
}

export default connect((state) => {
  const { cityCode, initListData } = state
  return { cityCode, initListData }
})(Home)
