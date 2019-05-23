import React from 'react'

const Comments = () => {
  return (
    <div className="block">
      <h3 className="block__title">
      互动评论(0)
        <div className="btn">
          写评论
        </div>
      </h3>
      <div className="block__content comments" />
    </div>
  )
}

export default Comments
