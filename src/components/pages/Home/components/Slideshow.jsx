/* eslint-disable class-methods-use-this */
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import PropTypes from 'prop-types'

const Slideshow = ({ data }) => {
  const lunbo = () => {
    // eslint-disable-next-line no-unused-vars
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  useEffect(() => {
    lunbo()
  }, [data])

  return (
    <div className="Lunbo">
      <div className="block-wrapper">
        <div className="swiper-container banners">
          <div className="swiper-wrapper">
            {
              data.length > 0 && data.map((item, idx) => {
                return (
                  <div key={idx} className="swiper-slide">
                    <img src={item.imgUrl} alt="img" />
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  )
}

Slideshow.propTypes = {
  data: PropTypes.array,
}

export default Slideshow
