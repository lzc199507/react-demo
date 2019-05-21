import React, { Component } from 'react';
import Basic from './Basic.jsx'
class Detail extends Component {
	constructor(props) {
		super(props);
		this.props = props;
        console.log(props)
        console.log(this.props.match.params.name)
	}
    render() {
        return (
            <div id="wrapper-activity">
                <div className="page-group">
                        <Basic history={this.props.match.params.name} backto={this.props}></Basic>
                    
                </div>
            </div>
        );
    }
}

export default Detail;