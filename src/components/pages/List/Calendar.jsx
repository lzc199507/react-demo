import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'animate.css';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
class Calendar extends Component {
  constructor(props){
    super(props);
    this.props=props;
  }
  render() {
    return (
<div className="calendar">
    {
      (()=>{
        if(this.props.isCalendar){
          return (
            <ReactCSSTransitionGroup
                          transitionEnter={true}
                          transitionLeave={true}
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={500}
                          transitionName="animated"
                        >
            <div className='animated fadeInDown'>
            <div className="calendar-header">
            <ul className="controls">
                <li className="prev">
                    <i className="icon icon-angle-left">
                    </i>
                </li>
                <li className="title">
                    <span>
                        2018年
                    </span>
                    <span>
                        12月
                    </span>
                </li>
                <li className="next">
                    <i className="icon icon-angle-right">
                    </i>
                </li>
            </ul>
            <ul className="weekdays">
                <li className="i">
                    日
                </li>
                <li className="i">
                    一
                </li>
                <li className="i">
                    二
                </li>
                <li className="i">
                    三
                </li>
                <li className="i">
                    四
                </li>
                <li className="i">
                    五
                </li>
                <li className="i">
                    六
                </li>
            </ul>
        </div>
        <div className="calendar-body" onClick={this.props.toggleCalendar.bind(this)}>
            <div className="days">
                <div className="group">
                    <div className="i">
                        <span className="day disabled selectable">
                            25
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            26
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            27
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            28
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            29
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            30
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            1
                        </span>
                    </div>
                </div>
                <div className="group">
                    <div className="i">
                        <span className="day selectable">
                            2
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            3
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            4
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            5
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            6
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            7
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            8
                        </span>
                    </div>
                </div>
                <div className="group">
                    <div className="i">
                        <span className="day selectable">
                            9
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            10
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            11
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            12
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            13
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            14
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            15
                        </span>
                    </div>
                </div>
                <div className="group">
                    <div className="i">
                        <span className="day selectable">
                            16
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            17
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            18
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            19
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            20
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            21
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            22
                        </span>
                    </div>
                </div>
                <div className="group">
                    <div className="i">
                        <span className="day selectable">
                            23
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            24
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            25
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            26
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            27
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            28
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            29
                        </span>
                    </div>
                </div>
                <div className="group">
                    <div className="i">
                        <span className="day selectable">
                            30
                        </span>
                    </div>
                    <div className="i">
                        <span className="day selectable">
                            31
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            1
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            2
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            3
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            4
                        </span>
                    </div>
                    <div className="i">
                        <span className="day disabled selectable">
                            5
                        </span>
                    </div>
                </div>
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
      toggleCalendar(){
      dispatch({
        type:"toggleCalendar",
        isCalendar:false,
      })
    }
      
      
    }
  }
))(Calendar);
