import React from "react";
import { connect } from 'react-redux';
class Wgallery extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(props)
        this.state = {
            bigPic:this.props.chuan
        }
    }
    render() {
        return (
            <div className="full-screen  swiper-container-horizontal swiper-container-ios" 
            style={{ display: this.props.isShowGallery.bool?'block':'none'}} 
            onClick={this.props.toggleGallery.bind(this)}>
                            <div className="swiper-wrapper" >
                             
                                            <div className="swiper-slide" style={{width: "375px"}} >
                                    <img src={this.props.isShowGallery.src} alt="adasdsd" />
                                    
                                </div>
                              
                               {/* <div className="swiper-slide" style={{width: "375px"}}>
                                    <img className="swiper-lazy swiper-lazy-loaded" src="http://image.xishiqu.cn/upload/activity/000/000/934//o/CDD57B6D-F7A7-FEBD-3B64-EF79D21B55AE.jpg"/>
                                    
                                </div>
                                <div className="swiper-slide swiper-slide-prev" style={{width: "375px"}}>
                                    <img className="swiper-lazy" data-src="http://image6.xishiqu.cn/upload/activity/000/000/934//o/454A3556-1832-678F-D570-8F7656160E99.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>
                                <div className="swiper-slide swiper-slide-active" style={{width: "375px"}}>
                                    <img className="swiper-lazy swiper-lazy-loaded" src="http://image3.xishiqu.cn/upload/activity/000/000/934//o/9E37F852-A73B-E371-E2E8-446FC70520F0.jpg"/>
                                    
                                </div>
                                <div className="swiper-slide swiper-slide-next" style={{width: "375px"}}>
                                    <img className="swiper-lazy" data-src="http://image5.xishiqu.cn/upload/activity/000/000/934//o/865DD4AE-1428-FBE9-1886-4CAA1C4696A2.jpg"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                        </div>
                                    
                                </div>*/}
                            </div>
                            <span aria-atomic="true" aria-live="assertive" className="swiper-notification">
                            </span>
                        </div>
        )
    }
}

export default connect((state)=>{
    return state
},(dispatch=>{
    return {
		toggleGallery(){
			dispatch({
				type:"toggleGallery",
				isShowGallery:{
					bool: !this.props.isShowGallery.bool,
        			src:""
				}
			})
		}
	}
}))(Wgallery);