/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Introduction = ({ data, activitySeries }) => {
  const [showMore, setShowMore] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  // console.log(showGallery)
  const { content = '', actAlbum = [] } = data
  // console.log(data)
  // console.log(activitySeries)
  // const toggleGallery = () => {}
  return (
    <div className="block">
      <h3 className="block__title">
        演出介绍
      </h3>
      <div className="block__content intro">
        {
          activitySeries.length !== 0 && (
            <div className="series swiper-container">
              <div className="swiper-wrapper" style={{ width: '92px' }}>
                {
                  activitySeries.map(item => (
                    <div className="item swiper-slide active">
                      {item.areaName}
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
        <div className={showMore ? '' : 'collapsed'}>
          <div className="intro__content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="gallery-wrapper">
              {
                actAlbum.length > 0 && (
                  <div className="gallery swiper-container">
                    <div className="title">
                    「 演出图集 」
                    </div>
                    <div className="swiper-wrapper">
                      {
                        actAlbum.map((item, idx) => (
                          <div key={idx} className="swiper-slide" onClick={() => setShowGallery(true)}>
                            <img src={item} alt="adasdsd" />
                          </div>
                        ))
                      }
                    </div>
                    {/* <div className="full-screen swiper-container swiper-container-horizontal swiper-container-ios"
                      style={{ display: showGallery ? 'block' : 'none' }}
                    >
                      <div className="swiper-wrapper"
                        style={{ transitionDuration: '0ms', transform: 'translate3d(-750px, 0px, 0px)' }}
                      >
                        {
                          actAlbum.map((item, idx) => (
                            <div key={idx} className="swiper-slide" style={{ width: '375px' }}>
                              <img className="swiper-lazy swiper-lazy-loaded" src={item} alt="adasdsd" />
                            </div>
                          ))
                        }
                      </div>
                    </div> */}
                  </div>
                )
              }
            </div>
          </div>
          <div className="intro__toggle" onClick={() => setShowMore(true)} style={{ display: showMore ? 'none' : 'block' }}>
            展开更多
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
