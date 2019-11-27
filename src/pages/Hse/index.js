import React from 'react';
import { Alert, Tabs, Table, Card, Icon, Select, Button, Input, List, Typography, Pagination } from 'antd';
import styles from './index.less'

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
const data = [
  {
    key: '1',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
  {
    key: '2',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '3',
    date: '2019-10-11',
    day: '星期三',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '4',
    date: '2019-10-11',
    day: '星期五',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    title: '2020招聘工作会议',
    theme: '招聘启动会',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },{
    key: '5',
    date: '2019-10-11',
    day: '星期一',
    startTime: '12:30',
    name: 'John Brown',
    lastTime: '4',
    age: 32,
    address: '14号楼303',
    theme: '招聘启动会',
    title: '2020招聘工作会议',
    range: '按通知',
    man: '毛经理',
    part: '数字化中心'
  },
];
const listData = [
  '中共上海华谊工程有限公司第二次党员大会隆重召开.',
  '华谊工程召开2018年度QHSE体系管理评审会',
  '万华一期烧碱项目喜获2018年度工程建设项目优秀设计成果二等奖 ',
  '提供组织保障 加强业务发展——数字化中心正式成立',
  '中共上海华谊工程有限公司第二次党员大会隆重召开.',
  '华谊工程召开2018年度QHSE体系管理评审会',
  '万华一期烧碱项目喜获2018年度工程建设项目优秀设计成果二等奖 ',
  '提供组织保障 加强业务发展——数字化中心正式成立',
];
export default class Huiyi extends React.Component {
  state = {
    s: 1
  }

  render() {
    return (
      <div>
        <div className="mt-20">
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-changyongkucaozuo_8" />
                    管理通知
                  </span>}
                key="1"
              >
                <Card
                  title="管理通知"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                  </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item}</div>
                          <div style={{color: '#1890FF'}}>2019-09-09</div>
                        </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    会议纪要
                  </span>}
                key="2"
              >
                <Card
                  title="会议纪要"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                  </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item}</div>
                          <div style={{color: '#1890FF'}}>2019-09-09</div>
                        </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    质量信息
                  </span>}
                key="3"
              >
                <Card
                  title="质量管理"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                  </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item}</div>
                          <div style={{color: '#1890FF'}}>2019-09-09</div>
                        </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    质量剖析
                  </span>}
                key="4"
              >
                <Card
                  title="质量剖析"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                  </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item}</div>
                          <div style={{color: '#1890FF'}}>2019-09-09</div>
                        </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-rukufenleitongji" />
                    内外审核情况
                  </span>}
                key="5"
              >
                <Card
                  title="内外审核情况"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                    />
                         </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                         <div>{item}</div>
                         <div style={{color: '#1890FF'}}>2019-09-09</div>
                       </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-gebuchuyuanxiguidanggongshi" />
                    QC小结
                  </span>}
                key="6"
              >
                <Card
                  title="QC小结"
                  bordered={false}
                  extra={<div>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">年度筛选</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 120 , marginRight: 14}}>
                      <Option value="1">文档主题</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                    />
                         </div>}
                >
                  <List
                    header={<div style={{textAlign: 'center', color: '#1890FF'}}>文档主题</div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item>
                        <div className={styles.list}>
                          <div>{item}</div>
                          <div style={{color: '#1890FF'}}>2019-09-09</div>
                        </div>
                      </List.Item>
      )}
                  />
                  <div className={styles.pe}>
                    <Pagination defaultCurrent={6} total={500} />
                  </div>
                </Card>
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    )
  }
}
