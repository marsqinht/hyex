import React from 'react';
import { Tabs, Table, Select, Input, Card } from 'antd';
import router from 'umi/router';
import moment from 'moment';
import styles from './jijian.less';
import { queryPartyWork } from '../../services/party';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: '标题',
    dataIndex: 'Name',
    render: text => <a>{text}</a>,
  },
  {
    title: '发布时间',
    className: 'column-time',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
    dataIndex: 'RegDate',
  },
];

const tabs = [
  {
    name: '工作动态',
  },
  {
    name: '廉政教育',
  },
  {
    name: '政策法规',
  },
];

export default class Jijian extends React.Component {
  state = {
    data: [],
    type: '工作动态',
    total: 0,
  };

  componentDidMount() {
    this.fetchPartyWork();
  }

  fetchPartyWork = async (page = 1, type = '工作动态', Name = '') => {
    const { data, success, total } = await queryPartyWork({
      page,
      size: 10,
      type,
      Name,
    });
    if (success) {
      this.setState({
        data,
        total,
      });
    }
  };

  onChange = page => {
    const { type } = this.state;
    this.fetchPartyWork(page, type);
  };

  goDetail = (item, type = '') => {
    const file = item.FileRow.length && item.FileRow[0].ServerUrl;
    const { Name, RegHumName, RegDate } = item
    if(!file) {
      return;
    }
      const s = item.FileRow[0];
      const ext = s.FileExt;
      if(ext === '.pdf' || ext === '.doc' || ext === '.docx'){
        router.push({
          pathname: '/dashboard/commondetail',
          query: {
            title: Name,
            people: RegHumName,
            date: moment(RegDate).format('YYYY-MM-DD'),
            file,
            type
          },
        })
      } else {
        window.open(file);
      }
    
  }

  render() {
    const { data, total, type } = this.state;
    const { onChange } = this;
    return (
      <Card>
        <Tabs
          defaultActiveKey="工作动态"
          onChange={name => {
            console.log(name);
            this.setState({ type: name });
            this.fetchPartyWork(1, name);
          }}
        >
          {tabs.map(tab => {
            return (
              <TabPane tab={tab.name} key={tab.name} style={{ backgroundColor: '#fff' }}>
                <div className={styles.search}>
                  <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">标题</Option>
                    <Option value="lucy">内容</Option>
                  </Select>
                  <Search
                    placeholder="请输入关键字搜索"
                    enterButton="Search"
                    size="mini"
                    style={{ width: 200, marginLeft: 20 }}
                    onSearch={value => this.fetchPartyWork(1, type, value)}
                  />
                </div>
                <div style={{ padding: '0 20px 0' }}>
                  <Card title={tab.name} bordered={false}>
                    <Table
                      columns={columns}
                      dataSource={data}
                      onRow={record => {
                        return {
                          onClick: event => {
                            this.goDetail(record)
                          }, 
                        };
                      }}
                      pagination={{
                        pageSize: 10,
                        total,
                        onChange,
                      }}
                    />
                  </Card>
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </Card>
    );
  }
}
