import { Component } from "react";
import { Tabs, Table, Select, Input } from 'antd';
import styles from './jijian.less';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;


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
                <div className={styles.search}>
                  <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">标题</Option>
                    <Option value="lucy">内容</Option>
                    <Option value="disabled">
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <Search
                    placeholder="请输入关键字搜索"
                    enterButton="Search"
                    size="mini"
                    style={{ width: 200, marginLeft: 20 }}
                    onSearch={value => console.log(value)}
                  />
                </div>
                {tab.content}
                     </TabPane>
            })
          }
          
        </Tabs>
      </div>
    )
  }
}