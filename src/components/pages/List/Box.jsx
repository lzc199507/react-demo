import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'animate.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import $ from "jquery";

class Box extends Component {
	constructor(props){
        super(props);
        this.props = props;
        this.state={
        	sortData:[{
        		title:'默认',
        		order:-1
        	},{
        		title:'按价格',
        		order:7
        	},{
        		title:'按日期',
        		order:4
        	}]
        }
    }
   
	render() {
		return (
			<div id='Box'>
			{
				(()=>{
					if(this.props.isShowBox){
						return (
						<ReactCSSTransitionGroup
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={500}
                          transitionName="animated"
                        >
							<div id="category">
							    <div className="sorts__modal modal animated fadeIn">
							        <div className="modal__dialog  animated fadeInDown">
							        {
							        	(()=>{
							        		return this.state.sortData.map((item,idx)=>{
								        		return (
								        			<div onClick={this.props.toggleBox.bind(this,idx)} key={idx} className={idx===0?'item active':'item'}>
										                {item.title}
										            </div>
								        			)
								        	})
							        	})()
							        }
							            
							        </div>
							    </div>
							</div>
							</ReactCSSTransitionGroup>
					)
					}
				})()
			}
			</div>
		);
	}

}

export default connect((state)=>{
    return state
},(dispatch=>{
    return {
    toggleBox(idx,e){
    	$(e.target).parent().children().map((idx,item)=>{
			$(item).removeClass('active')
			})
			$(e.target).addClass('active');
			
			setTimeout(()=>{
				dispatch({
			        type:"toggleBox",
			        isShowBox:false,
			      })
			},300)
			dispatch({
			        type:"toggleOrder",
			        isShowOrder: this.state.sortData[idx].order,
			      })
      
      
    }
  }
}))(Box);
