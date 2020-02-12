import React from 'react';
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
  Tag,
} from 'antd';
import router from 'umi/router';
import moment from 'moment';
import { goToEdit } from '@/utils/edit';
import styles from './index.less';
import { queryApartmentTree, queryCompayInfo, queryPlanSummary } from '../../services/company';
import { renderYear } from '@/utils/utils';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});
const { TabPane } = Tabs;
const { TreeNode } = Tree;
const { Option } = Select;
const { Dragger } = Upload;

const goDetail = (item, type = '') => {
  const file = item.FileRow.length && item.FileRow[0].ServerUrl;
  const { Name, RegHumName, RegDate } = item;
  if (!file) {
    return;
  }
  const s = item.FileRow[0];
  const ext = s.FileExt;
  if (ext === '.pdf' || ext === '.doc' || ext === '.docx') {
    router.push({
      pathname: '/dashboard/commondetail',
      query: {
        title: Name,
        people: RegHumName,
        date: moment(RegDate).format('YYYY-MM-DD'),
        file,
        type,
      },
    });
  } else {
    window.open(file);
  }
};
const columns = [
  {
    title: '标准文号',
    dataIndex: 'FileCode'
  },
  {
    title: '文件标题',
    // dataIndex: 'Name',
    render: item => <a href="javascript:;" onClick={() => goDetail(item, '公司发文')}> <div>{item.Name}</div></a>
  },
  {
    title: '状态',
    dataIndex: 'Status',
  },
  {
    title: '时间',
    dataIndex: 'RegDate',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
  }]
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
class Content extends React.Component {
  state = {
    appartment: '',
    visible: false,
    data: [],
    currentTab: '计划与总结',
    selectYear: '2020',
    currentPage: 1,
    selectedDept: '',
    total: 0,
    planTotal: 0,
    planData: [],
    tree: {
      children: [],
    },
  };

  componentDidMount() {
    this.fetchTree();
    this.fetchData(1, moment().format('YYYY'));
    this.fetchSummary()
  }

  fetchTree = async () => {
    const tree = await queryApartmentTree();
    console.log(tree);
    this.setState({
      tree,
    });
  };

  fetchSummary = async (id='', page =1, year='') => {
    const res = await queryPlanSummary({id, page, size: 15, year})
    if(res.success) {
      this.setState({
        planData: res.data,
        planTotal: res.total,
      })
    }
  }

