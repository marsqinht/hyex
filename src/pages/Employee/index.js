import React from 'react';
import { Card, Alert, Tabs, Tree, Icon, Form, Input, Button, Select, Collapse, Descriptions, Table, Radio } from 'antd';
import styles from './employee.less';

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
    dataIndex: 'key'
  },
  {
    title: '所在单位',
    dataIndex: 'company',
  },
  {
    title: '担任职务',
    dataIndex: 'zhiwu',
  },
  {
    title: '开始时间',
    dataIndex: 'start',
  },
  {
    title: '结束时间',
    dataIndex: 'end',
  }
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
    end: ''
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12'
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    zhiwu: '市场总监',
    company: '华谊工程有限公司',
    address: 'Sidney No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12'
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12'
  },
  {
    key: '6',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '华谊工程有限公司',
    address: 'London No. 1 Lake Park',
    start: '2019/09/12',
    end: '2019/09/12'
  }
];

const ccolumns = [
  {
    title: '序号',
    dataIndex: 'key'
  },
  {
    title: '角色',
    dataIndex: 'role',
  },
  {
    title: '起止日期',
    dataIndex: 'time',
  },
  {
    title: '工程项目内容',
    dataIndex: 'content',
  }
];
const cdata = [
  {
    key: '1',
    role: '项目经理',
    time: '2009.10-2012.2',
    content: 'DSM Zeland Project'
  },
  {
    key: '2',
    role: '项目副经理,专业负责人,设计',
    time: '2009.10-',
    content: '江苏恒神纤维材料有限公司'
  },
  {
    key: '3',
    role: '项目经理',
    time: '2009.10-2012.2',
    content: 'DSM Zeland Project'
  },
  {
    key: '4',
    role: '项目副经理,专业负责人,设计',
    time: '2009.10-',
    content: '江苏恒神纤维材料有限公司'
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
        mail: 'liziyu@hyec.com'
      },
      {
        name: '李大锤',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com'
      },
      {
        name: '王森',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        selected: true,
        mail: 'liziyu@hyec.com'
      }
    ]
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
        mail: 'liziyu@hyec.com'
      },
      {
        name: '李大锤',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com'
      },
      {
        name: '王森',
        phone: '13809879002',
        line: '23244354',
        fenji: '711085',
        zhiwei: '质量工程师',
        mail: 'liziyu@hyec.com'
      }
    ]
  }
]
@Form.create()
class Employee extends React.Component {
  onSelect = () => {

  }

  render() {
    return (
      <div>
        <Alert
          message="友情提示"
          description="最近更新日期 2019-11-11"
          type="info"
          showIcon
        />
        <Card style={{marginTop: 20, height: '100%'}}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <MyIcon type="icon-yonghuguanli" style={{fontSize: '16px'}} />
                    员工信息
                </span>}
              key="1"
            >
              <div className={styles.content}>
                <Card>
                  <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showIcon icon={<MyIcon type="icon-jiaoseguanli" style={{fontSize: '16px'}} />}>
                    <TreeNode title="公司" key="0-0" icon={<MyIcon type="icon-zuzhijigouguanli" style={{fontSize: '16px'}} />}>
                      <TreeNode title="公司高管" key="0-0-0"/>
                      <TreeNode title="副总工程师" key="0-0-1" />
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
                      <TreeNode title="华谊信息运维" key="0-0-12" />
                    </TreeNode>
                  </Tree>
                </Card>
                <div className={styles.right}>
                  <Card>
                    <div>
                      <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">按中文名</Option>
                        <Option value="lucy">按部门</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: 200, marginLeft: '10px' }}
                      />
                    </div>
                    <div className="mt-20">

                      <Collapse defaultActiveKey={['0', '1']}>

                        {
                        Edata.map((v,index) => {
                          return  (<Panel showArrow={false} header={<div><Icon type="idcard" theme="twoTone" /> {v.part}</div>} key={index}>
                            <div className={styles.part}>
                              {
                                v.children.map(child => {
                                  return  (<div className={styles.nameWrap}>
                                    <div className={styles.name}>{child.name}</div>
                                    <div className={styles.fenji}>{child.fenji}</div>
                                           </div>)
                                })
                              }
                            </div>
                                   </Panel>)
                        })
                      }
                      </Collapse>
                    </div>

                    <div className="mt-20">
                      <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab={
                <span>
                  <MyIcon type="icon-zhengjixiangguanrenyuanxinxi" style={{fontSize: '16px'}} />
                    基本信息
                </span>} key="1">
                          <div className={styles.info}>
                            <div style={{flex: 1}}>
                              <Descriptions bordered title="基本信息" size="small">
                                <Descriptions.Item label="姓名" span={3}>王森</Descriptions.Item>
                                <Descriptions.Item label="室号">12108</Descriptions.Item>
                                <Descriptions.Item label="直线">353453</Descriptions.Item>
                                <Descriptions.Item label="分机">5436546</Descriptions.Item>
                                <Descriptions.Item label="手机">1938483939</Descriptions.Item>
                                <Descriptions.Item label="邮箱">wangsen@hyec.com</Descriptions.Item>
                              </Descriptions>
                            </div>
                            <div style={{width: 85, marginLeft: '10px'}}>
                              <img width={85} height={115} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3126116862,100262216&fm=26&gp=0.jpg" />
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tab={
                <span>
                  <MyIcon type="icon-yuanchengjieyuetongji" style={{fontSize: '16px'}} />
                    工作履历
                </span>} key="2">
                          <Table columns={columns} dataSource={data} size="middle" pagination={false} />
                        </TabPane>
                        <TabPane tab={
                <span>
                  <MyIcon type="icon-wodegongzuoqingkuang" style={{fontSize: '16px'}} />
                    专业经历
                </span>} key="3">
                          <Radio.Group value={1}>
                            <Radio value={1}>中文</Radio>
                            <Radio value={2}>英文</Radio>
                          </Radio.Group>
                          <div style={{marginTop: 10}}>
                            <Table columns={ccolumns} dataSource={cdata} size="middle" pagination={false} />
                          </div>
                        </TabPane>
                      </Tabs>
                    </div>
                  </Card>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Employee;
