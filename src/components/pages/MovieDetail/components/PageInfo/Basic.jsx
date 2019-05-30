import React from 'react'
import PropTypes from 'prop-types'

const Basic = ({ data }) => {
  return (
    <div className="info__basic">
      <div className="basic__big">
        <img className="big__img" alt="pic" src={data.filmVideoImgUrl} />
        <i onClick={() => console.log(1)} className="icon icon-angle-left" />
      </div>
      <div className="basic__intro">
        <h3 className="intro__text intro__title">
          {data.filmName}
        </h3>
        <h5 className="intro__text intro__little">
          {data.filmEnName}
        </h5>
        <p className="intro__text intro__time">
          {data.openingDate}
          &nbsp;上映
        </p>
        <p className="intro__text intro__long">
          {data.filmDuration}
          分钟&nbsp;-&nbsp;
          {data.filmCatalog}
        </p>
        <div className="intro__score clearfix">
          <div className="score__gwl">
            <span className="film__icon gwl" />
            &nbsp;
            {data.scoreG}
          </div>
          <div className="score__db">
            <span className="film__icon db" />
            &nbsp;
            {data.scoreD}
          </div>
        </div>
        {
          data.memberInfo && data.memberInfo.length > 0 && (
            <div className="intro__audience">
              <h3 className="title audience__title">
                Ta们也去看
              </h3>
              <ul className="audience__list clearfix">
                {
                  data.memberInfo.map((item, index) => (
                    <li className="list__item" key={index}>
                      <img alt="member" className="item__img" src={item.headerImgUrl} />
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
        <div className="intro__cover">
          <p className="cover__num">
            全网比价&nbsp;
            {data.parityNum}
            家
          </p>
          <div className="cover__poster">
            <img alt="cover" className="poster__img" src={data.filmImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

Basic.propTypes = {
  data: PropTypes.object,
}

export default Basic
