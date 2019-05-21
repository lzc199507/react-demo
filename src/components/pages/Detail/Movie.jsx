import React, { Component } from 'react';
import MovieDetail from './MovieDetail.jsx'
import Btn from './Btn.jsx'


class Movie extends Component {
	constructor(props) {
		super(props);
		this.props = props;
        this.state={
            film:[]
        }
	}
    componentDidMount(){
        console.log(this.props.match.params.name)
        this.setState({
            film:this.props.match.params.name
        })
    }
    componentWillMount(){
        this.setState({
            film:this.props.match.params.name
        })
    }
    render() {
        return (
            <div id="Movie">
            <div id='wrapper-films.film'>
                <div id='film' className='page'>
                    <div className='page__info'>
                        <MovieDetail history={this.props.history} film={this.state.film}></MovieDetail>
                        <Btn history={this.props.history}></Btn>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Movie;