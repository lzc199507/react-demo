import React, { Component } from 'react';

import { connect } from 'react-redux';

class ShowList extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state={
			searchList: [],
		}
	}

	getKeywordData(kw,cityCode){
		React.axios.get(`http://localhost:1234/getKeywordData`, {
		    params: {
		      kw: kw,
		      cityCode: cityCode
		    }
		  })
	      .then((res)=>{
	      		// console.log(res.data.result);
	        	this.setState({
	        		searchList: res.data.result
	        	})
	        	console.log(this.state.searchList);
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
	}

	linkToDt(name,e){
		this.props.history.push({pathname: '/detail/'+name})
	}


	componentDidMount(){
		// this.getSearchData(this.props.cityCode);

	}

	componentWillReceiveProps(nextProps){
		// console.log('props:',nextProps.newText);
		// console.log('nextP:',nextProps.text);
		var encodeW = encodeURI(nextProps.text);
		// console.log(encodeW,this.props.cityCode);
		this.getKeywordData(encodeW,this.props.cityCode);
	}

	render() {
		return (
			  <div className="search-content">
			   <div className="vague">
			    <div className="vague__content">
			    	{
			    		(()=>{
			    			return this.state.searchList.map((item,index)=>{
			    				return (
			    						<div key={index} onClick={this.linkToDt.bind(this,item.pinyinName)} className="vague-item">
									      <span className="item__left">{item.result}</span> 
									      <span className="item__right">{item.area}</span>
									     </div>
			    					)
			    			})
			    		})()
			    	}
			    </div>
			   </div> 
			  </div>
		);
	}
}

export default connect((state) => {
    console.log('state:',state)

    return state
}, (dispatch) => {
    return {
        // changeCityCode(code) {
        //     dispatch({
        //     	type:'setCityCode',
        //     	cityCode: code
        //     })
        // }
    }
})(ShowList);
		       	
