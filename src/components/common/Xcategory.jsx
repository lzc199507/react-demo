import React, { Component } from 'react'
import { connect } from 'react-redux'

class Xcategory extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      nav: 0,
      CtList: [
        {
          text: '全部',
          iconClass: 'cate-icon all',
          frontCate: '',
        },
        {
          text: '演唱会',
          iconClass: 'cate-icon yanchanghui',
          frontCate: 'yanchanghui',
        },
        {
          text: '话剧歌剧',
          iconClass: 'cate-icon huajugeju',
          frontCate: 'huajugeju',
        },
        {
          text: '休闲娱乐',
          iconClass: 'cate-icon xiuxianyule',
          frontCate: 'xiuxianyule',
        },
        {
          text: '电影',
          iconClass: 'cate-icon film',
          frontCate: 'film',
        },
        {
          text: '体育赛事',
          iconClass: 'cate-icon tiyusaishi',
          frontCate: 'tiyusaishi',
        },
        {
          text: '儿童亲子',
          iconClass: 'cate-icon ertongqinzi',
          frontCate: 'ertongqinzi',
        },
        {
          text: '音乐会',
          iconClass: 'cate-icon yinyuehui',
          frontCate: 'yinyuehui',
        },
        {
          text: '曲艺杂技',
          iconClass: 'cate-icon quyizaji',
          frontCate: 'quyizaji',
        },
        {
          text: '舞蹈芭蕾',
          iconClass: 'cate-icon wudaobalei',
          frontCate: 'wudaobalei',
        },
      ],
    }
  }

	
  componentDidMount () {
    // console.log(this.props)
    this.setState({
      nav: this.props.categoryIdx,
    }, () => {
      this.props.sendFc(this.state.CtList[this.state.nav].frontCate)
    })
  }

  // componentWillReceiveProps(nextProps){
  // 	console.log(nextProps);
  // 	// this.setState({listType: nextProps.frontCate});
  // }

  chooseNav (index, e) {
    this.setState({
      nav: index,
    })
    // console.log(this.state.CtList[index].frontCate);
    this.props.sendFc(this.state.CtList[index].frontCate)
  }

  render () {
    	return (
      <div className="categories">
        <div className="wrapper">
          {
		      			(() => {
		      				return this.state.CtList.map((item, index) => {
		      					return (

  <div key={index} 
    className={index === this.state.nav ? 'item active' : 'item'}
    onClick={this.chooseNav.bind(this, index)}
  >
    <span className={item.iconClass} />
    {item.text}
  </div>
		      					)
		      				})
		      			})()
		      		}

        </div>
      </div>
	    )
  }
}


export default connect((state) => {
  // console.log(state)
  return state
}, ((dispatch) => {
  return {
    
  	}
}))(Xcategory)
