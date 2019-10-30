import { Component } from "react";
import { Tabs, Table, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;


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

const tabs = [
  {
    name: '工作动态',
    content: (
      <Table
        columns={columns}
        dataSource={data}
      />)
  },
  {
    name: '廉政教育',
    content: `sffdsfsd`
  },
  {
    name: '政策法规',
    content: `sffdsfsd`
  }
]

export default class Jijian extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" type="card">
          {
            tabs.map(tab => {
              return <TabPane tab={tab.name} key={tab.name} style={{backgroundColor: '#fff'}}>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled">
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                {tab.content}
              </TabPane>
            })
          }
          
        </Tabs>
      </div>
    )
  }
}