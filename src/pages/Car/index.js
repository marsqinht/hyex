import React from 'react';
import { Card, Alert, Tabs, Tree, Icon, Form, Input, Button, Select, Collapse, Descriptions, Table, Radio, Statistic } from 'antd';
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
    title: '途径',
    dataIndex: 'key'
  },
  {
    title: '说明',
    dataIndex: 'company',
  },
  {
    title: '地图',
    dataIndex: 'zhiwu',
    render: () => <a href="https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E5%8D%8E%E8%B0%8A%E5%B7%A5%E7%A8%8B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8(%E6%BE%84%E6%B1%9F%E8%B7%AF)/@13520951.125,3622132,19z?querytype=s&da_src=shareurl&wd=%E4%B8%8A%E6%B5%B7%E5%8D%8E%E8%B0%8A%E5%B7%A5%E7%A8%8B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8(%E6%BE%84%E6%B1%9F%E8%B7%AF)&c=179&src=0&wd2=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%97%B5%E8%A1%8C%E5%8C%BA&pn=0&sug=1&l=12&b=(13296964.03,3476097.39;13456004.03,3559617.39)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=41b1c74ff685cb0cf33cbae6&device_ratio=2" target="_blank"><Icon type="pushpin" theme="twoTone" /></a>
  },
  {
    title: '人数',
    dataIndex: 'start',
  },
  {
    title: '人员',
    dataIndex: 'end',
  }
];
const data = [
  {
    key: '始发站',
    name: 'John Brown',
    age: 32,
    company: '7:30莘庄地铁南广场',
    zhiwu: '副总经理',
    address: 'New York No. 1 Lake Park',
    start: '1',
    end: ''
  },
  {
    key: '途径1',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '7:30莘庄地铁南广场',
    address: 'London No. 1 Lake Park',
    start: '1',
    end: '1'
  },
  {
    key: '途径2',
    name: 'Joe Black',
    age: 32,
    zhiwu: '市场总监',
    company: '7:30莘庄地铁南广场',
    address: 'Sidney No. 1 Lake Park',
    start: '1',
    end: '1'
  },
  {
    key: '途径3',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '7:30莘庄地铁南广场',
    address: 'London No. 1 Lake Park',
    start: '1',
    end: '1'
  },
  {
    key: '终点站',
    name: 'Jim Green',
    age: 42,
    zhiwu: '总经理助理',
    company: '7:30莘庄地铁南广场',
    address: 'London No. 1 Lake Park',
    start: '1',
    end: '1'
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
                  <MyIcon type="icon-andanganleixingtongji" style={{fontSize: '16px'}} />
                    班车信息
                </span>}
key="1"
            >
              <div className={styles.content}>
                <Card>
                  <Tree showLine defaultExpandedKeys={['0-0-0', '0-1-0', '0-2-0']} onSelect={this.onSelect} showIcon>
                    <TreeNode title="一号莘庄线" key="0-0">
                      <TreeNode title="班车线路图" key="0-0-0" icon={<Icon type="car" theme="twoTone" />} />
                    </TreeNode>
                    <TreeNode title="二号浦东线" key="0-1">
                      <TreeNode title="班车线路图" key="0-1-0" icon={<Icon type="car" theme="twoTone" />} />
                    </TreeNode>
                    <TreeNode title="三号万体游泳馆" key="0-2">
                      <TreeNode title="班车线路图" key="0-2-0" icon={<Icon type="car" theme="twoTone" />} />
                    </TreeNode>
                  </Tree>
                </Card>
                <div className={styles.right}>
                  <Card>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <Statistic title="车牌" value="DG7299" valueStyle={{ color: 'rgb(245, 207, 92)' }} />
                      <Statistic title="驾驶员" value="李俊: 13908907788" valueStyle={{ color: 'rgb(5, 144, 223)' }} />
                      <Statistic title="车长" value="彭建南: 15678909008" valueStyle={{color: 'rgb(29, 204, 161)'}} />
                    </div>
                    <div className="mt-20">
                      <Table columns={columns} dataSource={data} size="middle" pagination={false} />
                    </div>
                  </Card>
                </div>
              </div>
            </TabPane>
            <TabPane
tab={
                <span>
                  <MyIcon type="icon-xiangyingchaoshijiankong" style={{fontSize: '16px'}} />
                    晚间加班车
                </span>}
key="2"
            />
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Employee;
