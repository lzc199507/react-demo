/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const AccurateSearch = (props) => {
  const {
    activitiesData, filmData, history,
  } = props

  const [renderMore, setRenderMore] = useState(true)
  const [activitiesList, setActivitiesList] = useState([])

  useEffect(() => {
    if (activitiesData.length !== 0) {
      if (activitiesData.length > 2) {
        let newData = activitiesData.slice(0, 2)
        setActivitiesList(newData)
      } else {
        setActivitiesList(activitiesData)
        setRenderMore(false)
      }
    } else {
      setActivitiesList([])
    }
  }, [activitiesData])

  const handleMore = () => {
    setRenderMore(false)
    setActivitiesList(activitiesData)
  }

  const linkToDt = name => history.push({ pathname: `/detail/${name}` })

  const linkToMovieDetail = id => history.push({ pathname: `/moviedetail/${id}` })

  return (
    <div className="search-content">
      <div className="accurate search-resoult">
        <div className="resoult__content clearfix">
          {
            activitiesList.length > 0 && (
              <div className="activity-list">
                <h3 className="title">演出</h3>
                <div className="content">
                  {
                    activitiesList.map((item, idx) => {
                      return (
                        <div key={idx} className="node node--activity horizontal" onClick={() => linkToDt(item.pinyinName)}>
                          <div className="thumbnail" style={{ backgroundImage: `url(${item.actImgUrl})` }} />
                          <div className="main">
                            <h1 className="title">{item.actName}</h1>
                            <div className="date">{item.actTime}</div>
                            <div className="venue">{item.name}</div>
                            <div className="tags" />
                            <div className="price">
                              <div>
                                <span>
                                  ￥
                                  {item.lowPrice}
                                </span>
                                <span className="sub">起</span>
                              </div>
                              {
                                item.isPreSale ? <div className="status">预定中</div> : null
                              }
                            </div>
                            <div className="quote">{item.intro}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                  {
                    renderMore && (
                      <div className="more--activity" onClick={handleMore}>
                        查看更多演出
                        <span className="icon-more" />
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }
          {
            filmData.length > 0 && (
              <div className="film-list">
                <h3 className="title">电影</h3>
                <div className="content">
                  {
                    filmData.map((item, idx) => {
                      return (
                        <div key={idx} className="node node--film horizontal" onClick={() => linkToMovieDetail(item.filmId)}>
                          <div className="thumbnail" style={{ backgroundImage: `url(${item.filmImg})` }} />
                          <div className="main">
                            <div>
                              <h1 className="i title">{item.filmName}</h1>
                              <div className="i scores">
                                <span className="score score-db">
                                  <label className="score__source">豆瓣</label>
                                  {item.scoreD}
                                </span>
                                <span className="score score-gwl">
                                  <label className="score__source">淘票票</label>
                                  {item.scoreG}
                                </span>
                              </div>
                              <div className="i time" />
                              <div className="i quote" />
                              <div className="i actors">{item.filmActor}</div>
                            </div>
                            <span className="btn btn-seat">比价</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          }
        </div>
        {activitiesData.length === 0 && filmData.length === 0 && <div className="no-resoult">没有相关结果哦~~</div>}
      </div>
    </div>
  )
}

AccurateSearch.propTypes = {
  activitiesData: PropTypes.array,
  filmData: PropTypes.array,
  history: PropTypes.object,
}

export default AccurateSearch
