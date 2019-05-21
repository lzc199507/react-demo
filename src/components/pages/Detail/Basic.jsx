import React, { Component } from 'react'
import 'animate.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../../styles/gallery.scss'
import Swiper from 'swiper'
import { connect } from 'react-redux'
import Wgallery from './Wgallery.jsx'
import Dfooter from './Dfooter.jsx'

class Basic extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      showName: this.props.history,
      films: [],
      tuji: [],
      showPlace: [],
      isShowNav: false,
      ShowShare: false,
      showTu: false,
      more: false,
      gao: 9,

    }
  }

  navigateTo (e) {
    this.props.backto.history.go(-1)
  }

  qingqiu () {
    React.axios.get('http://localhost:1234/goDetail', {
      params: {
        pinyinName: this.state.showName,
      },
    })
      .then((response) => {
        this.setState({
          films: response.data.result.activity,
          tuji: response.data.result.activity.actAlbum,
          showPlace: response.data.result.activitySeries,
          wprice: response.data.result.activity.minPrice, 
        }, () => {
          this.lunbo()
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    this.lunbo()
    this.qingqiu()
  }

  gaoliang (index, e) {
    // console.log(this)
    // console.log(index)

    this.setState({
      gao: index,
      showName: this.state.showPlace[index].pinyinName,
    }, () => {
      this.qingqiu(this.state.showName)
    })
  }

  getmore () {
    this.setState({
      more: !false,  
    })
  }

  tanchu () {
    this.setState({
      isShowNav: !false,  
    })
  }

  yincang () {
    this.setState({
      isShowNav: false,  
    })
  }

  shareShow () {
    this.setState({
      ShowShare: !false,  
    })
  }

  shareNone () {
    this.setState({
      ShowShare: false,  
    })
  }

  tuShow () {
    this.setState({
      showTu: !false,  
    })
  }

  tuNone () {
    this.setState({
      showTu: false,  
    })
  }

  lunbo () {
    let swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
        
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  render () {
    return (

      <div id="activity" className="page">
        {/* 头顶 */}
        <div className="page__header">
          <div className="left" onClick={this.navigateTo.bind(this)}>
            <i className="icon icon-angle-left" />
          </div>
          <div className="middle">
            <span>
                        演出详情
            </span>
          </div>
          <div className="right">
            <div className="share">
              <i className="icon icon-dynshare" onClick={this.shareShow.bind(this)} />
              <ReactCSSTransitionGroup
                transitionEnter
                transitionLeave
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionName="animated"
              >
                <div className="share__modal modal animated fadeIn" style={{ display: this.state.ShowShare ? 'block' : 'none' }} onClick={this.shareNone.bind(this)}>
                  <div className="modal__dialog animated fadeInUp " style={{ display: this.state.ShowShare ? 'block' : 'none' }}>
                    <div className="modal__title">
                                    分享
                    </div>
                    <div className="modal__content">
                      <div className="item qq">
                        <i className="icon icon-qq" />
                                        QQ好友
                      </div>
                      <div className="item qq-zone">
                        <i className="icon icon-qq-zone" />
                                        QQ空间
                      </div>
                      <div className="item weibo">
                        <i className="icon icon-weibo" />
                                        新浪微博
                      </div>
                    </div>
                  </div>
                </div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
        {/* 封面页 */}
        <div className="basic-info">
          <div className="bg" style={{ backgroundImage: `url(${this.state.films.thumbnail})` }} />
          <div className="mask" />
          <div className="thumbnail">
            <img className="thumbnail__img" src={`${this.state.films.thumbnail}`} alt="avatar" />
          </div>
          <div className="main">
            <h1 className="title">
              {this.state.films.actName}
            </h1>
            <div className="date">
              {this.state.films.actDate}
            </div>
            <div className="heat">
              <div className="heat__main">
                {this.state.films.hotLevel}
℃
                <br />
                <span>
                                西十区指数
                </span>
                <br />
              </div>
            </div>
            {
            (() => {
              if (Number(this.state.wprice) !== 0) {
                return ( 
                  <div className="price">
                    {this.state.films.minPrice}
                    <span className="sub">
                            起
                    </span>          
                  </div>
                )
              }
            })()
           }          
          </div>
        </div>
        {/* 地址 */}
        <div className="activity-info">
          <div className="info-item address">
            <span className="text-content">
              <i className="icon icon-marker" />
              {this.state.films.veName}
            </span>
          </div>

          <div className="booking">
            <div className="booking__content info-item" onClick={this.tanchu.bind(this)}>
              <span className="text-content">
                <span className="orange">
                        预订
                </span>
                    预订演出票的相关说明
              </span>
              <span className="icon icon-angle-right" />
            </div>
          
 
            <ReactCSSTransitionGroup
              transitionEnter
              transitionLeave
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="animated"
            >

              <div className="booking__modal modal animated fadeIn" style={{ display: this.state.isShowNav ? 'block' : 'none' }} key="amache" onClick={this.yincang.bind(this)}>
                <div className="modal__dialog animated fadeInUp " style={{ display: this.state.isShowNav ? 'block' : 'none' }} key="amache">
                  <div className="modal__title">
                        预订票提示
                  </div>
                  <div className="modal__content">
                    <ol className="list">
                      <li>
                                当前本演出的全部或部分场次、票档为预订状态， 即主办方暂未开始开票;
                      </li>
                      <li>
                                该演出具体开票日期将由主办方、演出场馆及相关卖家确定;
                      </li>
                      <li>
                                演出票是稀缺资源，订票完成后不能取消。若您因个人原因无法观演，您可在西十区卖票平台上挂牌售卖;
                      </li>
                      <li>
                                正式开票后，西十区将督促平台上的票源方尽快为用户配票（根据用户付款的先后顺序）;
                      </li>
                      <li>
                                如根据先后顺序配票后您未能获得演出票，您可以发布求票信息;
                      </li>
                      <li>
                                客服电话：400-003-9992。服务时间：9:00-22:00。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
        {/* 图标保证 */}
        <div className="protection">
          <div className="protection__content" onClick={this.tuShow.bind(this)}>
            <div className="protection__icons">
              <span className="icon-display icon-secured">
                担保交易
              </span>
              <span className="icon-display icon-guaranteed">
                保证金制度
              </span>
              <span className="icon-display icon-accompany">
                先行赔付
              </span>
              <span className="icon-display icon-seller">
                1家竞价
              </span>
            </div>
            <span className="icon icon-angle-right" />
          </div>
          <ReactCSSTransitionGroup
            transitionEnter
            transitionLeave
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionName="animated"
          >
            <div className="protection__modal modal animated fadeIn" style={{ display: this.state.showTu ? 'block' : 'none' }} key="amache" onClick={this.tuNone.bind(this)}>
              <div className="modal__dialog animated fadeInUp" style={{ display: this.state.showTu ? 'block' : 'none' }} key="amache">
                <div className="modal__title">
                购票保障
                </div>
                <div className="modal__content">
                  <ul className="list">
                    <li className="item icon-secured">
                      <h6>
                            担保交易
                      </h6>
                      <div>
                            由西十区提供交易担保，演出结束后无争议才打款给卖家;
                      </div>
                    </li>
                    <li className="item icon-guaranteed">
                      <h6>
                            保证金制度
                      </h6>
                      <div>
                            卖家已缴纳保证金，用于担保此次交易;
                      </div>
                    </li>
                    <li className="item icon-accompany">
                      <h6>
                            先行赔付
                      </h6>
                      <div>
                            卖家无票、假票、票面不符等一旦违约先行赔付;
                      </div>
                    </li>
                    <li className="item icon-seller">
                      <h6>
                            1家竞价
                      </h6>
                      <div>
                            1卖家共同在线比价购买;
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
        {/* 演唱介绍 */}
        <div className="block-wrapper">
          <div className="block">
            <h3 className="block__title">
            演出介绍
            </h3>
            <div className="block__content intro">
              {
            (() => {
              if (this.state.showPlace) {
                return (
                  <div className="series">
                    <div className="swiper-wrapper" style={{ width: '92px' }}>
                      {
                    (() => {
                      return this.state.showPlace.map((item, index) => {
                        return (
                          <div className={this.state.showName === this.state.showPlace[index].pinyinName ? 'item swiper-slide active' : (index === this.state.gao ? 'item swiper-slide active' : 'item swiper-slide')} key={index} onClick={this.gaoliang.bind(this, index)}>
                            {item.areaName}
                          </div>
                        )
                      }) 
                    })()
                }
                    
                    </div>
                  </div>
                )
              }
            })()
           }
              <div className={this.state.more ? '' : 'collapsed'}>
                <div className="intro__content">
                  <div dangerouslySetInnerHTML={{ __html: this.state.films.content }} />
                  <div className="gallery-wrapper">
                    {
                        (() => {
                          if (this.state.tuji.length > 0) {
                            return (
                              <div className="gallery swiper-container">
                                <div className="title">
                                「 演出图集 」
                                </div>
                                <div className="swiper-wrapper " style={{ width: '200px' }}>
                                  {
                                (() => {
                                  return this.state.tuji.map((item, index) => {
                                    return (
                                      <div className="swiper-slide"
                                        key={index} 
                                        onClick={this.props.toggleGallery.bind(this, item)}
                                      >
                                        <img src={item} alt="adasdsd" />
                                      </div>
                                    )
                                  })      
                                })()
                            }
                            
                                </div>
                                <Wgallery chuan={this.state.tuji} /> 
                              </div>
                            )
                          }
                        })()
                       }
                        
                       
                  </div>
                </div>
                <div className="intro__toggle" onClick={this.getmore.bind(this)} style={{ display: this.state.more ? 'none' : 'block' }}>
                    展开更多
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <h3 className="block__title">
            购票须知
            </h3>
            <div className="block__content remark">
            1、1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场（如演出介绍内有不同身高规定，以演出介绍内身高说明为准）。
              <br />
                2、演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务。
              <br />
            </div>
          </div>
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
          <div className="block">
            <h3 className="block__title">
            互动评论(0)
              <div className="btn">
                写评论
              </div>
            </h3>
            <div className="block__content comments" />
          </div>
        </div>
        {/* 底部 */}
        <Dfooter />
      </div>
    )
  }
}

export default connect((state) => {
  return state
}, (dispatch) => {
  return {
    toggleGallery (src) {
      dispatch({
        type: 'toggleGallery',
        isShowGallery: {
          bool: !this.props.isShowGallery.bool,
          src,
        },
      })
    },
  }
})(Basic)
