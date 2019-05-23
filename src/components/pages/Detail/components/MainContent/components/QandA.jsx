import React from 'react'

const QandA = () => {
  return (
    <div className="block">
      <h3 className="block__title">
        用户答疑
        <div className="more">
          我要提问
          <span className="icon icon-angle-right" />
        </div>
      </h3>
      <div className="block__content qa" />
    </div>
  )
}

export default QandA
