import React from 'react'
import PropTypes from 'prop-types'
import Basic from './Basic'
import Plot from './Plot'
import Relevant from './Relevant'

const PageInfo = ({ data, history }) => {
  return (
    <div className="page__info">
      <Basic data={data} history={history} />
      <Plot data={data} />
      <Relevant data={data} />
    </div>
  )
}

PageInfo.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
}

export default PageInfo
