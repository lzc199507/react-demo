/* eslint-disable radix */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function formatTime (time) {
  time = String(time)
  if (time.length < 2) time = `0${time}`
  return time
}

const Recommends = ({ data }) => {
  const [day, setDay] = useState('00')
  const [hour, setHour] = useState('00')
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')

  const getD = (endTime) => {
    let left = (new Date(endTime)).getTime() - (new Date()).getTime()
    let d = formatTime(parseInt(left / 1000 / 60 / 60 / 24))
    let h = formatTime(parseInt(left / 1000 / 60 / 60 % 24))
    let m = formatTime(parseInt(left / 1000 / 60 % 60))
    let s = formatTime(parseInt(left / 1000 % 60))
    setDay(d)
    setHour(h)
    setMin(m)
    setSec(s)
  }

  useEffect(() => {
    if (data[0].nextStartTime !== '') {
      let timer = setInterval(() => {
        getD(data[0].nextStartTime)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [data[0].nextStartTime])

  return (
    <div className="recommends">
      <div className="main">
        <div className="item">
          <div className="img" style={{ backgroundImage: `url(${data[0].imgUrl})` }} />
          <h4 className="title">
            限时
            {data[0].actTitle}
          </h4>
          <div className="count-down">
            <span className="i">
              {day}
            </span>
              天
            <span className="i">
              {hour}
            </span>
              :
            <span className="i">
              {min}
            </span>
              :
            <span className="i">
              {sec}
            </span>
          </div>
          <div className="next">
            下一场
            {' '}
            {data[0].nextStartTime}
          </div>
        </div>
      </div>
      <div className="minor">
        <div className="item">
          <div className="left">
            <h4 className="title">
              {data[1].actTitle}
            </h4>
            <div className="remark" />
          </div>
          <div className="img" style={{ backgroundImage: `url(${data[1].imgUrl})` }} />
        </div>
        <div className="item">
          <div className="left">
            <h4 className="title">
              {data[2].actTitle}
            </h4>
            <div className="remark">
              赢100西米缤纷活动进行中
            </div>
          </div>
          <div className="img" style={{ backgroundImage: `url(${data[2].imgUrl})` }} />
        </div>
      </div>
    </div>
  )
}

Recommends.propTypes = {
  data: PropTypes.array,
}

export default Recommends
