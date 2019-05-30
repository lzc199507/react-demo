import React from 'react'
import PropTypes from 'prop-types'

const Plot = ({ data }) => {
  return (
    <div className="info__plot">
      <h3 className="title plot__title">剧情介绍</h3>
      <p className="plot__content part-desc">
        {data.filmDesc}
      </p>
      <span className="plot__more">
        更多 &gt;&gt;
      </span>
    </div>
  )
}

Plot.propTypes = {
  data: PropTypes.object,
}

export default Plot
