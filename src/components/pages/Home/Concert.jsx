import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Concert extends Component {
  constructor(props){
    super(props);
    this.props=props;
    this.state={
    	allData:[],
    	listData:[],
    	firstData:[]
    }
  }

  //获取cookie
    getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        // console.log("获取cookie,现在循环");
        for (var i = 0; i < ca.length; i++){
            var c = ca[i];
            // console.log(c);
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) !== -1){
                // console.log(c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

  	getData(cityCode){
		React.axios.get('http://localhost:1234/getIndexData',{params:{
            cityCode:cityCode
        }
    })
		.then( (res)=> {
	    	// console.log(res.data);
	    	this.setState({
	    		allData:res.data.result.activityCateInfo[0],
	    		listData:res.data.result.activityCateInfo[0].mData,
	    		firstData:res.data.result.activityCateInfo[0].mData.shift()
	    	})
	    	// console.log(this.state.listData)
	    	
	  })
	  	.catch(function (error) {
	    	console.log(error);
	  });
	}
	componentWillMount(){
        var code =this.getCookie('cityCode');
        this.getData(code);
	}
  render() {
    return (
<div className="Concert">
    <div className="block-wrapper">
        <h3 className="block__title">
            {this.state.allData.mTitle}
            <small>
                查看更多
            </small>
        </h3>
        <Link className="main-node" to={ '/detail/' + this.state.firstData.pinyinName }>
            <div className="node node--activity primary">
                <div className="bg" style={{backgroundImage: 'url("http://image3.xishiqu.cn/upload/activity/118/111/20181119002/v/b/9E466839-6A8D-FAFB-EEA1-D90077E96646.jpg")'}}>
                </div>
                <div className="mask">
                </div>
                <div className="thumbnail" style={{backgroundImage: `url(${this.state.firstData.actImgUrl})`}}>
                    <div className="thumbnail__hot">
                        <span>
                            {this.state.firstData.hotLevel}
                        </span>
                        ℃
                    </div>
                </div>
                <div className="main">
                    <h1 className="title">
                        {this.state.firstData.actName}
                    </h1>
                    <div className="quote">
                        {this.state.firstData.intro}
                    </div>
                    <div className="date">
                        {this.state.firstData.actTime}
                    </div>
                    <div className="price">
                        <div>
                            <span>
                                ￥{this.state.firstData.lowPrice}
                            </span>
                            <span className="sub">
                                起
                            </span>
                        </div>
                        <div>
                            在售卖家{this.state.firstData.sellerCount}家
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        <div className="node-list">
            <div className="wrapper" >
                {
                	(()=>{
                		return this.state.listData.map((item,idx)=>{
                			return (
                					<Link key={idx} className="node node--activity vertical" to={ '/detail/' +item.pinyinName }>
                    <div className="thumbnail" style={{backgroundImage: `url(${item.actImgUrl})`,width: '10rem'}}>
                    {
                    	(()=>{
                    		if(item.maxDiscount){
                    			return (
                    				<div className="thumbnail__tag">
                            <span>
                                {item.maxDiscount}
                            </span>
                            折 起
                        </div>
                    				)
                    		}
                    	})()
                    }
                        
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
                                    ￥{item.lowPrice}
                                </span>
                                <span className="sub">
                                    起
                                </span>
                            </div>
                        </div>
                        <div className="date">
                            {item.actTime}
                        </div>
                        <div className="venue">
                        </div>
                    </div>
                </Link>
                				)
                		})
                	})()
                }
                
            </div>
        </div>
    </div>
</div>
);
  }
}

export default Concert;