  fetchData = async (page = 1, year = '', dept = '') => {
    const { typeName } = this.props;
    const res = await queryCompayInfo({
      size: 15,
      page,
      type: typeName,
      dept,
      year,
    });
    console.log(res.data);
    this.setState({
      data: res.data,
      total: res.total,
    });
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

  goDetail = (item, type = '') => {
    const file = item.FileRow.length && item.FileRow[0].ServerUrl;
    const { Name, RegHumName, RegDate } = item;
    if (!file) {
      return;
    }
    const s = item.FileRow[0];
    const ext = s.FileExt;
    if (ext === '.pdf' || ext === '.doc' || ext === '.docx') {
      router.push({
        pathname: '/dashboard/commondetail',
        query: {
          title: Name,
          people: RegHumName,
          date: moment(RegDate).format('YYYY-MM-DD'),
          file,
          type,
        },
      });
    } else {
      window.open(file);
    }
  };

  onSelect = (selectedKeys, info) => {
    this.setState({
      appartment: info.node.props.title,
    });
    console.log('selected', selectedKeys, info);
  };

  render() {
    const {
      appartment,
      visible,
      data,
      tree,
      selectYear,
      selectedDept,
      total,
      currentPage,
      planTotal,
      planData
    } = this.state;
    const { typeName } = this.props;
    return typeName === '计划与总结' ? (
      <div className={styles.wrap}>
        <div className={styles.left}>
          <Card title="选择部室" className="grandient-bg">
            <div style={{ 'min-height': 500 }}>
              <Tree
                showLine
                defaultExpandedKeys={['0-0']}
                onSelect={this.onSelect}
                showIcon
                onSelect={selectedKeys => {
                  this.setState({
                    selectedDept: selectedKeys[0],
                    currentPage: 1,
                  });
                  this.fetchSummary(selectedKeys[0], 1, '');
                }}
                icon={<MyIcon type="icon-jiaoseguanli" style={{ fontSize: '16px' }} />}
              >
                <TreeNode
                  title={tree.Name}
                  key="0-0"
                  icon={<MyIcon type="icon-zuzhijigouguanli" style={{ fontSize: '16px' }} />}
                >
                  {tree.children.map(child => {
                    return <TreeNode title={child.Name} key={child.Id} />;
                  })}
                </TreeNode>
              </Tree>
            </div>
          </Card>
        </div>
        <div className={styles.content}>
          <Modal title="编辑" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="新建" key="1">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">点击或拖拽到这个区域上传文件</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company
                    data or other band files
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
            extra={
              <div>
                <Select
                  defaultValue=""
                  style={{ width: 120, marginRight: 14 }}
                  size="small"
                  onChange={year => {
                    this.fetchSummary(selectedDept, 1, year);
                  }}
                >
                  <Option value="">年度过滤</Option>
                  {renderYear().map(v => (
                    <Option value={v}>{v}</Option>
                  ))}
                  
                </Select>
                <Button type="link" icon="edit" size="small" onClick={() => goToEdit(typeName)}>
                  编辑
                </Button>
              </div>
            }
          >
            <div className={styles.right}>
              <List
                header={<div style={{ fontWeight: 'bold' }}>{typeName}</div>}
                bordered
                dataSource={planData}
                size="small"
                pagination={{
                  onChange: page => {
                    this.fetchSummary(selectedDept, page, selectYear);
                    console.log(page);
                  },
                  pageSize: 15,
                  current: currentPage,
                  total: planTotal,
                }}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark></Typography.Text>{' '}
                    <a href={item.ServerUrl || 'javascript:;'} target="_blank">{item.FileName}</a>
                  </List.Item>
                )}
              />
            </div>
          </Card>
        </div>
      </div>
    ) : (
      <div>
        <div className={styles.panelwrap}>
          <div className={styles.title}>
            <Button type="link">{typeName}</Button>
            <Tag color="red">{selectYear || moment().year()}</Tag>
          </div>
          <div>
            <Select
              defaultValue="2020"
              style={{ width: 120, marginRight: 14 }}
              size="small"
              onChange={key => {
                this.setState({
                  selectYear: key,
                });
                this.fetchData(1, key);
              }}
            >
              {renderYear().map(v => (
                <Option value={v}>{v}</Option>
              ))}
            </Select>
            <Button type="link" icon="edit" size="small" onClick={() => goToEdit(typeName)}>
                  编辑
            </Button>
          </div>
        </div>
        {typeName === '管理例会' ?  <List
          header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
          bordered
          size="small"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className={styles.list}>
                <a onClick={() => this.goDetail(item, typeName)}>
                  {' '}
                  <div>{item.Name}</div>
                </a>
                <div>{moment(item.RegDate).format('YYYY-MM-DD')}</div>
              </div>
            </List.Item>
          )}
        /> : <Table
          columns={columns}
          dataSource={data}
          size="small"
        />}
       
      </div>
    );
  }
}

export default class Fawen extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="mb-20">
          <Alert message="行政提醒: 最新更新日期 2019-11-03" type="info" />
        </div> */}
        <Tabs className="mt-20" style={{ background: '#fff' }}>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-ziduanduxiepeizhiguanli" style={{ fontSize: '16px' }} />
                计划与总结
              </span>
            }
            key="计划与总结"
          >
            <Content typeName="计划与总结" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-daishenhe" style={{ fontSize: '16px' }} />
                管理例会
              </span>
            }
            key="管理例会"
          >
            <Content typeName="管理例会" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-daiqudangan" style={{ fontSize: '16px' }} />
                公司行政文件
              </span>
            }
            key="公司行政文件"
          >
            <Content typeName="公司行政文件" />
          </TabPane>
          <TabPane
            tab={
              <span>
                <MyIcon type="icon-niandurukushuju" style={{ fontSize: '16px' }} />
                公司党群文件
              </span>
            }
            key="公司党群文件"
          >
            <Content typeName="公司党群文件" />
          </TabPane>
        </Tabs>
        ,
      </div>
    );
  }
}
