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
import moment from 'moment';
import styles from './infos.less';
import { queryStandard } from '../../services/quantity';
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
    activeKey: '国家部委公告',
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async (page = 1, type = '国家部委公告', Name = '') => {
    const { data, total, success } = await queryStandard({
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

  render() {
    const { data, total, activeKey } = this.state;
    return (
      <div>
        <div className="mt-20">
          <Card>
            <Tabs
              defaultActiveKey="国家部委公告"
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
                    国家部委公告
                  </span>
                }
                key="国家部委公告"
              >
                <Card title="国家部委公告" bordered={false}>
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item.Name}</div>
                          <div style={{ color: '#1890FF' }}>
                            {moment(item.RegDate).format('YYYY-MM-DD')}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '国家部委公告')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    建设部公告
                  </span>
                }
                key="建设部公告"
              >
                <Card title="建设部公告" bordered={false}>
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item.Name}</div>
                          <div style={{ color: '#1890FF' }}>
                            {moment(item.RegDate).format('YYYY-MM-DD')}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '建设部公告')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    上海市公告
                  </span>
                }
                key="上海市公告"
              >
                <Card title="上海市公告" bordered={false}>
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item.Name}</div>
                          <div style={{ color: '#1890FF' }}>
                            {moment(item.RegDate).format('YYYY-MM-DD')}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '上海市公告')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    标准信息查询
                  </span>
                }
                key="标准信息查询"
              >
                <Card title="标准信息查询" bordered={false}>
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item.Name}</div>
                          <div style={{ color: '#1890FF' }}>
                            {moment(item.RegDate).format('YYYY-MM-DD')}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                  <div className={styles.pe}>
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      pageSize={15}
                      onChange={page => this.fetchApi(page, '标准信息查询')}
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
