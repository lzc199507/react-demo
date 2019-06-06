import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { queryMemberLetter } from 'server'

const Letter = ({ history }) => {
  const [list, setList] = useState([])
  useEffect(() => {
    queryMemberLetter().then(res => setList(res.data.lists)).catch(err => console.log(err))
  }, [])
  return (
    <div id="letter">
      <div className="wrapper wrap-content">
        <div className="header">
          <i className="left"><span className="icon-angle-left icon" onClick={() => history.go(-1)} /></i>
          <div className="middle">
            站内信
          </div>
          <div className="right" />
        </div>
      </div>
      <div className="list-box node-list">
        <ul>
          {
            list.length > 0 && list.map((item, idx) => (
              <li key={idx} className="node-letter">
                <p>
                  发布时间：
                  {item.fbTime}
                </p>
                <span>{item.fbContent}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

Letter.propTypes = {
  history: PropTypes.object,
}

export default Letter
