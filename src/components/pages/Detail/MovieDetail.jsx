import React, { Component } from 'react'

class MovieDetail extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      films: [],
      imgsData: [],
      memberInfo: '',
      filmActorList: [],
    }
  }

  getMovieData (code) {
    console.log(this.props.film)
    React.axios.get('http://localhost:1234/getMovieData', { 
      params: {
        filmId: this.props.film,
        cityCode: code,
      },
    })
      .then((res) => {
        console.log(res)
        let imgs = res.data.result.memberInfo
        let arr = []
        for (let i in imgs) {
          arr.push(imgs[i].headerImgUrl)
        }
        this.setState({
          films: res.data.result,
          imgsData: arr,
          memberInfo: res.data.result.memberInfo,
          filmActorList: res.data.result.filmActorList,
        })
        console.log(this.state.imgsData)
      })
      .catch((error) => {
        console.log(error)
      })
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

  toHome () {
    this.props.history.go(-1)
  }

  componentDidMount () {
    let code = this.getCookie('cityCode')
    this.getMovieData(code)
  }

  componentWillReceiveProps (zz) {
    let code = this.getCookie('cityCode')
    this.getMovieData(code)
  }

  render () {
    return (
      <div className="MovieDetail">
        <div className="info__basic">
          <div className="basic__big">
            <img className="big__img" alt="pic" src={this.state.films.filmVideoImgUrl} />
            <i onClick={this.toHome.bind(this)} className="icon icon-angle-left" />
          </div>
          <div className="basic__intro">
            <h3 className="intro__text intro__title">
              {this.state.films.filmName}
            </h3>
            <h5 className="intro__text intro__little">
              {this.state.films.filmEnName}
            </h5>
            <p className="intro__text intro__time">
              {this.state.films.openingDate}
              {' '}
上映
            </p>
            <p className="intro__text intro__long">
              {this.state.films.filmDuration}
分钟 -
              {' '}
              {this.state.films.filmCatalog}
            </p>
            <div className="intro__score clearfix">
              <div className="score__gwl">
                <span className="film__icon gwl" />
                {this.state.films.scoreG}
              </div>
              <div className="score__db">
                <span className="film__icon db" />
                {this.state.films.scoreD}
              </div>
            </div>
            {
                (() => {
                  console.log(this.state.memberInfo)
                  if (this.state.memberInfo != false) {
                    console.log(999)
                    return (
                      <div className="intro__audience">
                        <h3 className="title audience__title">
                    Ta们也去看
                        </h3>
                        <ul className="audience__list clearfix">
                          {
                                    (() => {
                                      return this.state.imgsData.map((item, idx) => {
                                        return (
                                          <li className="list__item" key={idx}>
                                            <img className="item__img" src={item} />
                        
                                          </li>
                                        )
                                      })
                                    })()
                                }
                        </ul>
                      </div>
                    )
                  }
                })()
            }
            <div className="intro__cover">
              <p className="cover__num">
                    全网比价 1家
              </p>
              <div className="cover__poster">
                <img className="poster__img" src={this.state.films.filmImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="info__plot">
          <h3 className="title plot__title">
            剧情介绍
          </h3>
          <p className="plot__content part-desc">
            {this.state.films.filmDesc}
          </p>
          <span className="plot__more">
            更多>>
          </span>
        </div>
        <div className="info__relevant">
          <div className="relevant__video">
            <h3 className="title video__title">
                影人信息
            </h3>
            <div className="video">
              <ul className="video__list clearfix">
                {
                        (() => {
                          return this.state.filmActorList.map((item, idx) => {
                            return (
                              <li className="list__item" key={idx}>
                                <img className="item__img" src={item.imgUrl} />
                                <p className="item__name">
                                  {item.name}
                                </p>
                                <p className="item__identity">
                            主演
                                </p>
                              </li>
                            )
                          })
                        })()
                    }
              </ul>
            </div>
          </div>
        </div>
        <div className="page__comment">
          <div className="comment__title">
            <h3 className="title">
              <span className="title__text">
                    观演评论
              </span>
            </h3>
          </div>
          <div className="comment__list" />
          <div className="loading" style={{ display: 'none' }} />
        </div>
      </div>
    )
  }
}

export default MovieDetail
