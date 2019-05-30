/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const ActivityList = ({ data, isFilm, history }) => {
  const linkToDetail = name => history.push({ pathname: `/detail/${name}` })
  const linkToMovieDetail = id => history.push({ pathname: `/moviedetail/${id}` })

  return (
    <div className="node-list">
      {
        data.length === 0 && (
          <div className="empty">暂无演出</div>
        )
      }
      {
        data.length > 0 && !isFilm && data.map((item, index) => {
          let Price = ''
          if (item.hasTicket) {
            Price = (
              <div>
                <span>
                  ￥
                  {item.lowPrice}
                </span>
                <span className="sub">起</span>
              </div>
            )
          }
          return (
            <div key={index} onClick={() => linkToDetail(item.pinyinName)} className="node node--activity horizontal">
              <div className="thumbnail" style={{ backgroundImage: `url(${item.actImgUrl})` }} />
              <div className="main">
                <h1 className="title">{item.actName}</h1>
                <div className="date">{item.actTime}</div>
                <div className="venue">{item.veName}</div>
                <div className="tags" />
                <div className="price">
                  {Price}
                </div>
                <div className="quote">{item.intro}</div>
              </div>
            </div>
          )
        })
      }
      {
        data.length > 0 && isFilm && data.map((item, index) => {
          let filmTime = ''
          let filmBtn = ''
          if (item.openingDate !== '') {
            filmTime = (
              <div className="i time">{item.openingDate}</div>
            )
            filmBtn = (
              <span className="btn btn-seat btn-presale">预售</span>
            )
          } else {
            filmBtn = (
              <span className="btn btn-seat">比价</span>
            )
          }
          return (
            <div key={index} onClick={() => linkToMovieDetail(item.filmId)} className="node node--film horizontal">
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
                  {filmTime}
                  <div className="i quote" />
                  <div className="i actors">{item.filmActor}</div>
                </div>
                {filmBtn}
              </div>
            </div>
          )
        })
      }
      <div className="loading" style={{ display: 'none' }} />
    </div>
  )
}

ActivityList.propTypes = {
  data: PropTypes.array,
  isFilm: PropTypes.bool,
  history: PropTypes.object,
}

export default ActivityList
