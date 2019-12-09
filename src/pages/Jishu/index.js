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
import styles from './index.less';
import { querySkillManage } from '../../services/quantity';
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
    activeKey: '工作总结',
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async (page = 1, type = '工作总结', Name = '') => {
    const { data, total, success } = await querySkillManage({
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
              defaultActiveKey="工作总结"
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
                    工作总结
                  </span>
                }
                key="工作总结"
              >
                <Card
                  title="工作总结"
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
                      onChange={page => this.fetchApi(page, '工作总结')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    获奖情况
                  </span>
                }
                key="获奖情况"
              >
                <Card
                  title="获奖情况"
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
                      onChange={page => this.fetchApi(page, '获奖情况')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    业务建设
                  </span>
                }
                key="业务建设"
              >
                <Card
                  title="业务建设"
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
                      onChange={page => this.fetchApi(page, '业务建设')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    知识产权
                  </span>
                }
                key="知识产权"
              >
                <Card
                  title="知识产权"
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
                      onChange={page => this.fetchApi(page, '知识产权')}
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
