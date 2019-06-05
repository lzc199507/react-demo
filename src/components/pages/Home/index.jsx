import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { catagoryIndexInfo, getValue } from 'utils/dictionary'
import Xheader from 'components/common/Xheader'
import Xcategory from 'components/common/Xcategory'
import Xfooter from 'components/common/Xfooter'
import Slideshow from './components/Slideshow'
import Recommends from './components/Recommends'
import Show from './components/Show'
import MainContent from './components/MainContent'
import Favours from './components/Favours'

const Home = (props) => {
  const {
    history, dispatch, initIndexData = {},
  } = props
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: 'init',
      payload: {
        Title: '启动项目!',
      },
    })
  }, [])

  const {
    activitySevenInfo = [], bannerInfo = [], mktInfo = [],
    activityCateInfo = [], activityLikeInfo = [],
  } = initIndexData

  const handleCheckMore = (pyName) => {
    let idx = getValue(catagoryIndexInfo, pyName)
    dispatch({
      type: 'resetListData',
    })
    dispatch({
      type: 'setCategoryIdx',
      payload: {
        categoryIdx: idx,
      },
    })
    history.push({ pathname: '/list' })
  }

  return (
    <div id="wrapper-home">
      <div id="home" className="page" style={{ paddingTop: ' 0rem' }}>
        <Xheader history={history} />
        <div className="block-wrapper">
          <Slideshow data={bannerInfo} />
          <Xcategory history={history} />
          {mktInfo.length !== 0 && <Recommends data={mktInfo} />}
        </div>
        <div className="block-wrapper">
          {activitySevenInfo.length !== 0 && <Show history={history} data={activitySevenInfo} />}
          {activityCateInfo.length !== 0 && <MainContent data={activityCateInfo} handleCheckMore={handleCheckMore} />}
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

Home.propTypes = {
  initIndexData: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect((state) => {
  const { initIndexData } = state.app
  return { initIndexData }
})(Home)
