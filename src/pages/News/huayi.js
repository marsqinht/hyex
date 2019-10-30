
import { Icon, Button, Table, Modal, Tabs, Upload, message } from 'antd';
import { Component } from 'react';
// import router from 'umi/router';
// import Detail from './detail';
import styles from './huayi.less';

// const { Option } = Select;
const { TabPane } = Tabs;
const { Dragger } = Upload;



const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '更新时间',
    className: 'column-time',
    dataIndex: 'time',
  },
  {
    title: '评论',
    dataIndex: 'commet',
    render: text => <a>评论(2)</a>,
  },
  {
    title: '浏览',
    dataIndex: 'address',
    render: text => <div>浏览(2)</div>,
  },
];

const data = [
  {
    key: '1',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-10',
    address: 'New York No. 1 Lake Park',
    commet: 'dd'
  },
  {
    key: '2',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-20',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  },{
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  },{
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  },{
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  }
];

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class Huayi extends Component{
  state = {
    visible: false,
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  openEdit = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Modal
          title="编辑党群通讯"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="新建" key="1">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
                <p className="ant-upload-text">点击或拖拽到这个区域上传文件</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data
                    or other band files
              </p>
              </Dragger>
            </TabPane>
            <TabPane tab="修改" key="2">
              <Upload
                defaultFileList={[
                    {
                      uid: '1',
                      name: '华谊工程新闻.doc',
                      status: 'done',
                      response: 'Server Error 500', // custom error message to show
                      url: 'http://www.baidu.com/xxx.png',
                    },
                  ]}
              />
            </TabPane>
          </Tabs>
        </Modal>
        <div className={styles.edit}>
          <Button type="primary" onClick={this.openEdit}>编辑</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          title={() => (<div style={{ textAlign: 'center'}}>华谊工程</div>)}
        />
      </div>
    )
  }
}