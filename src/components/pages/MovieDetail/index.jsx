import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { queryMovieDetail } from 'server'
import PageInfo from './components/PageInfo'
import PageComment from './components/PageComment'
import PageBtn from './components/PageBtn'

const MovieDetail = (props) => {
  const {
    history, match, dispatch, detailInfo,
  } = props
  const { filmId } = match.params
  useEffect(() => {
    queryMovieDetail({ filmId })
      .then(res => dispatch({
        type: 'setMovieDetailData',
        payload: { movieDetailInfo: res.data.result },
      }))
  }, [])
  return (
    <div id="wrapper-films.film">
      <div id="film" className="page">
        <PageInfo data={detailInfo} history={history} />
        <PageComment data={[]} />
        <PageBtn history={history} />
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  dispatch: PropTypes.func,
  detailInfo: PropTypes.object,
}

export default connect((state) => {
  const { movieDetailInfo: detailInfo } = state.movie
  return { detailInfo }
})(MovieDetail)
