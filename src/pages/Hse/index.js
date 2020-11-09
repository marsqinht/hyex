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
  Radio,
  Pagination,
} from 'antd';
import router from 'umi/router';
import moment from 'moment';
import { renderYear } from '@/utils/utils';
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
const shiyongColumns = [
  {
    title: '序号',
    dataIndex: 'index',
  },
  {
    title: '文档名称',
    dataIndex: 'Name',
    width: 260
  },
  {
    title: '颁布日期',
    dataIndex: 'IssueDate',
    render: (time) => time ? moment(time).format('YYYY-MM-DD') : ''
  },
  {
    title: '实施日期',
    dataIndex: 'EffectiveDate',
    render: (time) => time ? moment(time).format('YYYY-MM-DD') : ''
  },
  {
    title: '修订日期',
    dataIndex: 'RevisionDate',
    render: (time) => time ? moment(time).format('YYYY-MM-DD') : ''
  },
  {
    title: '适用类别',
    dataIndex: 'ApplyType',
  },
  {
    title: '适用条款',
    dataIndex: 'ApplyContenct',
  }
]

export default class Huiyi extends React.Component {
  state = {
    data: [],
    total: 0,
    activeKey: 'HSE动态',
    hsetype: '适用',
    shiyongData: [],
    shiyongTotal: 0
  };

  componentDidMount() {
    this.fetchApi();
    this.shiyongApi(1)
  }

  fetchApi = async (page = 1, type = 'HSE动态', Name = '', year = '') => {
    const { data, total, success } = await queryHSEManage({
      type,
      size: 15,
      page,
      Name,
      year
    });
    console.log(data);
    success &&
      this.setState({
        data,
        total,
      });
  };

  shiyongApi = async (page = 1, hsetype = '适用', name='' ,year= '') => {
    let { data, total, success } = await queryHSEManage({
      page,
      size: 8,
      hsetype,
      type: 'HSE适用法规',
      Name: name,
      year
    })
    data = data.map((v, index)=> {
      return {
        index: (page - 1) * 8 + (index + 1),
        ...v
      }
    })
    this.setState({
      shiyongData: data,
      shiyongTotal: total
    })
  }

  onChange = (e) => {
    this.setState({
      hsetype: e.target.value
    });
    this.shiyongApi(1, e.target.value);
  }

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
    const { data, total, activeKey, hsetype, shiyongData, shiyongTotal } = this.state;
    return (
      <div>
        <div className="mt-20">
          <Card>
            <Tabs
              defaultActiveKey="政策法规"
              onChange={key => {
                this.setState({
                  activeKey: key,
                });
                if(key==='HSE适用法规') return;
                this.fetchApi(1, key);
              }}
            >
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
                        onSearch={value => this.fetchApi(1, '政策法规', value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    size="small"
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
                      <Select
                        defaultValue=""
                        style={{ width: 120, marginRight: 14 }}
                        onChange={(key) => this.fetchApi(1, activeKey, '', key)}
                      >
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
                        onSearch={value => this.fetchApi(1, activeKey, value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    size="small"
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
                      <Select
                        defaultValue=""
                        style={{ width: 120, marginRight: 14 }}
                        onChange={(key) => this.fetchApi(1, activeKey, '', key)}
                      >
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
                        onSearch={value => this.fetchApi(1, 'HSE知识', value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    dataSource={data}
                    size="small"
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
                      <Select
                        defaultValue=""
                        style={{ width: 120, marginRight: 14 }}
                        onChange={(key) => this.fetchApi(1, activeKey, '', key)}
                      >
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
                        onSearch={value => this.fetchApi(1, '案例分析', value)}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <List
                    header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                    bordered
                    size="small"
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
                    HSE适用法规
                  </span>
                }
                key="HSE适用法规"
              >
                <Radio.Group
                  value={hsetype}
                  onChange={this.onChange}
                  style={{ marginBottom: 16 }}
                >
                  <Radio.Button value="适用">适用</Radio.Button>
                  <Radio.Button value="作废">作废</Radio.Button>
                </Radio.Group>
                <Card
                  title={`HSE${hsetype}法规`}
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">法规名称</Option><Option value="issue_date">颁布日期</Option><Option value="implement_date">实施日期</Option><Option value="modify_date">修订日期</Option><Option value="fit_type">适用类型</Option><Option value="fit_item">适用条款</Option><Option value="f_file">文件名</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => {
                          console.log(value, 333);
                          this.shiyongApi(1, this.state.hsetype, value)
                        }}
                        style={{ width: 200 }}
                      />
                    </div>
                  }
                >
                  <Table
                    columns={shiyongColumns}
                    dataSource={shiyongData}
                    size="small"
                    pagination={{
                  total: shiyongTotal,
                  pageSize: 8,
                  defaultCurrent: 1,
                  onChange: page => {

                    this.shiyongApi(page, this.state.hsetype);
                  },
                }}
                  />
                </Card>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    );
  }
}
