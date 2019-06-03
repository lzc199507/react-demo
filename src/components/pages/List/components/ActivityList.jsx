/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { isEqual } from 'lodash/lang'
import { ListView } from 'antd-mobile'
import { usePrevious } from 'utils/hooks'


const ActivityList = ({
  data = [], isFilm, history, page, changPage, hasMore,
}) => {
  const listEl = useRef(null)

  const prevData = usePrevious(data)

  const [dataSource, setDataSource] = useState(() => new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  }))

  useEffect(() => {
    if (!isEqual(data, prevData)) {
      setDataSource(dataSource.cloneWithRows(data))
    }
  }, [data])

  const linkToDetail = name => history.push({ pathname: `/detail/${name}` })
  const linkToMovieDetail = id => history.push({ pathname: `/moviedetail/${id}` })

  const row = (rowData, sectionID, rowID) => {
    if (!isFilm) {
      let Price = ''
      if (rowData.hasTicket) {
        Price = (
          <div>
            <span>
              ￥
              {rowData.lowPrice}
            </span>
            <span className="sub">起</span>
          </div>
        )
      }
      return (
        <div key={rowID} onClick={() => linkToDetail(rowData.pinyinName)} className="node node--activity horizontal">
          <div className="thumbnail" style={{ backgroundImage: `url(${rowData.actImgUrl})` }} />
          <div className="main">
            <h1 className="title">{rowData.actName}</h1>
            <div className="date">{rowData.actTime}</div>
            <div className="venue">{rowData.veName}</div>
            <div className="tags" />
            <div className="price">
              {Price}
            </div>
            <div className="quote">{rowData.intro}</div>
          </div>
        </div>
      )
    }
    let filmTime = ''
    let filmBtn = ''
    if (rowData.openingDate !== '') {
      filmTime = (
        <div className="i time">{rowData.openingDate}</div>
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
      <div key={rowID} onClick={() => linkToMovieDetail(rowData.filmId)} className="node node--film horizontal">
        <div className="thumbnail" style={{ backgroundImage: `url(${rowData.filmImg})` }} />
        <div className="main">
          <div>
            <h1 className="i title">{rowData.filmName}</h1>
            <div className="i scores">
              <span className="score score-db">
                <label className="score__source">豆瓣</label>
                {rowData.scoreD}
              </span>
              <span className="score score-gwl">
                <label className="score__source">淘票票</label>
                {rowData.scoreG}
              </span>
            </div>
            {filmTime}
            <div className="i quote" />
            <div className="i actors">{rowData.filmActor}</div>
          </div>
          {filmBtn}
        </div>
      </div>
    )
  }

  const onEndReached = () => {
    if (hasMore) {
      page++
      setTimeout(() => {
        changPage(String(page))
      }, 800)
    }
  }


  return (
    <div className="node-list">
      {
        data.length === 0 && (
          <div className="empty">暂无演出</div>
        )
      }
      {
        data.length > 0 && (
        <ListView
          key="1"
          ref={listEl}
          dataSource={dataSource}
          renderFooter={
            () => {
              if (hasMore) {
                return (
                  <div className="loading" style={{ display: hasMore ? 'block' : 'none' }} />
                )
              }
              return (
                <div style={{ textAlign: 'center' }}>全部加载完啦~</div>
              )
            }
          }
          renderRow={row} // 渲染你上边写好的那个row
          useBodyScroll
          onEndReached={onEndReached}
          onEndReachedThreshold={10}
          pageSize={8}
        />
        )
      }
    </div>
  )
}

ActivityList.propTypes = {
  data: PropTypes.array,
  isFilm: PropTypes.bool,
  history: PropTypes.object,
  page: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  ),
  changPage: PropTypes.func,
  hasMore: PropTypes.bool,
}

export default ActivityList
