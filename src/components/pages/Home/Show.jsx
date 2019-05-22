/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ShowList from './ShowList'

const { Fragment } = React

const Show = (props) => {
  const [currentDay, setCurrentDay] = useState(0)
  const { data } = props
  let titleArr = []
  let listArr = []
  data && data.map((i) => { titleArr.push(i.title); listArr.push(i.list) })
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

export default Show
