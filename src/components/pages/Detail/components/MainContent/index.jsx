/* eslint-disable react/prop-types */
import React from 'react'
import Introduction from './components/Introduction'
import Remark from './components/Remark'
import QandA from './components/QandA'
import Comments from './components/Comments'

const MainContent = (props) => {
  const { data } = props
  return (
    <div className="block-wrapper">
      <Introduction {...props} />
      <Remark text={data.buyNotice} />
      <QandA />
      <Comments />
    </div>
  )
}

export default MainContent
