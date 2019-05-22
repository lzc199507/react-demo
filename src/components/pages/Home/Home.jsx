/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Xheader from '../../common/Xheader.jsx'
import Slideshow from './Slideshow.jsx'
import Hcotegory from './Hcategory.jsx'
import Recommends from './Recommends.jsx'
import Show from './Show.jsx'
import MainContent from './MainContent'
import Favours from './Favours'
import Xfooter from '../../common/Xfooter.jsx'

const Home = (props) => {
  const {
    history, cityCode, dispatch, initListData = {},
  } = props
  useEffect(() => {
    React.axios.get('http://localhost:1234/getIndexData', {
      params: {
        cityCode,
      },
    }).then((res) => {
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

  const {
    activitySevenInfo = [], bannerInfo = [], mktInfo = [], activityCateInfo = [], activityLikeInfo = [],
  } = initListData

  return (
    <div id="wrapper-home">
      <div id="home" className="page" style={{ paddingTop: ' 4.5rem' }}>
        <Xheader history={history} />
        <div className="block-wrapper">
          <Slideshow data={bannerInfo} />
          <Hcotegory history={history} />
          {mktInfo.length !== 0 && <Recommends data={mktInfo} />}
        </div>
        <div className="block-wrapper">
          {activitySevenInfo.length !== 0 && <Show history={history} data={activitySevenInfo} />}
          {/* {activityCateInfo.length !== 0 && <Concert data={activityCateInfo} />} */}
          {activityCateInfo.length !== 0 && <MainContent data={activityCateInfo} />}
          {activityLikeInfo.length !== 0 && <Favours data={activityLikeInfo} />}
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
