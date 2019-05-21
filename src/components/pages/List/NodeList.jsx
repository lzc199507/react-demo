import React,{ Component } from 'react';

class NodeList extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			listData: [],
			hasMore: false,
			listType: '' 
		}
	}

	getCategoryList(frontCate,date,order,page,cityCode){
		React.axios.get(`http://localhost:1234/getCategoryList`, {
		    params: {
		      frontCate: frontCate,
		      date: date,
		      order: order,
		      page: page,
		      cityCode: cityCode
		    }
		  })
	      .then((res)=>{
	      		// console.log(res.data.result);
	        	this.setState({
	        		hasMore: res.data.result.hasMore,
	        		listData: res.data.result.list
	        	})
	        	console.log(this.state.listData);
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
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

	componentDidMount(){
		var cityCode = this.getCookie('cityCode');
		this.getCategoryList(this.props.frontCate,'','-1','1',cityCode);
	}

	componentWillReceiveProps(nextProps){
		this.setState({listType: nextProps.frontCate});
		var cityCode = this.getCookie('cityCode');
		this.getCategoryList(nextProps.frontCate,'','-1','1',cityCode);
	}

	linkToDt(name,e){
		// console.log(name);
		this.props.history.push({pathname: '/detail/'+name})
	}

	render(){
		return (
			<div className="node-list">
    			{
    				(()=>{
    					if(this.state.listData.length === 0){
    						return (
    							<div className="empty">暂无演出</div>
    						)
    					}else{
    						if(this.state.listType !== 'film'){
			    				return	this.state.listData.map((item,index)=>{
			    						var Price = '';
			    						if(item.hasTicket){
			    							Price = (
			    									<div>
									                    <span>￥{item.lowPrice}</span>
									                    <span className="sub">起</span>
									                </div>
									                 )
			    						}

			    						return (
			    							<div key={index} onClick={this.linkToDt.bind(this,item.pinyinName)} className="node node--activity horizontal">
							        			<div className="thumbnail" 
							        				style={{backgroundImage: `url(${item.actImgUrl})`}}>
									            </div>
									        	<div className="main">
									            	<h1 className="title">{item.actName}</h1>
									            	<div className="date">{item.actTime}</div>
									            	<div className="venue">{item.veName}</div>
									            	<div className="tags"></div>
									            	<div className="price">
									                	{Price}
									                </div>
									            	<div className="quote">{item.intro}</div>
									            </div>
									        
									        </div>
			    						)
			    					})
    							
    						}else{
    							return this.state.listData.map((item,index)=>{
    								var filmTime,filmBtn = '';
    								if(item.openingDate !== ''){
    									filmTime = (
    											<div className="i time">{item.openingDate}</div>
    										);
    									filmBtn = (
    											<span className="btn btn-seat btn-presale">预售</span>
    										)
    								}else{
    									filmBtn = (
    											<span className="btn btn-seat">比价</span>
    										)
    								}



    								return (
    									<div key={index} className="node node--film horizontal">
										    <div className="thumbnail" 
										    	 style={{backgroundImage: `url(${item.filmImg})`}}>
									        </div>
										    <div className="main">
										        <div>
										            <h1 className="i title">{item.filmName}</h1>
										            <div className="i scores">
										                <span className="score score-db">
										                    <label className="score__source">豆瓣</label>{item.scoreD}
										                </span>
										                <span className="score score-gwl">
										                    <label className="score__source">淘票票</label>{item.scoreG}
										                </span>
										            </div>
										            {filmTime}
										            <div className="i quote"></div>
										            <div className="i actors">{item.filmActor}</div>
									            </div>
										        {filmBtn}
										    </div>
									    </div>
    								)
    							})
    						}
    					}
    						
    				})()
    			}

			    <div className="loading" style={{display: "none"}}></div>
			</div>
		)
	}
}

export default NodeList;