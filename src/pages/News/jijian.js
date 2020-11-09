import React from 'react';
import { Tabs, Table, Select, Input, Card } from 'antd';
import router from 'umi/router';
import Icon from 'antd/lib/icon';
import moment from 'moment';
import styles from './jijian.less';
import { queryPartyWork } from '../../services/party';
import { renderYear } from '@/utils/utils';

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
    icon: 'read'
  },
  {
    name: '廉政教育',
    icon: 'book'
  },
  {
    name: '政策法规',
    icon:'highlight'
  },
];

export default class Jijian extends React.Component {
  state = {
    data: [],
    type: '工作动态',
    total: 0,
    year: ''
  };

  componentDidMount() {
    this.fetchPartyWork();
  }

  fetchPartyWork = async (page = 1, type = '工作动态', name = '', year ='') => {
    const { data, success, total } = await queryPartyWork({
      page,
      size: 10,
      type,
      name,
      year
    });
    if (success) {
      this.setState({
        data,
        total,
      });
    }
  };

  onChange = page => {
    const { type, year } = this.state;
    this.fetchPartyWork(page, type, '', year);
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
    const { data, total, type, year } = this.state;
    const { onChange } = this;
    return (
      <Card>
        <Tabs
          defaultActiveKey="工作动态"
          onChange={name => {
            console.log(name);
            this.setState({ type: name });
            this.fetchPartyWork(1, name, '', year);
          }}
        >
          {tabs.map(tab => {
            return (
              <TabPane  
                tab={
                  <span>
                    <Icon type={tab.icon} />
                    {tab.name}
                  </span>
                  } key={tab.name} style={{ backgroundColor: '#fff' }}>
                {/* <div className={styles.search}>
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
                </div> */}
                <div style={{ padding: '0 20px 0' }}>
                  <Card
                    title={tab.name}
                    bordered={false}
                  
                    extra={
                      <div>
                        <Select defaultValue="" style={{ width: 120, marginRight: 14 }} onSelect={value => {
                            this.setState({
                              year: value
                            })
                            this.fetchPartyWork(1, type, '',value)
                          }}>
                          <Option value="">年度</Option>
                          {renderYear().map(v => (
                            <Option value={v}>{v}</Option>
                          ))}
                        </Select>
                        <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                          <Option value="1">文档主题</Option>
                        </Select>
                        <Search
                          placeholder="请输入关键字"
                          onSearch={value => this.fetchPartyWork(1, type, value, year)}
                          style={{ width: 200 }}
                        />
                      </div>
                  }
                  >
                    <Table
                      columns={columns}
                      dataSource={data}
                      size="small"
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
