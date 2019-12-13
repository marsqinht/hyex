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
import moment from 'moment';
import router from 'umi/router';
import styles from './index.less';
import { queryZhiliangManage } from '../../services/quantity';

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
// const data = [
//   {
//     key: '1',
//     date: '2019-10-11',
//     day: '星期一',
//     startTime: '12:30',
//     name: 'John Brown',
//     lastTime: '4',
//     age: 32,
//     address: '14号楼303',
//     theme: '招聘启动会',
//     title: '2020招聘工作会议',
//     range: '按通知',
//     man: '毛经理',
//     part: '数字化中心',
//   },
//   {
//     key: '2',
//     date: '2019-10-11',
//     day: '星期一',
//     startTime: '12:30',
//     name: 'John Brown',
//     lastTime: '4',
//     age: 32,
//     address: '14号楼303',
//     theme: '招聘启动会',
//     title: '2020招聘工作会议',
//     range: '按通知',
//     man: '毛经理',
//     part: '数字化中心',
//   },
//   {
//     key: '3',
//     date: '2019-10-11',
//     day: '星期三',
//     startTime: '12:30',
//     name: 'John Brown',
//     lastTime: '4',
//     age: 32,
//     address: '14号楼303',
//     theme: '招聘启动会',
//     title: '2020招聘工作会议',
//     range: '按通知',
//     man: '毛经理',
//     part: '数字化中心',
//   },
//   {
//     key: '4',
//     date: '2019-10-11',
//     day: '星期五',
//     startTime: '12:30',
//     name: 'John Brown',
//     lastTime: '4',
//     age: 32,
//     address: '14号楼303',
//     title: '2020招聘工作会议',
//     theme: '招聘启动会',
//     range: '按通知',
//     man: '毛经理',
//     part: '数字化中心',
//   },
//   {
//     key: '5',
//     date: '2019-10-11',
//     day: '星期一',
//     startTime: '12:30',
//     name: 'John Brown',
//     lastTime: '4',
//     age: 32,
//     address: '14号楼303',
//     theme: '招聘启动会',
//     title: '2020招聘工作会议',
//     range: '按通知',
//     man: '毛经理',
//     part: '数字化中心',
//   },
// ];
export default class Huiyi extends React.Component {
  state = {
    s: 1,
    data: [],
    total: 0,
    qcType: 'QC计划'
  };

  componentDidMount() {
    this.fetchApi();
  }

  onChange = (e) => {
    this.setState({
      qcType: e.target.value
    })
    this.fetchApi(1, 'QCgroup', e.target.value, '')
  }

  goDetail = (item, type) => {
    const file = item.FileRow.length && item.FileRow[0].ServerUrl;
    const { Name, RegHumName, RegDate } = item
    if(!file) {
      return;
    }
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
  }

  fetchApi = async (page = 1, type = 'notice', qctype, Name = '') => {
    const { data, total, success } = await queryZhiliangManage({
      type,
      qctype,
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
    const { data, total, qcType } = this.state;
    return (
      <div>
        <div className="mt-20">
          <Card>
            <Tabs defaultActiveKey="notice" onChange={key => this.fetchApi(1, key)}>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-changyongkucaozuo_8" />
                    管理通知
                  </span>
                }
                key="notice"
              >
                <Card
                  title="管理通知"
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
                        onSearch={value => this.fetchApi(1, 'notice', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, '管理通知')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'notice')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    会议纪要
                  </span>
                }
                key="meeting"
              >
                <Card
                  title="会议纪要"
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
                        onSearch={value => this.fetchApi(1, 'meeting', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, '年度筛选')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'meeting')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    质量信息
                  </span>
                }
                key="message"
              >
                <Card
                  title="质量管理"
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
                        onSearch={value => this.fetchApi(1, 'message', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, '质量管理')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'message')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    质量剖析
                  </span>
                }
                key="analyse"
              >
                <Card
                  title="质量剖析"
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => this.fetchApi(1, 'analyse', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, '质量剖析')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'analyse')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-rukufenleitongji" />
                    内外审核情况
                  </span>
                }
                key="toexamine"
              >
                <Card
                  title="内外审核情况"
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
                        onSearch={value => this.fetchApi(1, 'toexamine', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, '内外审核情况')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'toexamine')}
                    />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-gebuchuyuanxiguidanggongshi" />
                    QC小组
                  </span>
                }
                key="QCgroup"
              >
                <Radio.Group
                  value={qcType}
                  onChange={this.onChange}
                  style={{ marginBottom: 16 }}
                >
                  <Radio.Button value="QC计划">QC计划</Radio.Button>
                  <Radio.Button value="QC成果">QC成果</Radio.Button>
                  <Radio.Button value="QC总结">QC总结</Radio.Button>
                </Radio.Group>
                <Card
                  title={qcType}
                  bordered={false}
                  extra={
                    <div>
                      <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
                        <Option value="1">文档主题</Option>
                      </Select>
                      <Search
                        placeholder="请输入关键字"
                        onSearch={value => this.fetchApi(1, 'QCgroup', '', value)}
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
                          <a href="javascript:;" onClick={() => this.goDetail(item, 'QC小组')}><div>{item.Name}</div></a>
                          <div>
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
                      onChange={page => this.fetchApi(page, 'QCgroup')}
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
