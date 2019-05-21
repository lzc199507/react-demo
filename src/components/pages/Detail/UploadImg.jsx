import React, { Component } from 'react';
import { Button , Upload , Dialog } from 'element-react';
//import 'element-theme-default';
class UploadImg extends Component {
    constructor(props) {
  super(props);

  this.state = {
    dialogImageUrl: '',
    dialogVisible: false,
  };
}

render() {
  const { dialogImageUrl, dialogVisible } = this.state;
  return (
    <div id='comment'>
      <div className='page__content'>
    <div className='comment-area-bar__wrapper' style={{height:'145px',paddingTop:'30px'}}>
      <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        listType="picture-card"
        limit={2}
        onPreview={file => this.handlePictureCardPreview(file)}
        onRemove={(file, fileList) => this.handleRemove(file, fileList)}
      >
        <i className="el-icon-plus"></i>
      </Upload>
      <Dialog
        visible={dialogVisible}
        size="tiny"
        onCancel={() => this.setState({ dialogVisible: false })}
      >
        <img width="100%" src={dialogImageUrl} alt="" />
      </Dialog>
    </div>
    </div>
    </div>
  )
}

handleRemove(file, fileList) {
  console.log(file, fileList);
}

handlePictureCardPreview(file) {
  this.setState({
    dialogImageUrl: file.url,
    dialogVisible: true,
  })
}

    
}

export default UploadImg;
