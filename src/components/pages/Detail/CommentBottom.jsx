import React, { Component } from 'react';


class CommentBottom extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state={
            
        }
    }

    render() {
        return (
<div id="CommentBottom">
    <div className="related-movie">
        <div className="poster__wrapper">
            <img className="poster-img" src="http://image3.xishiqu.cn/upload/film/920/181/920181204//8C3B1D6A-B6A4-9375-6FBE-CAC417FFF0EB.jpg"/>
        </div>
        <div className="movie__info">
            <h2>
                海王
            </h2>
            <div className="score__wrapper">
                <span>
                    <label>
                        豆瓣
                    </label>
                    8.4
                </span>
                <span>
                    <label>
                        格瓦拉
                    </label>
                    8.5
                </span>
            </div>
            <p className="critic">
                痞先生说：
            </p>
            <p className="criticism">
                华纳兄弟影片公司与导演温子仁联手为您呈现波澜壮阔的动作冒险电影——《海王》！横跨七大洋的广阔海底世界徐徐展开，给观众带来震撼十足的视觉奇观。本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。
            </p>
        </div>
    </div>
</div>
);
    }
}

export default CommentBottom;
