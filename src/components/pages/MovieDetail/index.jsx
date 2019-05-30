import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { queryMovieDetail } from 'server'
import PageInfo from './components/PageInfo'
import PageComment from './components/PageComment'
import PageBtn from './components/PageBtn'

const MovieDetail = (props) => {
  const [detailInfo, setDetailInfo] = useState({})
  const { history, match } = props
  const { filmId } = match.params
  console.log('filmId', filmId)
  useEffect(() => {
    queryMovieDetail({ filmId })
      .then(res => setDetailInfo(res.data.result))
  }, [])
  return (
    <div id="wrapper-films.film">
      <div id="film" className="page">
        <PageInfo data={detailInfo} />
        <PageComment data={[]} />
        <PageBtn history={history} />
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}

export default MovieDetail
