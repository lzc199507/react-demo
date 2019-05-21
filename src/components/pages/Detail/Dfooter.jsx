import React, { Component } from 'react';
class Dfooter extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props)
    }
    render() {
        return (
            <div className="page__footer">
                <a className="item icon icon-service" href="tel:4000039992">
                </a>
                <span className="item icon icon-like">
                </span>
                <div className="item btn">
                    比价购票
                </div>
            </div>
        );
    }
}

export default Dfooter;