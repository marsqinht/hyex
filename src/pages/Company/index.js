import{ Component }from 'react';
import { Alert, Tabs, Card, Tree , List, Typography, Icon, Select, Button, Modal, Upload, message, Table, Tag } from 'antd';
import styles from './index.less'

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});
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
const ccolumns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '星期',
    dataIndex: 'day',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '会议用时',
    dataIndex: 'lastTime',
  },
  {
    title: '地点',
    dataIndex: 'address',
  },
  {
    title: '会议名称',
    dataIndex: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: '会议主题',
    dataIndex: 'theme',
  },
  {
    title: '出席范围',
    dataIndex: 'range',
  },
  {
    title: '召集部门',
    dataIndex: 'part',
  },
];
const cdata = [
  {
    key: '1',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
  {
    key: '2',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '3',
    date: '2019-10-11',
    day: '星期三',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '4',
    date: '2019-10-11',
    day: '星期五',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    title: '2020招聘工作会议',
    theme: '招聘启动会',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '5',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
];
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
      typeName === '计划与总结' ? <div className={styles.wrap}>
        <div className={styles.left}>
          <Card title="选择部室" className="grandient-bg">
            <div style={{'min-height': 500}}>
              <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
                <TreeNode title="公司" key="0-0" icon={<MyIcon type="icon-zuzhijigouguanli" style={{fontSize: '16px'}} />}>
                  <TreeNode title="商务部" key="0-0-0" />
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
            bordered={false}
            className="grandient-bg"
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
                header={<div style={{fontWeight: 'bold'}}>{typeName}</div>}
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
      </div> : <div>
                               <div className={styles.panelwrap}>
          <div className={styles.title}><Button type="link">{typeName}</Button><Tag color="red">2019</Tag></div>
          <div><Select defaultValue="1" style={{ width: 120 , marginRight: 14}} size="small">
                                   <Option value="1">年度过滤</Option>
                                   <Option value="lucy">时间过滤</Option>
                                   <Option value="disabled">
                  标题
            </Option>
                                      </Select>
                                   <Button type="primary" icon="edit" size="small" onClick={this.openEdit}>编辑</Button>
                                 </div>
        </div>
                               <Table columns={ccolumns} dataSource={cdata} />
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
        <Tabs className="mt-20" style={{background: '#fff'}}>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-ziduanduxiepeizhiguanli" style={{fontSize: '16px'}} />
                    计划与总结
              </span>}
            key="1"
          >
            <Content typeName="计划与总结" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-daishenhe" style={{fontSize: '16px'}} />
                    管理例会
              </span>}
            key="2"
          >
            <Content typeName="管理例会" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-daiqudangan" style={{fontSize: '16px'}} />
                    公司行政文件
              </span>}
            key="3"
          >
            <Content typeName="公司行政文件" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-niandurukushuju" style={{fontSize: '16px'}} />
                    公司党群文件
              </span>}
            key="4"
          >
            <Content typeName="公司党群文件" />
          </TabPane>
        </Tabs>,
      </div>
    )
  }
}
