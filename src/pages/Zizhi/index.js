import{ Component }from 'react';
import { Alert, Tabs, Card, Tree , List, Typography, Icon, Select, Button, Modal, Upload, message, Table } from 'antd';
import styles from './index.less'

const { TabPane } = Tabs;
const { TreeNode } = Tree;
const { Option } = Select;
const { Dragger } = Upload;

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});
const ccolumns = [
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '部门',
    dataIndex: 'part',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '聘任职称',
    dataIndex: 'zhicheng',
  },
  {
    title: '聘任年度',
    dataIndex: 'year',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    render: text => <a>{text}</a>,
  },
];
const cdata = [
  {
    key: '1',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '李子煜',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
  {
    key: '2',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '李子煜',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    memo: '低值高聘',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '3',
    date: '2019-10-11',
    day: '星期三',
    zhicheng: '质量工程师',
    name: '李子煜',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '4',
    date: '2019-10-11',
    day: '星期五',
    zhicheng: '质量工程师',
    name: '李子煜',
    year: 2019,
    age: 32,
    address: '14号楼303',
    title: '2020招聘工作会议',
    part: '设计事业部',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '5',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '李子煜',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
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
          <Card title="选择相关部门" className="grandient-bg">
            <div style={{'min-height': 500}}>
            {typeName === '职称聘任' && <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
                <TreeNode title="技术职称聘任一览表" key="0" icon={<MyIcon type="icon-zuzhijigouguanli" style={{fontSize: '16px'}} />}>
                  <TreeNode title="华谊工程" key="0-0" icon={<MyIcon type="icon-zuzhijigouguanli" style={{fontSize: '16px'}} />}>
                    <TreeNode title="公司高管" key="0-0-0" />
                    <TreeNode title="设计事业部" key="0-0-1" />
                    <TreeNode title="总承包事业部" key="0-0-2" />
                    <TreeNode title="党群工作部" key="0-0-3" />
                    <TreeNode title="精细化工事业部" key="0-0-4" />
                    <TreeNode title="资产财务部" key="0-0-5" />
                    <TreeNode title="QHSE部" key="0-0-6" />
                    <TreeNode title="数字化中心" key="0-0-7" />
                    <TreeNode title="技术公司" key="0-0-8" />
                  </TreeNode>
                </TreeNode>
              </Tree>}
              {typeName === '任职资格' && <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
                  <TreeNode title="项目及技术岗位任职一览表" key="0-0" icon={<MyIcon type="icon-zuzhijigouguanli" style={{fontSize: '16px'}} />}>
                    <TreeNode title="项目经理" key="0-0-0" />
                    <TreeNode title="项目、专业审定" key="0-0-1" />
                    <TreeNode title="设计经理" key="0-0-2" />
                    <TreeNode title="专业工程师" key="0-0-3" />
                    <TreeNode title="质量工程师" key="0-0-4" />
                    <TreeNode title="IT工程师" key="0-0-5" />
                    <TreeNode title="采购经理" key="0-0-6" />
                    <TreeNode title="施工经理" key="0-0-7" />
                    <TreeNode title="费用控制工程师" key="0-0-8" />
                    <TreeNode title="进度控制工程师" key="0-0-9" />
                    <TreeNode title="材料控制工程师" key="0-0-10" />
                    <TreeNode title="开车经理" key="0-0-11" />
                    <TreeNode title="HSE工程师" key="0-0-12" />
                    <TreeNode title="设、校、审" key="0-0-13" />
                    <TreeNode title="个别项目技术岗位任职表" key="0-0-14" />
                  </TreeNode>
              </Tree>}
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
            bordered={false}
            className="grandient-bg"
            extra={<div>
              <Button type="link">2019年度职称聘任</Button>
              <Select defaultValue="1" style={{ width: 120 , marginRight: 14}} size="small">
                <Option value="1">年度过滤</Option>
                <Option value="lucy">时间过滤</Option>
                <Option value="disabled">
                  标题
                </Option>
              </Select>
            </div>}
          >
            <div className={styles.right}>
              <Table columns={ccolumns} dataSource={cdata} />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default class Zizhi extends Component {
  render() {
    return (
      <div>
        <div className="mb-20">
          <Alert message="资质提醒: 最新更新日期 2019-11-03" type="warning" />
        </div>
        <Tabs className="mt-20" style={{background: '#fff'}}>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-zhengshu" style={{fontSize: '16px'}} />
                    任职资格
              </span>}
            key="1"
          >
            <Content typeName="任职资格" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-suoyouyishenpijilu" style={{fontSize: '16px'}} />
                    职称聘任
              </span>}
            key="2"
          >
            <Content typeName="职称聘任" />
          </TabPane>
        </Tabs>,
      </div>
    )
  }
}
