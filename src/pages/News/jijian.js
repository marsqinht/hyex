import { Component } from 'react';
import { Tabs, Table, Select, Input, Card } from 'antd';
import router from 'umi/router';
import styles from './jijian.less';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    render: text => <a onClick={() => router.push('/dashboard/detail/34')}>{text}</a>,
  },
  {
    title: '发布时间',
    className: 'column-time',
    dataIndex: 'time',
  },
];

const data = [
  {
    key: '1',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-10',
    address: 'New York No. 1 Lake Park',
    commet: 'dd',
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
  },
  {
    key: '3',
    name: '中共上海华谊工程有限公司第二次党员大会隆重召',
    time: '2019-09-21',
    address: 'Sidney No. 1 Lake Park',
  },
];

const tabs = [
  {
    name: '工作动态',
    content: (
      <Card title="工作动态" bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
    ),
  },
  {
    name: '廉政教育',
    content: (
      <Card title="廉政教育" bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
    ),
  },
  {
    name: '政策法规',
    content: (
      <Card title="政策法规" bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
    ),
  },
];

export default class Jijian extends Component {
  goDetail = () => {
    router.push('/dashboard/detail/34');
  };

  render() {
    return (
      <Card>
        <Tabs defaultActiveKey="1">
          {tabs.map(tab => {
            return (
              <TabPane tab={tab.name} key={tab.name} style={{ backgroundColor: '#fff' }}>
                <div className={styles.search}>
                  <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">标题</Option>
                    <Option value="lucy">内容</Option>
                    <Option value="disabled">Disabled</Option>
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
                <div style={{ padding: '0 20px 0' }}>{tab.content}</div>
              </TabPane>
            );
          })}
        </Tabs>
      </Card>
    );
  }
}
