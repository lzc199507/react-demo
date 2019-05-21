import React, { Component } from 'react';
class Recommends extends Component {
	constructor(props){
		super(props);
		this.props=props;
		this.state={
			commendData:[],
			actTitleData:[],
			firstData:''

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
            cityCode: cityCode
        }
    })
		.then( (res)=> {
	    	let commendData = res.data.result.mktInfo;
	    	let arr = [];
	    	let actTitleArr=[];
	    	for(let c in commendData){
	    		arr.push(commendData[c].imgUrl);
	    		actTitleArr.push(commendData[c].actTitle)
	    	}
	    	this.setState({
	    		commendData:arr,
	    		actTitleData:actTitleArr,
	    		firstData:commendData[0]
	    	})
	    	
	  })
	  	.catch(function (error) {
	    	console.log(error);
	  });
	}
	componentWillMount(){
        var code = this.getCookie('cityCode');
		this.getData(code);
	}
  render() {
    return (
<div className="recommends">
    <div className="main">
        <div className="item">
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[0]})`}}>
            </div>
            <h4 className="title">
                限时{this.state.actTitleData[0]}
            </h4>
            <div className="count-down">
                <span className="i">
                    00
                </span>
                天
                <span className="i">
                    00
                </span>
                :
                <span className="i">
                    00
                </span>
                :
                <span className="i">
                    00
                </span>
            </div>
            <div className="next">
                下一场 {this.state.firstData.nextStartTime}
            </div>
        </div>
    </div>
    <div className="minor">
        <div className="item">
            <div className="left">
                <h4 className="title">
                    {this.state.actTitleData[1]}
                </h4>
                <div className="remark">
                </div>
            </div>
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[1]})`}}>
            </div>
        </div>
        <div className="item">
            <div className="left">
                <h4 className="title">
                    {this.state.actTitleData[2]}
                </h4>
                <div className="remark">
                    赢100西米缤纷活动进行中
                </div>
            </div>
            <div className="img" style={{backgroundImage: `url(${this.state.commendData[2]})`}}>
            </div>
        </div>
    </div>
</div>
);
  }
}

export default Recommends;
