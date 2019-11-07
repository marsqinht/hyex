import { Component } from 'react';
import { Alert, Tabs, Card, Tree , List, Typography, Icon, Select, Button, Modal, Upload } from 'antd';
import Banner from './Banner';
import styles from './index.less'

const { TabPane } = Tabs;
const { TreeNode } = Tree;
const { Option } = Select;
const { Dragger } = Upload;
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
const data = [
  '关于丁更等同志职务任免的通知'
]
class Content extends Component {
  state = {
    appartment: '商务部',
    visible: false
  }

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


  onSelect = (selectedKeys, info) => {
    this.setState({
      appartment: info.node.props.title
    })
    console.log('selected', selectedKeys, info);
  };

  render() {
    const { appartment } = this.state;
    const { typeName } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.left}>
          <Card title="选择部室">
            <div style={{'min-height': 500}}>
              <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect}>
                <TreeNode title="公司" key="0-0" icon={<Icon type="apartment" />}>
                  <TreeNode title="商务部" key="0-0-0" icon={<Icon type="apartment" />} />
                  <TreeNode title="采购部" key="0-0-1" />
                  <TreeNode title="施工管理部" key="0-0-2" />
                  <TreeNode title="工艺系统室" key="0-0-3" />
                  <TreeNode title="管道室" key="0-0-4" />
                  <TreeNode title="设备室" key="0-0-5" />
                  <TreeNode title="电仪室" key="0-0-6" />
                  <TreeNode title="公用工程室" key="0-0-7" />
                  <TreeNode title="工程经济室" key="0-0-8" />
                  <TreeNode title="前期咨询室" key="0-0-9" />
                  <TreeNode title="建筑设计分院" key="0-0-10" />
                  <TreeNode title="QHSE部" key="0-0-11" />
                  <TreeNode title="人力资源与行政" key="0-0-12" />
                  <TreeNode title="项目管理部" key="0-0-13" />
                </TreeNode>
              </Tree>
            </div>
          </Card>
        </div>
        <div className={styles.content}>
          <Modal
            title="编辑"
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
          <Card
            title={appartment}
            extra={<div>
              <Select defaultValue="1" style={{ width: 120 , marginRight: 14}} size="small">
                <Option value="1">年度过滤</Option>
                <Option value="lucy">时间过滤</Option>
                <Option value="disabled">
                  标题
                </Option>
              </Select>
              <Button type="primary" icon="edit" size="small" onClick={this.openEdit}>编辑</Button>
            </div>}
          >
            <div className={styles.right}>
              <List
                header={<div>{typeName}</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark>[NEW]</Typography.Text> {item}
                  </List.Item>
          )}
              />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default class Fawen extends Component {
  render() {
    return (
      <div>
        <div className="mb-20">
          <Alert message="行政提醒: 最新更新日期 2019-11-03" type="info" />
        </div>
        <Tabs type="card" className="mt-20" style={{background: '#fff'}}>
          <TabPane tab="计划与总结" key="1">
            <Content typeName="计划与总结" />
          </TabPane>
          <TabPane tab="管理例会" key="2">
            <Content typeName="管理例会" />
          </TabPane>
          <TabPane tab="公司行政文件" key="3">
            <Content typeName="公司行政文件" />
          </TabPane>
          <TabPane tab="公司党群文件" key="4">
            <Content typeName="公司党群文件" />
          </TabPane>
        </Tabs>,
      </div>
    )
  }
}
