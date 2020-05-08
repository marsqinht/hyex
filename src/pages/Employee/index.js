import React from 'react';
import {
  Card,
  Alert,
  Tabs,
  Tree,
  Icon,
  Form,
  Input,
  Button,
  Select,
  Collapse,
  Descriptions,
  Table,
  Radio,
} from 'antd';
import moment from 'moment';

import styles from './employee.less';
import { queryDepartmentTree, queryHumanfo, queryDetail } from '../../services/employee';

const { TreeNode } = Tree;
const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '所在单位',
    dataIndex: 'unit',
  },
  {
    title: '担任职务',
    dataIndex: 'job',
  },
  {
    title: '开始时间',
    dataIndex: 'StartDate',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
  },
  {
    title: '结束时间',
    dataIndex: 'EndDate',
    render: time => <div>{time ? moment(time).format('YYYY-MM-DD') : ''}</div>,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    company: '华谊工程有限公司',
    zhiwu: '副总经理',
    address: 'New York No. 1 Lake Park',
    start: '2019/09/12',
    end: '',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12',
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    zhiwu: '市场总监',
    company: '华谊工程有限公司',
    address: 'Sidney No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12',
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12',
  },
  {
    key: '6',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12',
  },
];

const ccolumns = [
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '角色',
    dataIndex: 'Role',
  },
  {
    title: '起止日期',
    dataIndex: 'Date',
  },
  {
    title: '工程项目内容',
    dataIndex: 'Content',
  },
];
const cdata = [
  {
    key: '1',
    role: '项目经理',
    time: '2009.10-2012.2',
    content: 'DSM Zeland Project',
  },
  {
    key: '2',
    role: '项目副经理,专业负责人,设计',
    time: '2009.10-',
    content: '江苏恒神纤维材料有限公司',
  },
  {
    key: '3',
    role: '项目经理',
    time: '2009.10-2012.2',
    content: 'DSM Zeland Project',
  },
  {
    key: '4',
    role: '项目副经理,专业负责人,设计',
    time: '2009.10-',
    content: '江苏恒神纤维材料有限公司',
  },
];

const Edata = [
  {
    part: 'No.234',
    children: [
      {
        name: '李子煜',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com',
      },
      {
        name: '李大锤',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com',
      },
      {
        name: '王森',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        selected: true,
        mail: 'liziyu@hyec.com',
      },
    ],
  },
  {
    part: 'No.235',
    children: [
      {
        name: '李子煜',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com',
      },
      {
        name: '李大锤',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com',
      },
      {
        name: '王森',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com',
      },
    ],
  },
];
@Form.create()
class Employee extends React.Component {
  state = {
    tree: {
      name: '',
      children: [],
    },
    userList: [],
    detailInfo: {
      MajorRow: [],
      WorkRow: [],
    },
    userMapByRoom: {},
    currentSearchKey: 'code',
  };

  componentDidMount() {
    this.getTree();
    // this.getUser('6B19CA5F-0E91-46B4-9CBE-ACED20678E32');
    // this.getDetail();
  }

  async getTree() {
    const res = await queryDepartmentTree();

    this.setState({
      tree: res,
    });
  }

  getUser = async (id, currentSearchKey = 'name', name = '') => {
    const res = await queryHumanfo({
      id,
      [currentSearchKey]: name,
    });
    console.log(res);
    const userFenLeiMap = {};
    if (res.success && res.data.length) {
      res.data.forEach(item => {
        if (!userFenLeiMap[item.RoomNumber]) {
          userFenLeiMap[item.RoomNumber] = [item];
        } else {
          userFenLeiMap[item.RoomNumber].push(item);
        }
      });
      this.setState({
        userMapByRoom: userFenLeiMap,
      });
    }
    this.setState({
      userList: res.data,
    });
    if (res.data.length) {
      this.getDetail(res.data[0].Id);
    }
  };

  getDetail = async (id = 'F9C5A047-6488-4C45-865C-2AA2773A68E8') => {
    const { data, success } = await queryDetail({ id });
    console.log(data);
    if (success) {
      if (data.length && data[0]) {
        data[0].MajorRow = data[0].MajorRow.map((v, index) => {
          return {
            ...v,
            key: index + 1,
          };
        });
        data[0].WorkRow = data[0].WorkRow.map((v, index) => {
          return {
            ...v,
            key: index + 1,
          };
        });
      }
      this.setState({
        detailInfo: data.length && data[0],
      });
    }
  };

  onSelect = key => {
    console.log(key);
    this.getUser(key && key[0]);
  };

