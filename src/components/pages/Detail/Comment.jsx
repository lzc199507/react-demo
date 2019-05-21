import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import UploadImg from './UploadImg.jsx'
import CommentBottom from './CommentBottom.jsx'
// import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


class Comment extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      content: '',
    }
  }

  successToast () {
    if (this.state.content) {
      Toast.success('评论成功', 2, () => {
        this.props.history.go(-1)
      })
    } else {
      Toast.fail('请输入内容', 2)
    }
  }

  getText (e) {
    console.log(e.target.value)
    this.setState({
      content: e.target.value,
    })
  }

  render () {
    return (
      <div>
        <div className="page" id="comment">
          <div className="page__header" type="primary">
            <div className="left">
              <i className="icon icon-angle-left" />

            </div>
            <div className="middle">
              <span>
                发表评论
              </span>
            </div>
            <div className="right" />
          </div>
          <div className="page__content">
            <div className="comment-area clearfix">
              <textarea onBlur={this.getText.bind(this)} placeholder="聊聊你的感受..." />
              <button onClick={this.successToast.bind(this)} className="comment-area__submit">
                提交评论
              </button>
            </div>

          </div>
          <UploadImg />
          <CommentBottom />
        </div>

      </div>
    )
  }
}

export default Comment
