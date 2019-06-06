import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'animate.css'


const sortData = [{
  title: '默认',
  order: '-1',
}, {
  title: '按价格',
  order: '7',
}, {
  title: '按日期',
  order: '4',
}]

const SortsModal = ({ showSortsModal, dispatch }) => {
  const [order, setOrder] = useState('-1')
  const toggleBox = (newOrder) => {
    setOrder(newOrder)
    dispatch({
      type: 'setShowModal',
      payload: {
        showSortsModal: false,
      },
    })
    dispatch({
      type: 'setQueryParams',
      payload: {
        order: newOrder,
      },
    })
  }
  return (
    <div id="SortsModal">
      {
        showSortsModal && (
          <ReactCSSTransitionGroup
            transitionEnter
            transitionLeave
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionName="animated"
          >
            <div id="category">
              <div className="sorts__modal modal animated fadeIn">
                <div className="modal__dialog  animated fadeInDown">
                  {
                    sortData.map((item, idx) => {
                      return (
                        <div onClick={() => toggleBox(item.order)} key={idx} className={item.order === order ? 'item active' : 'item'}>
                          {item.title}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        )
      }
    </div>
  )
}

SortsModal.propTypes = {
  showSortsModal: PropTypes.bool,
  dispatch: PropTypes.func,
}

export default connect((state) => {
  const { listData } = state.listPage
  const { showSortsModal } = listData
  return { showSortsModal }
})(SortsModal)
