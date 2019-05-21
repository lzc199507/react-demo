import React, { Component } from 'react';


class Btn extends Component {
	constructor(props) {
		super(props);
		this.props = props;
        this.state={
            
        }
	}
    toComment(){
        this.props.history.push({pathname:'/comment'})
    }

    render() {
        return (
            <div id="Btn">
                <div className="page__btn"><div className="btn btn__write" onClick={this.toComment.bind(this)}><i className="icon icon-chat"></i>
                    写影评
                </div> <div className="btn btn__seat">
                    比价选座
                </div></div>
            </div>

        );
    }
}

export default Btn;