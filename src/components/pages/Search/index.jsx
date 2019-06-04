import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import 'src/styles/search.scss'
import { queryAccurateKeywordData } from 'server'
import HotShow from './components/HotShow'
import SearchContent from './components/SearchContent'
import AccurateSearch from './components/AccurateSearch'

const isChrome = !!window.chrome
let isOnComposition = false

const Search = (props) => {
  const { history, cityCode, dispatch } = props

  const inputEl = useRef(null)
  const [historySearch, setHistorySearch] = useState([])
  const [showHot, setShowHot] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [showAccurate, setShowAccurate] = useState(false)
  const [inputText, setInputText] = useState('')
  const [accurateActivityList, setAccurateActivityList] = useState([])
  const [accurateFilmList, setAccurateFilmList] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: 'init',
      Title: '启动项目!',
    })
    let historyData = localStorage.getItem('historySearch')
    if (historyData) {
      historyData = JSON.parse(historyData)
      setHistorySearch(historyData)
    }
  }, [])

  const navigateTo = () => history.go(-1)

  const clearText = () => {
    inputEl.current.value = ''
    setInputText('')
    setShowHot(true)
    setShowSearch(false)
    setShowAccurate(false)
  }

  const _saveComments = (list) => {
    list = [...new Set([...list])]
    setHistorySearch(list)
    localStorage.setItem('historySearch', JSON.stringify(list))
  }

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) { // e.nativeEvent获取原生的事件对像
      // 生成loading视图, 优化用户体验
      let loadingEl = document.createElement('div')
      loadingEl.classList.add('toast', 'toast-enter-active')
      loadingEl.innerHTML = '<div class="icon-loading" />'
      document.body.appendChild(loadingEl)

      inputEl.current.blur()
      setShowHot(false)
      setShowSearch(false)

      historySearch.unshift(inputEl.current.value)
      _saveComments(historySearch)

      queryAccurateKeywordData({
        kw: inputEl.current.value,
        page: 1,
      }).then((res) => {
        document.body.removeChild(loadingEl)

        const { activities = [], film = [] } = res.data.result
        setAccurateActivityList(activities)
        setAccurateFilmList(film)
        setShowAccurate(true)
      })
    }
  }
  const handleInput = () => {
    if (!isOnComposition) {
      setTimeout(() => {
        setInputText(inputEl.current.value)
      }, 1000)
    }
  }

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      isOnComposition = false

      if (!isOnComposition && isChrome) {
        handleInput()
      }
    } else {
      isOnComposition = true
    }
  }

  const hotShowProps = {
    ifShow: showHot,
    cityCode,
    handleSearch (kw) {
      inputEl.current.value = kw
      setInputText(kw)
      inputEl.current.focus()
    },
    historySearch,
    handleDeleteHistory () {
      localStorage.removeItem('historySearch')
      setHistorySearch([])
    },
  }

  const searchContentProps = {
    cityCode,
    keyWord: inputText,
    history,
  }

  const accurateSearchProps = {
    activitiesData: accurateActivityList,
    filmData: accurateFilmList,
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
              onFocus={() => { setShowHot(false); setShowSearch(true); setShowAccurate(false) }}
              onBlur={() => {
                if (inputText.length === 0) {
                  setShowHot(true)
                  setShowSearch(false)
                }
              }}
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
          {showSearch && <SearchContent {...searchContentProps} />}
          {showAccurate && <AccurateSearch {...accurateSearchProps} />}
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
