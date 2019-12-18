import React from 'react';
import moment from 'moment';
import { Alert, Tabs, Table, Card, Icon } from 'antd';
import { queryMeetingApply } from '../../services/home';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1277028_jejs7t1j2ca.js', // 在 iconfont.cn 上生成
});

const { TabPane } = Tabs;
const columns = [
  {
    title: '日期',
    dataIndex: 'RegDate',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
  },
  {
    title: '星期',
    dataIndex: 'Week',
  },
  {
    title: '开始时间',
    dataIndex: 'BeginDate',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
  },
  {
    title: '会议用时',
    dataIndex: 'Hour',
  },
  {
    title: '地点',
    dataIndex: 'MeetingRoomNo',
  },
  {
    title: '会议名称',
    dataIndex: 'Title',
    render: text => <a>{text}</a>,
  },
  {
    title: '会议主题',
    dataIndex: 'MeetingNanme',
  },
  {
    title: '出席范围',
    dataIndex: 'range',
  },
  {
    title: '召集部门',
    dataIndex: 'DeptName',
  },
];
export default class Huiyi extends React.Component {
  state = {
    currentWeekList: [],
    nextWeekList: [],
    stayApprWeekRowList: []
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const { data, success } = await queryMeetingApply();
    if (success && data.length) {
      console.log(data[0].NextWeekRow);
      this.setState({
        currentWeekList: data[0].ThisWeekRow,
        nextWeekList: data[0].NextWeekRow,
        stayApprWeekRowList: data[0].StayApprWeekRow
      });
    }
  };

  render() {
    const { currentWeekList, nextWeekList, stayApprWeekRowList } = this.state;
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
                  </span>
                }
                key="1"
              >
                <Table columns={columns} dataSource={currentWeekList} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-yuanchengshenqing" />
                    下周会议
                  </span>
                }
                key="2"
              >
                <Table columns={columns} dataSource={nextWeekList} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-suoyoudaishenpijilu" />
                    待批会议
                  </span>
                }
                key="3"
              >
                <Table columns={columns} dataSource={stayApprWeekRowList} />
              </TabPane>
              {/* <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-wodeshenpi" />
                    会议申请
                  </span>
                }
                key="4"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane> */}
              {/* 
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-rukufenleitongji" />
                    会议室安排
                  </span>
                }
                key="5"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <MyIcon type="icon-gebuchuyuanxiguidanggongshi" />
                    会议管理
                  </span>
                }
                key="5"
              >
                <Table columns={[]} dataSource={[]} />
              </TabPane> */}
            </Tabs>
          </Card>
        </div>
      </div>
    );
  }
}
