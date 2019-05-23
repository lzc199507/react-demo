import React from 'react'

const Remark = ({ text }) => {
  return (
    <div className="block">
      <h3 className="block__title">
        购票须知
      </h3>
      <div className="block__content remark" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default Remark
