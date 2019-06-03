import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'src/styles/search.scss'
import HotShow from './components/HotShow'
import SearchContent from './components/SearchContent'

const isChrome = !!window.chrome
let isOnComposition = false

const Search = (props) => {
  const { history, cityCode, dispatch } = props

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: 'init',
      Title: '启动项目!',
    })
  }, [])

  const inputEl = useRef(null)

  const [ifShow, setIfShow] = useState(true)
  const [inputText, setInputText] = useState('')

  const navigateTo = () => history.go(-1)

  const clearText = () => {
    inputEl.current.value = ''
    setInputText('')
    setIfShow(true)
  }

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) { // e.nativeEvent获取原生的事件对像
      console.log('inputEl', inputEl.current.value)
      inputEl.current.blur()
    }
  }

  const handleInput = (e) => {
    console.log('1', 1)
    if (!isOnComposition) {
      setInputText(e.target.value)
    }
  }

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      isOnComposition = false

      if (!isOnComposition && isChrome) {
        handleInput(e)
      }
    } else {
      isOnComposition = true
    }
  }

  const hotShowProps = {
    ifShow,
    cityCode,
    handleSearch (kw) {
      inputEl.current.value = kw
      setInputText(kw)
      inputEl.current.focus()
    },
  }

  const searchContentProps = {
    cityCode,
    keyWord: inputText,
    history,
  }

  return (
    <div id="wrapper-search">
      <div id="search" className="page">
        <div className="page__search">
          <div className="search__left">
            <i className="icon icon-search" />
            <input
              ref={inputEl}
              className="left__input"
              type="text"
              placeholder="搜索明星、演出、场馆"
              onKeyPress={handleEnterKey}
              onFocus={() => setIfShow(false)}
              onBlur={() => inputText.length === 0 && setIfShow(true)}
              onCompositionStart={handleComposition}
              onCompositionUpdate={handleComposition}
              onCompositionEnd={handleComposition}
              onChange={handleInput}
            />
            {inputText.length !== 0 && <i onClick={clearText} className="icon icon-close" />}
          </div>
          <span className="search__right" onClick={navigateTo}>取消</span>
        </div>

        <div className="page__content">
          <HotShow {...hotShowProps} />
          {!ifShow && <SearchContent {...searchContentProps} />}
          {/* <HotShow ifShow={this.state.ifShow} handleSelect={this.handleSelect} />

          {
				    			(() => {
				    				if (!this.state.ifShow) {
				    					return (<ShowList history={this.props.history} text={this.state.inputText} newText={this.state.sendText} />)
				    				}
				    			})()
				    		}
				    	 */}
        </div>
      </div>
    </div>
  )
}

Search.propTypes = {
  history: PropTypes.object,
  cityCode: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect((state) => {
  const { cityCode } = state.app
  return { cityCode }
})(Search)
