import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ShowList from './ShowList'

const { Fragment } = React

const Show = ({ data }) => {
  const [currentDay, setCurrentDay] = useState(0)
  let titleArr = []
  let listArr = []
  data && data.map((i) => {
    titleArr.push(i.title)
    listArr.push(i.list)
    return null
  })
  return (
    <Fragment>
      <div className="block">
        <h3 className="block__title">
          七日演出
          <small>
            演出日历
          </small>
        </h3>
        <div className="weekdays">
          {
            titleArr && titleArr.map((i, idx) => {
              return (
                <span className={idx === currentDay ? 'item active' : 'item'} onClick={() => setCurrentDay(idx)} key={idx}>{i}</span>
              )
            })
          }
        </div>
        <ShowList data={listArr[currentDay]} />
      </div>
    </Fragment>
  )
}

Show.propTypes = {
  data: PropTypes.array,
}

export default Show