  render() {
    const { tree, userList, detailInfo, userMapByRoom, currentSearchKey } = this.state;
    return (
      <div>
        {/* <Alert message="友情提示" description="最近更新日期 2019-11-11" type="info" showIcon /> */}
        {/* <Card style={{ marginTop: 20, height: '78vh' }}> */}
        <div style={{backgroundColor: '#fff'}}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <MyIcon type="icon-yonghuguanli" style={{ fontSize: '16px' }} />
                  员工信息
                </span>
              }
              key="1"
            >
              <div className={styles.content}>
                <Card>
                  <Tree
                    showLine
                    defaultExpandAll
                    defaultSelectedKeys={[]}
                    onSelect={this.onSelect}
                    showIcon
                    icon={<MyIcon type="icon-jiaoseguanli" style={{ fontSize: '16px' }} />}
                  >
                    <TreeNode
                      title={tree.Name}
                      key="0-0"
                      icon={<MyIcon type="icon-zuzhijigouguanli" style={{ fontSize: '16px' }} />}
                    >
                      {tree.children.map((child, index) => {
                        return <TreeNode title={child.Name} key={child.Id} />;
                      })}
                      {/* <TreeNode title="副总工程师" key="0-0-1" />
                      <TreeNode title="设计事业部" key="0-0-2" />
                      <TreeNode title="综合管理部" key="0-0-3" />
                      <TreeNode title="总承包事业部" key="0-0-4" />
                      <TreeNode title="党群工作部" key="0-0-5" />
                      <TreeNode title="QHSE部" key="0-0-6" />
                      <TreeNode title="精细化工事业部" key="0-0-7" />
                      <TreeNode title="资产财务部" key="0-0-8" />
                      <TreeNode title="数字化中心" key="0-0-9" />
                      <TreeNode title="建筑设计分院" key="0-0-10" />
                      <TreeNode title="技术公司" key="0-0-11" />
                      <TreeNode title="华谊信息运维" key="0-0-12" /> */}
                    </TreeNode>
                  </Tree>
                </Card>
                <div className={styles.right}>
                  <Card>
                    <div>
                      <Select
                        defaultValue="code"
                        style={{ width: 120 }}
                        onChange={key => this.setState({ currentSearchKey: key })}
                      >
                        <Option value="code">按英文</Option>
                        <Option value="name">按中文名</Option>
                       
                        <Option value="phone">按分机号</Option>
                        {/* <Option value="lucy">按部门</Option> */}
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => this.getUser('', currentSearchKey, value)}
                        style={{ width: 200, marginLeft: '10px' }}
                      />
                    </div>
                    <div className={styles.list}>
                      {Object.keys(userMapByRoom).map(room => {
                        return (
                          <div className="mt-20">
                            <Collapse defaultActiveKey={['0', '1']} bordered={false}>
                              <Panel
                                showArrow={false}
                                header={
                                  <div>
                                    <Icon type="idcard" theme="twoTone" /> {room}
                                  </div>
                                }
                              >
                                <div className={styles.part}>
                                  {userMapByRoom[room].map(child => {
                                    return (
                                      <div
                                        className={styles.nameWrap}
                                        onClick={() => this.getDetail(child.Id)}
                                      >
                                        <div className={styles.name}>{child.Name}</div>
                                        <div className={styles.fenji}>{child.Phone}</div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </Panel>
                            </Collapse>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-20">
                      <Tabs defaultActiveKey="1" type="card" size="small">
                        <TabPane
                          tab={
                            <span>
                                <MyIcon
                                type="icon-zhengjixiangguanrenyuanxinxi"
                                style={{ fontSize: '16px' }}
                              />
                              基本信息
                              </span>
                          }
                          key="1"
                        >
                          <div className={styles.info}>
                            <div style={{ flex: 1 }}>
                                <Descriptions bordered title="基本信息" size="small">
                                <Descriptions.Item label="姓名" span={3}>
                                  {detailInfo.Name}
                                </Descriptions.Item>
                                <Descriptions.Item label="职位">
                                  {detailInfo.PosiName}
                                </Descriptions.Item>
                                <Descriptions.Item label="直线">
                                  {detailInfo.StraightLine}
                                </Descriptions.Item>
                                <Descriptions.Item label="分机">
                                  {detailInfo.Phone}
                                </Descriptions.Item>
                                <Descriptions.Item label="手机">
                                  {detailInfo.Mobile}
                                </Descriptions.Item>
                                <Descriptions.Item label="邮箱">
                                  {detailInfo.Email}
                                </Descriptions.Item>
                              </Descriptions>
                              </div>
                            <div style={{ width: 85, marginLeft: '10px' }}>
                                <img
                                width={85}
                                height={115}
                                src={`data:image/jpg;base64,${detailInfo.Picture}`}
                              />
                              </div>
                          </div>
                        </TabPane>
                        <TabPane
                          tab={
                            <span>
                                <MyIcon
                                type="icon-yuanchengjieyuetongji"
                                style={{ fontSize: '16px' }}
                              />
                              工作履历
                              </span>
                          }
                          key="2"
                        >
                          <Table
                            columns={columns}
                            dataSource={detailInfo.WorkRow}
                            size="small"
                            pagination={false}
                          />
                        </TabPane>
                        <TabPane
                          tab={
                            <span>
                                <MyIcon
                                type="icon-wodegongzuoqingkuang"
                                style={{ fontSize: '16px' }}
                              />
                              专业经历
                              </span>
                          }
                          key="3"
                        >
                          {/* <Radio.Group value={1}>
                            <Radio value={1}>中文</Radio>
                            <Radio value={2}>英文</Radio>
                          </Radio.Group> */}
                          <div style={{ marginTop: 10 }}>
                            <Table
                                columns={ccolumns}
                                dataSource={detailInfo.MajorRow}
                                size="small"
                                pagination={false}
                              />
                          </div>
                        </TabPane>
                      </Tabs>
                    </div>
                  </Card>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
        {/* </Card> */}
      </div>
    );
  }
}

export default Employee;
