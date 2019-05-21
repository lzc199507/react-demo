import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Huaju extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      cards: [],
      jibai: [],
      cards2: [],
      jibai2: [],
      film: [],
      Like: [],
    }
  }


  // 获取cookie
  getCookie (cname) {
    let name = `${cname}=`
    let ca = document.cookie.split(';')
    // console.log("获取cookie,现在循环");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      // console.log(c);
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) {
        // console.log(c.substring(name.length, c.length));
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  componentDidMount () {
    let code = this.getCookie('cityCode')
    React.axios.get('http://localhost:1234/getIndexData', {
      params: {
        cityCode: code,
      },
    })
      .then((response) => {
        // console.log(response.data.result)
        let srt = response.data.result.activityCateInfo[1].mData
        let obj = srt.shift()
        // console.log(obj)
        // console.log(srt)
        let haha = response.data.result.activityCateInfo[2].mData
        let obj2 = haha.shift()
        // console.log(obj2)
        // console.log(haha)
        this.setState({
          cards: obj,
          cards2: obj2,
          jibai: srt,
          jibai2: haha,
          film: response.data.result.activityCateInfo[3].mData,
          Like: response.data.result.activityLikeInfo,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  goDetail (e) {
    // console.log(e.target)
  }

  render () {
    return (
    	
      <div className="block-wrapper">
        {/* 话剧 */}

        <div className="block">
          <h3 className="block__title">
			            话剧歌剧
            <small>
			                查看更多
            </small>
          </h3>
          <Link className="main-node" to={`/detail/${this.state.cards.pinyinName}`}>
            <div className="node node--activity primary">
              <div className="bg" style={{ backgroundImage: `url(${this.state.cards.actImgUrl})` }} />
              <div className="mask" />
              <div  
                className="thumbnail"  
                onClick={this.goDetail.bind(this)} 
                style={{ backgroundImage: `url(${this.state.cards.actImgUrl})` }}
              >
                <div className="thumbnail__hot">
                  <span>
                    {this.state.cards.hotLevel}
                  </span>
			                        ℃
                </div>
              </div>
              <div className="main">
                <h1 className="title">
                  {this.state.cards.actName}
                </h1>
                <div className="quote">
                  {this.state.cards.intro}
                </div>
                <div className="date">
                  {this.state.cards.actTime}
                </div>
                <div className="price">
                  <div>
                    <span>
			                                ￥
                      {this.state.cards.lowPrice}
                    </span>
                    <span className="sub">
			                                起
                    </span>
                  </div>
                  <div>
			                            在售卖家
                    {this.state.cards.sellerCount}
家
                  </div>
                </div>
              </div>
            </div>
          </Link>
			          
          <div className="node-list">

            <div className="wrapper">
              {
					(() => {
					  return this.state.jibai.map((item, index) => {
					    return (

  <Link key={index}
    className="node node--activity vertical"
    to={`/detail/${item.pinyinName}`}
  >
    <div className="thumbnail" 
      style={{ backgroundImage: `url(${item.actImgUrl})`, width: '10rem' }}
    >
      <div className="thumbnail__hot">
        <span>
          {item.hotLevel}
        </span>
			                            ℃
      </div>
    </div>
    <div className="main">
      <h1 className="title">
        {item.actName}
      </h1>
      <div className="price">
        <div>
          <span>
			                                    ￥
            {item.lowPrice}
          </span>
          <span className="sub">
			                                    起
          </span>
        </div>
      </div>
      <div className="date">
        {item.actTime}
      </div>
      <div className="venue" />
    </div>
  </Link>
					                
					    )
					  })
					})()
						}
            </div>        
          </div>       
        </div>

        {/* 休闲娱乐 */}
        <div className="block">
          <h3 className="block__title">
        休闲娱乐
            <small>
            查看更多
            </small>
          </h3>
          <Link className="main-node" to={`/detail/${this.state.cards2.pinyinName}`}>
            <div className="node node--activity primary">
              <div className="bg" style={{ backgroundImage: `url(${this.state.cards2.actImgUrl})` }} />
              <div className="mask" />
              <div 
                className="thumbnail" 
                style={{ backgroundImage: `url(${this.state.cards2.actImgUrl})` }}
              >
                
                <div className="thumbnail__hot">
                  <span>
                    {this.state.cards2.hotLevel}
                  </span>
                    ℃
                </div>
              </div>
            
            
              <div className="main">
                <h1 className="title">
                  {this.state.cards2.actName}
                </h1>
                <div className="quote">
                  {this.state.cards2.intro}
                </div>
                <div className="date">
                  {this.state.cards2.actTime}
                </div>
                <div className="price">
                  <div>
                    <span>
                            ￥
                      {this.state.cards2.lowPrice}
                    </span>
                    <span className="sub">
                            起
                    </span>
                  </div>
                  <div>
                        在售卖家
                    {this.state.cards2.sellerCount}
家
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="node-list">

            <div className="wrapper" style={{ width: '110rem' }}>
              {
					(() => {
					  return this.state.jibai2.map((item, index) => {
					    return (
  <Link key={index}
    className="node node--activity vertical"
    to={`/detail/${item.pinyinName}`}
  >
    <div                
      className="thumbnail" 
      style={{ backgroundImage: `url(${item.actImgUrl})`, width: '10rem' }}
    >
      <div className="thumbnail__hot">
        <span>
          {item.hotLevel}
        </span>
			                            ℃
      </div>
    </div>
    <div className="main">
      <h1 className="title">
        {item.actName}
      </h1>
      <div className="price">
        <div>
          <span>
			                                    ￥
            {item.lowPrice}
          </span>
          <span className="sub">
			                                    起
          </span>
        </div>
      </div>
      <div className="date">
        {item.actTime}
      </div>
      <div className="venue" />
    </div>
  </Link>
					                
					    )
					  })
					})()
						}
            </div>        
          </div>
        </div>

        {/* 电影 */}
        <div className="block">
          <h3 className="block__title">
        电影
            <small>
            查看更多
            </small>
          </h3>
          <div className="node-list">
            <div className="wrapper" style={{ width: '134rem' }}>
              {
			(() => {
			  return this.state.film.map((item, index) => {
			    return (						
  <Link className="node node--film vertical"
    key={index}
    to={`/moviedetail/${item.filmId}`}
  >
    <div 
      className="thumbnail" 
      style={{ backgroundImage: `url(${item.filmImg})`, width: '10rem' }}
    >
      <div className="thumbnail__score">
        {item.scoreD}
      </div>
    </div>
                
    <div className="main">
      <h1 className="title">
        {item.filmName}
      </h1>
    </div>
  </Link> 
			    )
			  })
			})()
			}   
            </div>
          </div>
        </div>
        {/* 猜你所喜 */}
        <div className="block favours">
          <h3 className="block__title">
	        投你所喜
          </h3>
          {
			(() => {
			  return this.state.Like.map((item, index) => {
			    return (	
  <Link className="node node--activity horizontal"
    key={index}
    to={`/detail/${item.pinyinName}`}
  >   
    <div
      className="thumbnail" 
      style={{ backgroundImage: `url(${item.actImgUrl})` }}
    />
    <div className="main">
      <h1 className="title">
        {item.actName}
      </h1>
      <div className="date">
        {item.actTime}
      </div>
      <div className="venue">
        {item.veName}
      </div>
      <div className="tags" />
      <div className="price">
        <div>
          <span>
	                        ￥
            {item.lowPrice}
          </span>
          <span className="sub">
	                        起
          </span>
        </div>
	                
      </div>
      <div className="quote">
        {item.intro}
      </div>
    </div>  
	             
  </Link>
	    )
			  })
			})()
	}
        </div>
      </div>

    )
  	}
}


export default Huaju
