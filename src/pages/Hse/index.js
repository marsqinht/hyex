import React from 'react';
import {
  Alert,
  Tabs,
  Table,
  Card,
  Icon,
  Select,
  Button,
  Input,
  List,
  Typography,
  Pagination,
} from 'antd';
import router from 'umi/router';
import moment from 'moment';
import styles from './index.less';
import { queryHSEManage } from '../../services/quantity';
const { Search } = Input;

const { Option } = Select;
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});

const { TabPane } = Tabs;
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '星期',
    dataIndex: 'day',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '会议用时',
    dataIndex: 'lastTime',
  },
  {
    title: '地点',
    dataIndex: 'address',
  },
  {
    title: '会议名称',
    dataIndex: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: '会议主题',
    dataIndex: 'theme',
  },
  {
    title: '出席范围',
    dataIndex: 'range',
  },
  {
    title: '召集部门',
    dataIndex: 'part',
  },
];

export default class Huiyi extends React.Component {
  state = {
    data: [],
    total: 0,
    activeKey: 'HSE动态',
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async (page = 1, type = 'HSE动态', Name = '') => {
    const { data, total, success } = await queryHSEManage({
      type,
      size: 15,
      page,
      Name,
    });
    console.log(data);
    success &&
      this.setState({
        data,
        total,
      });
  };
  goDetail = (item, type) => {
    const file = item.FileRow.length && item.FileRow[0].ServerUrl;
    const { Name, RegHumName, RegDate } = item;
    if (!file) {
      return;
    }
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
  };

  render() {
    const { data, total, activeKey } = this.state;
    return (
      <div>
        <div className="mt-20">
          <Card>
            <Tabs
              defaultActiveKey="HSE动态"
              onChange={key => {
                this.setState({
                  activeKey: key,
                });
                this.fetchApi(1, key);
              }}
            >
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-changyongkucaozuo_8" />
                    HSE动态
                  </span>
                }
                key="HSE动态"
              >
                <Card
                  title="HSE动态"
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">年度筛选</Option>
                      </Select>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => this.fetchApi(1, activeKey, value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <a href="javascript:;" onClick={() => this.goDetail(item, 'HSE动态')}>
                            <div>{item.Name}</div>
                          </a>
                          <div>{moment(item.RegDate).format('YYYY-MM-DD')}</div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, 'HSE动态')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    HSE知识
                  </span>
                }
                key="HSE知识"
              >
                <Card
                  title="HSE知识"
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">年度筛选</Option>
                      </Select>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <a href="javascript:;" onClick={() => this.goDetail(item, 'HSE知识')}>
                            <div>{item.Name}</div>
                          </a>
                          <div>{moment(item.RegDate).format('YYYY-MM-DD')}</div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, 'HSE知识')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    案例分析
                  </span>
                }
                key="案例分析"
              >
                <Card
                  title="案例分析"
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">年度筛选</Option>
                      </Select>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <a href="javascript:;" onClick={() => this.goDetail(item, '案例剖析')}>
                            <div>{item.Name}</div>
                          </a>
                          <div>{moment(item.RegDate).format('YYYY-MM-DD')}</div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '案例分析')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    政策法规
                  </span>
                }
                key="政策法规"
              >
                <Card
                  title="政策法规"
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <a href="javascript:;" onClick={() => this.goDetail(item, '政策法规')}>
                            <div>{item.Name}</div>
                          </a>
                          <div>{moment(item.RegDate).format('YYYY-MM-DD')}</div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '政策法规')}
                    />
                  </div>
                </Card>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    );
  }
}
