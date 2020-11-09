import React from 'react';
import { Alert, Tabs, Card, Tree , List, Typography, Icon, Select, Button, Modal, Upload, message, Table } from 'antd';
import styles from './index.less'
import { queryZizhiTree, queryZhiwuTree, queryQualificationList, queryEngageList } from '../../services/zizhi';
import { renderYear } from '@/utils/utils';
import moment from 'moment';

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
    dataIndex: 'RowNum',
  },
  {
    title: '姓名',
    dataIndex: 'Name',
  },
  {
    title: '毕业时间、院校、专业',
    dataIndex: 'GraduationTime',
  },
  {
    title: '职称',
    dataIndex: 'Position',
  },
  {
    title: '专业岗位年限',
    dataIndex: 'MajorYear',
  },
  {
    title: '管理岗位年限',
    dataIndex: 'ManageYear',
  },
  {
    title: '职责范围',
    dataIndex: 'DutyRange'
  },
];

const aacolumns = [
  {
    title: '序号',
    dataIndex: 'RowNum',
  },
  {
    title: '部门',
    dataIndex: 'Dept',
  },
  {
    title: '姓名',
    dataIndex: 'Name',
  },
  {
    title: '聘任职称',
    dataIndex: 'Positional',
  },
  {
    title: '聘任年度',
    dataIndex: 'PositionalYear',
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
class Content extends React.Component {
  state = {
    appartment: '商务部',
    visible: false,
    renzhiTree: [],
    zhiwuTree: [],
    currentId:'',
    list: [],
    cols: ccolumns,
    year: moment().year(),
    isFile: false,
    // engageList: []
  }

  componentDidMount() {
    this.initRenZhiTree();
    this.initZhiwuTree();
    this.fetchQualificationList({
      id: '69717041-9B56-7B83-4307-B9D204791D30',
      year: ''
    })
    // this.fetchEngageList({
    //   id: '',
    //   year: ''
    // })
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

  fetchQualificationList = async (params) => {
    const { typeName } = this.props;
    let list = [];
    if(typeName === '职称聘任') {
      const { data } = await queryEngageList(params);
      list = data;
    } else {
      const { data } = await queryQualificationList(params);
      list = data;
    }
    console.log(list, 'list')
    this.setState({
      list,
      cols: typeName === '职称聘任'? aacolumns: ccolumns,
      isFile: list.length && list[0].ServerUrl
    }) }

  // fetchEngageList = async (params) => {
  //   const { data } = await queryEngageList(params);
  //   this.setState({
  //     engageList: data
  //   })
  // }

  renderTree = (trees) => {
    if(!Array.isArray(trees)) {
      trees = [trees];
    }
    return trees.map(item => (<TreeNode title={item.Name} key={item.Id} isFile={item.isFile}>{item.children.length && this.renderTree(item.children)}</TreeNode>))
  }

  openEdit = () => {
    this.setState({
      visible: true,
    });
  };

  initRenZhiTree = async () => {
    const res = await queryZizhiTree();
    console.log(res, 'renzhiTree');
    this.setState({
      renzhiTree: res
    })
  }

  initZhiwuTree = async () => {
    const res = await queryZhiwuTree();
    console.log(res, 'zhiwuTree');
    this.setState({
      zhiwuTree: res
    })
  }


  onSelect = (selectedKeys, info) => {
    this.setState({
      appartment: info.node.props.title,
      currentId: selectedKeys && selectedKeys[0],
    })
    const { year } = this.state;
    this.fetchQualificationList({
      id: selectedKeys && selectedKeys[0],
      year: info.node.props.isFile ? '' : year,
    })
    console.log('selected', selectedKeys, info);
  };

  render() {
    const { appartment, renzhiTree, zhiwuTree, list,currentId, isFile, cols } = this.state;
    console.log(isFile, 'isFile');
    const { typeName } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.left}>
          <Card title="选择相关部门">
            <div style={{'min-height': 500}}>
            {typeName === '职称聘任' && <Tree showLine defaultExpandAll defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
                {this.renderTree(zhiwuTree)}
              </Tree>}
              {typeName === '任职资格' && <Tree showLine defaultExpandAll defaultCheckedKeys={['162131B1-7B3E-5E28-6710-0A620C8115480']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
              {this.renderTree(renzhiTree)}
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
          {!isFile ? 
          <Card
            bordered={false}
            extra={<div>
              <Button type="link">年度职称聘任</Button>
              <Select defaultValue={moment().year()} style={{ width: 120 , marginRight: 14}} size="small" onSelect={(key)=> {
                this.setState({
                  year: key
                })
                this.fetchQualificationList({
                  year: key,
                  id: currentId
                })}}>
                <Option value="">年度过滤</Option>
                {renderYear().map(v => (
                    <Option value={v}>{v}</Option>
                  ))}
              </Select>
            </div>}
          >
            <div className={styles.right}>
              <Table columns={cols} dataSource={list} size="small"/>
            </div>
          </Card> :
          <iframe style={{ border: 0, padding: 0}} height="1000" name="pdf" width="100%" src={isFile} />}
        </div>
      </div>
    )
  }
}

export default class Zizhi extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="mb-20">
          <Alert message="资质提醒: 最新更新日期 2019-11-03" type="warning" />
        </div> */}
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
