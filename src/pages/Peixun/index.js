import React from 'react';
import { Alert, Tabs, Table, Card } from 'antd';

const { TabPane } = Tabs;
const columns = [
  {
    title: '序号',
    dataIndex: 'date',
  },
  {
    title: '培训名称',
    dataIndex: 'day',
  },
  {
    title: '培训简介',
    dataIndex: 'startTime',
  },
  {
    title: '培训讲师',
    dataIndex: 'lastTime',
  },
  {
    title: '时间',
    dataIndex: 'address',
  },
  {
    title: '地点',
    dataIndex: 'title',
    render: text => <a>{text}</a>,
  },
  {
    title: '发布部门',
    dataIndex: 'theme',
  },
  {
    title: '培训联系人',
    dataIndex: 'range',
  },
  {
    title: '报名截止',
    dataIndex: 'part',
  },
  {
    title: '报名情况',
    dataIndex: 'part',
  },{
    title: '操作',
    dataIndex: 'paart',
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
          message="培训提醒"
          description="培训机会来之不易,请务必按时参加,若临时有事不能参加,请及时请假"
          type="warning"
          showIcon
        />
        <div className="mt-20">
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane tab="培训信息" key="1">
                <Table columns={columns} dataSource={[]} />
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    )
  }
}
