import React, { Component } from 'react';

import { connect } from 'react-redux';

class HotShow extends Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state={
			// cityCode: '021',
			cityData: []
		}
	}

	// getKey(e){
	// 	console.log(e.target.innerText);
	// }

	getSearchData(cityCode){
		React.axios.get(`http://localhost:1234/getSearchData?cityCode=${cityCode}`
	      )
	      .then((res)=>{
	      		// console.log(res.data.result.hotSearches);
	        	this.setState({
	        		cityData : res.data.result.hotSearches
	        	})
	        	console.log(this.state.cityData);
	      })
	      .catch((err)=>{
	        
	        console.log(err)
	      })
	}

	componentDidMount(){
		console.log('props:',this.props);
		this.getSearchData(this.props.cityCode);

	}

	render() {
		return (
			<div className="initial" style={{display:this.props.ifShow?"block":"none"}}>
		       		{
			    		 (() => {
							var listItem = this.state.cityData.map((item, index) => {
							 	return (
							 			<li key={index} onClick={this.props.handleSelect.bind(this)} className="list__item">{item}</li>
							 		)
							 	})
								if(this.state.cityData.length !== 0){
									return (
										<div className="hot-show">
									       <h3 className="show__title">热门演出</h3> 
									       <ul className="show__list clearfix">
									       		{listItem}
									       </ul>
								     	</div> 
									)
								}

						 })()
					}
		       
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
})(HotShow);
// export default HotShow;
		       	
