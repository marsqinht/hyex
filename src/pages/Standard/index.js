import { Component } from 'react';
import {
  Alert,
  Tabs,
  Card,
  Tree,
  List,
  Typography,
  Icon,
  Select,
  Button,
  Modal,
  Upload,
  message,
  Table,
  Input,
} from 'antd';
import { queryDocContents, queryDocs } from '../../services/standard';
import styles from './index.less';

const { TabPane } = Tabs;
const { TreeNode } = Tree;
const { Option } = Select;
const { Dragger } = Upload;
const { Search } = Input;

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});
const ccolumns = [
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '文档名称',
    dataIndex: 'Name',
  },
  {
    title: '发布日期',
    dataIndex: 'RegDate',
  },
  {
    title: '文件级别',
    dataIndex: 'level',
  },
];
const cdata = [
  {
    key: '1',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '公司大堂欢迎词用标准模板',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心',
    level: 0,
  },
  {
    key: '2',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '公司大堂欢迎词用标准模板',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    memo: '低值高聘',
    man: '毛经理',
    part: '数字化中心',
    level: 0,
  },
  {
    key: '3',
    date: '2019-10-11',
    day: '星期三',
    zhicheng: '质量工程师',
    name: '公司大堂欢迎词用标准模板',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心',
    level: 0,
  },
  {
    key: '4',
    date: '2019-10-11',
    day: '星期五',
    zhicheng: '质量工程师',
    name: '公司大堂欢迎词用标准模板',
    year: 2019,
    age: 32,
    address: '14号楼303',
    title: '2020招聘工作会议',
    part: '设计事业部',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心',
    level: 0,
  },
  {
    key: '5',
    date: '2019-10-11',
    day: '星期一',
    zhicheng: '质量工程师',
    name: '公司大堂欢迎词用标准模板',
    year: 2019,
    age: 32,
    address: '14号楼303',
    part: '设计事业部',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心',
    level: 0,
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
// const data = ['关于丁更等同志职务任免的通知'];
class Content extends Component {
  state = {
    appartment: '商务部',
    visible: false,
    contents: [],
    list: []
  };

  componentDidMount() {
    this.fetchContents();
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

  fetchContents = async ()=> {
    const data  = await queryDocContents();
    if(data && data.length) {
      this.setState({
        contents: data
      })
    }
  }

  fetchDocs = async () => {
    const { data, success } = await queryDocs({});
    if(success) {
      this.setState({
        list: data
      })
    }
    
  }

  onSelect = (selectedKeys, info) => {
    this.setState({
      appartment: info.node.props.title,
    });
    console.log('selected', selectedKeys, info);
  };

  render() {
    const { appartment, contents, list } = this.state;
    const { typeName } = this.props;
    return (
      <div className={styles.wrap}>
        <div className={styles.left}>
          <Card title="HYEC标准文档" className="grandient-bg">
            <div style={{ 'min-height': 500 }}>
              {typeName === '任职资格' && (
                <Tree
                  showLine
                  defaultExpandedKeys={['0-0-0']}
                  defaultExpandAll
                  onSelect={this.onSelect}
                  showIcon
                  icon={<MyIcon type="icon-jiaoseguanli" style={{ fontSize: '16px' }} />}
                >
                  {contents.map(v => {
                    return <TreeNode
                      title={v.Name}
                      key={v.Id}
                    >
                      {v.children.length && v.children.map(child => {
                        return <TreeNode
                          title={child.Name}
                          key={child.Id}
                        />
                      })}
                           </TreeNode>
                  })}
                </Tree>
              )}
            </div>
          </Card>
        </div>
        <div className={styles.content}>
          <Card
            bordered={false}
            className="grandient-bg"
            extra={
              <div>
                <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                  <Option value="1">文档名称</Option>
                </Select>
                <Search
                  placeholder="请输入关键字"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                />
              </div>
            }
          >
            <div className={styles.right}>
              <Table columns={ccolumns} dataSource={list} />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default class Zizhi extends Component {
  render() {
    return (
      <div>
        <Content typeName="任职资格" />
      </div>
    );
  }
}
