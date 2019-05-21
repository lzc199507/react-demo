import React, { Component } from 'react';

import { connect } from 'react-redux';

import '../../../styles/search.scss';

import HotShow from './HotShow.jsx';

import ShowList from './ShowList.jsx';

class Search extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			cityData : [],
			ifShow: true,
			closeIcon: false,
			inputText: '',
			searchList: [],
			cityCode: '' ,
			sendText: ''
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

	componentDidMount(){
		var code = this.getCookie('cityCode');
		// console.log(code);
		this.setState({
			cityCode: code
		},()=>{
			console.log(this.state.cityCode);
			this.props.changeCityCode(this.state.cityCode);
		})

	}

	navigateTo(e){
		this.props.history.go(-1)
	}

	hideList(e){
		this.setState({
			ifShow: false
		})
	}

	showList(e){
		if(this.state.inputText === ''){
			this.setState({
				ifShow: true
			})
			
		}
	}

	inputValue(e){
		// console.log(e.target.value);
		this.setState({
			inputText: e.target.value
		})
		var code1 = this.getCookie('cityCode');
		console.log(code1);
		
	}

	clearText(e){
		this.setState({
			inputText: '',
			ifShow: true
		})
	}

	handleSelect(e) {
		console.log(this);
        this.setState({sendText: e.target.innerText},()=>{
	        console.log(this.state.sendText);
        	
        });
    }

	// checkTo(code,e){
	// 	console.log(code);
	// 	this.setCookie('cityCode',code,1);
	// 	this.props.history.push({pathname: '/home'});
	// }

	render() {
		return (
		   		<div id="wrapper-search">
				   <div id="search" className="page">
				    <div className="page__search">
				     <div className="search__left">
				      <i className="icon icon-search"></i>
				      {
				      	(()=>{
				      		return (<input onFocus={this.hideList.bind(this)} 
				      			onBlur={this.showList.bind(this)} 
				      			onChange={this.inputValue.bind(this)} 
				      			placeholder="搜索明星、演出、场馆"
				      			type="text" value={this.state.inputText}
				      			className="left__input" /> )
				      	})()
				      }
				      
				      {
				      	(()=>{
				      		if(this.state.inputText !==''){
							   return (<i onClick={this.clearText.bind(this)} className="icon icon-close"></i>) 
				      			
				      		}
				      	})()
				      }
				     </div> 
				     <span className="search__right" onClick={this.navigateTo.bind(this)}> 取消 </span>
				    </div> 
				    <div className="page__content">
				    	
				    		<HotShow  ifShow={this.state.ifShow} handleSelect={this.handleSelect} />

				    		{
				    			(()=>{
				    				if(!this.state.ifShow){
				    					return (<ShowList history={this.props.history} text={this.state.inputText}  newText={this.state.sendText} />)
				    				}
				    			})()
				    		}
				    	
				    </div>
				   </div> 
				  </div>
			);
	}
}

// connet的第一个函数是获取store里面的值返回给组件     (拿)
// 二而第二个函数是定义一个方法给自身使用，而这个方法可以出发store里面的action   （改）
export default connect((state) => {
    console.log(state)
    return state
}, (dispatch) => {
    return {
        changeCityCode(code) {
            dispatch({
            	type:'setCityCode',
            	cityCode: code
            })
        }
    }
})(Search);
