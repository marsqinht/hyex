import React from 'react';
import { Alert, Tabs, Table, Card, Icon } from 'antd';

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
export default class Huiyi extends React.Component {
  state = {
    s: 1
  }

  render() {
    return (
      <div>
        <Alert
          message="今日提醒"
          description="5个本周会议; 6个下周会议; 5条待批准会议提醒"
          type="warning"
          showIcon
        />
        <div className="mt-20">
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-changyongkucaozuo_8" />
                    本周会议
                  </span>}
                key="1"
              >
                <Table columns={columns} dataSource={data} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    下周会议
                  </span>}
                key="2"
              >
                <Table columns={columns} dataSource={[]} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    待批会议
                  </span>}
                key="3"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    会议申请
                  </span>}
                key="4"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-rukufenleitongji" />
                    会议室安排
                  </span>}
                key="5"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-gebuchuyuanxiguidanggongshi" />
                    会议管理
                  </span>}
                key="5"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    )
  }
}
