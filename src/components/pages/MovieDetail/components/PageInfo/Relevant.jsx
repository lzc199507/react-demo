import React from 'react'
import PropTypes from 'prop-types'

const Relevant = ({ data }) => {
  return (
    <div className="info__relevant">
      <div className="relevant__video">
        <h3 className="title video__title">
          影人信息
        </h3>
        <div className="video">
          <ul className="video__list clearfix">
            {
              data.filmActorList && data.filmActorList.length > 0 && data.filmActorList.map((item, index) => (
                <li className="list__item" key={index}>
                  <img alt="actorImg" className="item__img" src={item.imgUrl} />
                  <p className="item__name">
                    {item.name}
                  </p>
                  <p className="item__identity">
                    {item.actorType === 1 ? '导演' : '主演'}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

Relevant.propTypes = {
  data: PropTypes.object,
}

export default Relevant
