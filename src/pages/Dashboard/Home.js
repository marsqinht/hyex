import React, { Component } from 'react';
import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Card,
  List,
  Calendar,
  Badge,
  Comment,
  Tooltip,
  Popover,
  Drawer,
  Tag,
  Carousel,
} from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import router from 'umi/router';
import Link from 'umi/link';
import request from 'umi-request';
import styles from './Home.less';
import ImageD from './image3D';
import Cc from './Clendar';
import HomeBanner from './HomeBanner';
import { queryNews } from '../../services/new';
import {
  queryHSEManage,
  queryLeave,
  queryLeaderShare,
  queryMenu,
  queryMeetingApply,
} from '../../services/home';
import { calendar } from '../../utils/calendar';

const edata = [
  {
    author: '会议',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: <Badge status="error" text="中共上海华谊工程有限公司第二次党员大会" />,
    datetime: (
      <Tooltip title="dddd">
        <span>2019-06-01</span>
      </Tooltip>
    ),
  },
  {
    author: '评审',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: <Badge status="success" text="华谊工程召开2018年度QHSE体系管理评审会" />,
    datetime: (
      <Tooltip title="dff">
        <span>2019-06-01</span>
      </Tooltip>
    ),
  },
];
const leaveInfo = item => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={`data:image/jpg;base64,${item.Picture}`} width={50} height={70} />
        <div style={{ marginLeft: 14 }}>
          姓名: {item.Name}
          <br />
          部门: {item.dept}
          <br />
          室号: {item.RoomNumber}
          <br />
          分机: {item.Phone}
          <br />
          手机: {item.Mobile}
          <br />
        </div>
      </div>
      <div style={{ marginTop: 6 }}>
        <div>职位: {item.PosiName}</div>
        <div>Email: {item.Email}</div>
      </div>
    </div>
  );
};

const adata = [
  {
    title: '喜报：华谊钦州醋酸项目胜利开工！',
    link: 'http://10.43.1.240:8085/GroupForum/ForumDetail.aspx?topicid=969&forumid=1005',
    time: '华谊工程科技园',
  },
  {
    title: '罐顶计算公式比较',
    link: 'http://10.43.1.240:8085/KnShare/KeTopicShow.aspx?id=2309',
    time: '知识互动',
  },
  {
    title: '应急照明',
    link: 'http://10.43.1.240:8085/KnShare/KePracShow.aspx?id=2901',
    time: '最佳实践',
  },
  {
    title: '2019年全国聚氯乙烯行业技术年会总结',
    link: 'http://10.43.1.240:8085/KnShare/KeOtherDataShow.aspx?id=5689',
    time: '资料分享',
  },
  {
    title: '党章电视辅导教材-10',
    link: 'http://10.43.1.240:8085/KnShare/KeMeetingVideoShow.aspx?id=652',
    time: '影像分享',
  },
  {
    title: '2020形势任务宣传特刊',
    link: 'http://10.43.1.240:8085/DigitalBook/DigitalBookDetail.aspx?booktype=&id=3012',
    time: '电子刊物',
  },
  {
    title: '“不忘初心, 牢记使命”主题教育',
    link: 'http://10.43.1.240:8085/GroupForum/ForumDetail.aspx?topicid=970&forumid=1003',
    time: '团队互动',
  },
];

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1251765_mco4fu4f3kr.js',
});
const colorMap = {
  调休: '#faad14',
  公出: '#1890ff',
  请假: '#f5222d',
};

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '公司党政联席会议' },
        { type: 'success', content: '技术技能培训会议' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: '公司党政联席会议' },
        { type: 'success', content: '技术技能培训会议' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [{ type: 'warning', content: '高层会议' }];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default class Home extends Component {
  state = {
    visible: false,
    placement: 'top',
    newsList: [],
    newsImageList: [],
    loginManageData: [],
    leaveData: [],
    leaderShareData: [],
    meetingList: [],
    loginManageImagesData: [],
    currentDayInfo: {},
    allMeetingList: [],
    selectedMonth: moment().format('MM'),
    curYearHoliday: {},
  };

  componentDidMount() {
    this.getNewsList(1);
    this.initLoginManage();
    this.initLeave();
    this.initLeaderShare();
    this.fetchHuiyiList();
    this.setDayInfo();
    this.setCurrYearHoliady(moment().format('YYYY'));
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  setCurrYearHoliady = async (year = '') => {
    const res = await request.get(`http://timor.tech/api/holiday/year/${year}`);
    console.log(res, 'erweer');
    if (res.code === 0) {
      this.setState({
        curYearHoliday: res.holiday,
      });
    }
  };

  setDayInfo = () => {
    const days = moment().format('YYYY-MM-DD');
    const splitDay = days.split('-');
    const curData = calendar.solar2lunar(splitDay[0], splitDay[1], splitDay[2]);
    console.log(curData);
    this.setState({
      currentDayInfo: curData,
    });
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode, 'onPanelChange');
    this.setState({
      selectedMonth: moment(value).format('MM'),
    });
    this.setCurrYearHoliady(moment(value).format('YYYY'));
  };

  initLoginManage = async () => {
    const { data } = await queryHSEManage({
      page: 1,
      size: 7,
      type: 'list',
    });
    this.setState({
      loginManageData: data,
    });
    const { data: imgData } = await queryHSEManage({
      page: 1,
      size: 5,
      type: 'images',
    });
    this.setState({
      loginManageImagesData: imgData,
    });
  };

  initLeave = async () => {
    const { data } = await queryLeave();
    console.log(data);
    this.setState({
      leaveData: data,
    });
  };

  initLeaderShare = async () => {
    const { data } = await queryLeaderShare();
    this.setState({
      leaderShareData: data,
    });
  };

  getNewsList = (page = 1) => {
    queryNews({
      page,
      size: 7,
    }).then(({ success, data, total }) => {
      console.log(data);
      if (success) {
        this.setState({
          newsList: data,
        });
      }
    });
    queryNews({
      page,
      size: 5,
      type: 'images',
    }).then(({ success, data, total }) => {
      if (success) {
        this.setState({
          newsImageList: data,
        });
      }
    });
  };

  fetchHuiyiList = async () => {
    const { data, success } = await queryMeetingApply();
    if (success && data.length) {
      // console.log(data[0].NextWeekRow);
      const allMeetingList = data[0].ThisWeekRow.concat(data[0].StayApprWeekRow).concat(
        data[0].NextWeekRow
      );
      this.setState({
        allMeetingList,
        meetingList: allMeetingList.filter(
          v => moment(v.BeginDate).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
        ),
      });
    }
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  clickImage = (item, type) => {
    let doc = item.FileRow.filter(v => '.jpg.jpeg.png'.indexOf(v.FileExt) === -1);
    const file = doc.length && doc[0].ServerUrl;

    router.push({
      pathname: '/dashboard/commondetail',
      query: {
        title: item.Name,
        people: '',
        date: moment(item.RegDate).format('YYYY-MM-DD'),
        file,
        type,
      },
    });
  };

  goDetail = (item, type, fileIndex = 0) => {
    const file = item.FileRow.length && item.FileRow[fileIndex].ServerUrl;
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

  renderNew = time => {
    return new Date().getTime() - new Date(time).getTime() < 259200000;
  };

  // goDetail = (currentPage = 1, index = 1) => {
  //   router.push(`/dashboard/detail/${currentPage}/${index}`);
  // };

  render() {
    const {
      newsList,
      selectedMonth,
      curYearHoliday,
      leaderShareData,
      leaveData,
      loginManageData,
      meetingList,
      newsImageList,
      loginManageImagesData,
      currentDayInfo,
      allMeetingList,
    } = this.state;

    return (
      <div>
        <div className={styles.content}>
          <div className={styles.mb}>
            <HomeBanner />
          </div>
          <Row gutter={16}>
            <Col span={18}>
              <Row gutter={16}>
                <Col span={12}>
                  <Card
                    hoverable
                    title={<div>最新新闻</div>}
                    className="blue-bg grandient-bg"
                    bordered={false}
                    cover={
                      <Carousel autoplay>
                        {newsImageList.length ? (
                          newsImageList.map(img => {
                            const name = img.Name;
                            const images = img.FileRow.filter(
                              v => '.jpg.jpeg.png'.indexOf(v.FileExt) !== -1
                            );
                            return (
                              <div className={styles.imageList}>
                                <img
                                  className={styles.image1}
                                  height={200}
                                  onClick={() => this.clickImage(img, '新闻')}
                                  src={images.length && images[0].ServerUrl}
                                />
                                <div className={styles.imageName}>{name}</div>
                              </div>
                            );
                          })
                        ) : (
                          <div className={styles.imageList}>
                            <img
                              className={styles.image1}
                              height={200}
                              src={require('../../../public/homeImages/news/2.jpg')}
                            />
                            <div className={styles.imageName}>每日新闻</div>
                          </div>
                        )}
                      </Carousel>
                    }
                    extra={
                      <Link to="/dashboard/hyecnews">
                        <Tooltip title="更多" placement="right">
                          <Icon style={{ color: '#fff' }} type="more" />
                        </Tooltip>
                      </Link>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={newsList}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div
                            className={styles.newList}
                            onClick={() => this.goDetail(item, '新闻')}
                          >
                            <Tooltip placement="top" title={item.Name}>
                              <div className={styles.newsTitle}>{item.Name}</div>
                            </Tooltip>
                            {this.renderNew(moment(item.RegDate).format('YYYY-MM-DD')) && (
                              <div className={styles.newTag} />
                            )}
                            <div style={{ color: '#333' }}>
                              {moment(item.RegDate).format('YYYY-MM-DD')}
                            </div>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={<div>QHSE信息</div>}
                    bordered={false}
                    className="blue-bg grandient-bg"
                    cover={
                      <Carousel autoplay>
                        {loginManageImagesData.length ? (
                          loginManageImagesData.map(img => {
                            const name = img.Name;
                            const images = img.FileRow.filter(
                              v => '.jpg.jpeg.png'.indexOf(v.FileExt) !== -1
                            );
                            return (
                              <div className={styles.imageList}>
                                <img
                                  className={styles.image1}
                                  height={200}
                                  onClick={() => this.clickImage(img, 'HSE信息')}
                                  src={images.length && images[0].ServerUrl}
                                />
                                <div className={styles.imageName}>{name}</div>
                              </div>
                            );
                          })
                        ) : (
                          <img height={200} src={require('../../../public/homeImages/hse/1.jpg')} />
                        )}
                        {/* <img
                          alt="example"
                          src="http://5b0988e595225.cdn.sohucs.com/images/20180604/cec8268873f54e70acf9bed4d75fdc18.jpeg"
                        />

                        <img
                          alt="example"
                          src="http://ww1.sinaimg.cn/large/006tNc79ly1g46wd1wiqjj30y60fqwop.jpg"
                        /> */}
                      </Carousel>
                    }
                    extra={
                      <Link to="/HSE">
                        <Tooltip title="更多" placement="right">
                          <Icon style={{ color: '#fff' }} type="more" />
                        </Tooltip>
                      </Link>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={loginManageData}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div
                            className={styles.newList}
                            onClick={() => this.goDetail(item, 'QHSE信息')}
                          >
                            <Tooltip placement="top" title={item.Name}>
                              <div className={styles.newsTitle}>{item.Name}</div>
                            </Tooltip>
                            {this.renderNew(moment(item.PublishDate).format('YYYY-MM-DD')) && (
                              <div className={styles.newTag} />
                            )}
                            <div style={{ color: '#333' }}>
                              {moment(item.PublishDate).format('YYYY-MM-DD')}
                            </div>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 14 }}>
                <Col span={12}>
                  <Card
                    className="blue-bg grandient-bg"
                    title={<div>知识经验</div>}
                    bordered={false}
                    extra={
                      <a href="http://10.43.1.240:8085/" target="_blank">
                        <Tooltip title="更多" placement="right">
                          <Icon style={{ color: '#fff' }} type="more" />
                        </Tooltip>
                      </a>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={adata}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList}>
                            <Tooltip placement="top" title={item.title}>
                              <div className={styles.newsTitle}>
                                <a href={item.link} target="_blank">
                                  {item.title}
                                </a>
                              </div>
                            </Tooltip>
                            {this.renderNew(item.time) && <div className={styles.newTag} />}
                            <div style={{ color: '#333' }}>{item.time}</div>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    className="blue-bg grandient-bg"
                    title={<div>近期培训</div>}
                    bordered={false}
                    extra={
                      <Tooltip title="更多" placement="right">
                        <Icon style={{ color: '#fff' }} type="more" />
                      </Tooltip>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={[]}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList}>
                            <Tooltip placement="top" title={item.title}>
                              <div className={styles.newsTitle}>{item.title}</div>
                            </Tooltip>
                            {this.renderNew(item.time) && <div className={styles.newTag} />}
                            <div style={{ color: '#333' }}>{item.time}</div>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              {/* <UsualProgram /> */}
              <Card
                className="blue-bg grandient-bg"
                title={<div>学习分享</div>}
                bordered={false}
                extra={
                  <Link to="/dashboard/leaderShare">
                    <Tooltip title="更多" placement="right">
                      <Icon style={{ color: '#fff' }} type="more" />
                    </Tooltip>
                  </Link>
                }
              >
<<<<<<< HEAD
                <div style={{ height: 260 }}>
                  {leaderShareData.length && (
                    <div style={{ display: 'flex' }}>
                      <img
                        style={{ marginBottom: 6 }}
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578233531013&di=de64c2f9f4087b320d4b91b8c959a5b8&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F53%2F44%2F74N58PICfYu_1024.jpg"
                        width={120}
                        height={120}
                      />
                      <p
                        style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }}
                        onClick={() => this.goDetail(leaderShareData[0], '学习分享')}
                      >
                        {leaderShareData[0].Name}
                      </p>
                    </div>
                  )}
=======
                <div style={{ height: 260}}>
                  {leaderShareData.length && <div style={{display: 'flex'}}>
                    <img style={{marginBottom: 6}} src={require('../../../public/images/xuexi.jpeg')} width={120} height={120}/>
                    <p style={{color: 'red', marginLeft: 10, cursor: 'pointer'}} onClick={() => this.goDetail(leaderShareData[0], '学习分享')}>{leaderShareData[0].Name}</p>
                  </div>}
>>>>>>> update
                  {leaderShareData
                    .map(v => {
                      return (
                        <a onClick={() => this.goDetail(v, '学习分享')}>
                          <p className={styles.gaoceng}>{v.Name}</p>
                        </a>
                      );
                    })
                    .filter((v, index) => index < 7 && index > 0)}
                </div>
              </Card>
              <Card
                className="blue-bg grandient-bg"
                style={{ marginTop: 14, height: 368, overflow: 'hidden' }}
                title={<div>今日请假</div>}
                bordered={false}
              >
                <div style={{ overflow: 'hidden', height: 320 }}>
                  <List
                    className={leaveData.length > 8 ? 'mymove' : ''}
                    style={{ position: 'relative' }}
                    size="small"
                    split={false}
                    dataSource={leaveData}
                    renderItem={item => (
                      <List.Item>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}
                        >
                          <Popover content={leaveInfo(item)} title="员工信息" placement="left">
                            {item.Name}
                          </Popover>
                          <a style={{ color: colorMap[item.LeaveType] }}>{item.LeaveType}</a>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              </Card>
            </Col>
          </Row>

          <ImageD />
          <Row gutter={16} style={{ marginTop: 20 }}>
            <Col span={14}>
              <div style={{ display: 'flex', height: '320px' }}>
                <div
                  style={{
                    width: '200px',
                    border: '1px solid #1890ff',
                    borderRight: 'none',
                    backgroundColor: '#94c9ff',
                  }}
                  src="/images/clendar.jpg"
                >
                  <p className="op-calendar-new-right-date">
                    {currentDayInfo.date} {currentDayInfo.ncWeek}
                  </p>
                  <p className="op-calendar-new-right-day">{currentDayInfo.cDay}</p>
                  <p className="op-calendar-new-right-lunar c-gap-top-small">
                    <span>{'星座: ' + currentDayInfo.astro}</span>
                    <span>{currentDayInfo.IMonthCn + currentDayInfo.IDayCn}</span>
                    <span>
                      {currentDayInfo.gzYear}年 【{currentDayInfo.Animal}年】
                    </span>
                    <span>
                      {currentDayInfo.gzMonth}月 {currentDayInfo.gzDay}日
                    </span>
                  </p>
                </div>
                <div
                  style={{
                    // width: '400px',
                    border: '1px solid #1890ff',
                    borderRadius: 4,
                    borderLeft: 'none',
                    backgroundColor: '#fff',
                    flex: 1,
                  }}
                >
                  <Calendar
                    fullscreen={false}
                    onPanelChange={(value, mode) => this.onPanelChange(value, mode)}
                    onChange={date => {
                      const days = moment(date).format('YYYY-MM-DD');
                      const splitDay = days.split('-');
                      this.setState({
                        currentDayInfo: calendar.solar2lunar(splitDay[0], splitDay[1], splitDay[2]),
                      });
                      this.setState({
                        meetingList: allMeetingList.filter(
                          v =>
                            moment(v.BeginDate).format('YYYY-MM-DD') ===
                            moment(date).format('YYYY-MM-DD')
                        ),
                      });
                    }}
                    dateFullCellRender={time => {
                      const day = moment(time).format('DD');
                      //  const currM = moment().format('MM');
                      const renderM = moment(time).format('MM');
                      const dates = moment(time).format('YYYY-MM-DD');
                      const mmdd = moment(time).format('MM-DD');
                      const splitDay = dates.split('-');
                      // const meetDays = ['2020-01-07']
                      const meetDays = allMeetingList.map(v =>
                        moment(v.BeginDate).format('YYYY-MM-DD')
                      );
                      const curData = calendar.solar2lunar(splitDay[0], splitDay[1], splitDay[2]);
                      const isWeek = curData.ncWeek === '星期六' || curData.ncWeek === '星期日';

                      let clsName = '';
                      const textMap = {
                        'c-huiyi': '会',
                        'is-fading-holiday': '休',
                        'is-tiaoban': '班',
                      };
                      const todayHoliday = curYearHoliday[mmdd];
                      let lunarDay = curData.festival || curData.IDayCn;
                      if (todayHoliday) {
                        if (todayHoliday.holiday) {
                          clsName = 'is-fading-holiday';
                          lunarDay = todayHoliday.name;
                        } else {
                          clsName = 'is-tiaoban';
                        }
                      }
                      if (meetDays.includes(dates)) {
                        clsName = 'c-huiyi';
                      }
                      const cls = classNames('custom-days', clsName, {
                        'no-curr-month': selectedMonth !== renderM,
                        'is-common-week':
                          isWeek && !curYearHoliday[mmdd] && selectedMonth === renderM,
                      });
                      return (
                        <div className={cls}>
                          <div className="c-day-tag">{textMap[clsName] || ''}</div>
                          <div className="c-day">{day}</div>
                          <div className="custom-celendar-data">{lunarDay}</div>
                        </div>
                      );
                    }}
                    dateCellRender={time => {
                      const day = moment(time).format('YYYY-MM-DD');
                      const meetDays = allMeetingList.map(v =>
                        moment(v.BeginDate).format('YYYY-MM-DD')
                      );
                      //
                      if (meetDays.includes(day)) {
                        return <div className="ccc-meeting-day">会</div>;
                      }
                      const splitDay = day.split('-');
                      console.log(calendar.solar2lunar(splitDay[0], splitDay[1], splitDay[2]));
                      const curData = calendar.solar2lunar(splitDay[0], splitDay[1], splitDay[2]);
                      return (
                        <div className="custom-celendar-data">
                          {curData.festival || curData.IDayCn}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div style={{ height: '100%', border: '1px solid #1890ff' }}>
                <List
                  className="comment-list"
                  // header={`${data.length} replies`}
                  itemLayout="horizontal"
                  style={{ backgroundColor: '#fff', height: '320px' }}
                  dataSource={meetingList}
                  renderItem={item => (
                    <li>
                      <Comment
                        // actions={item.actions}
                        author={item.MeetingRoomNo}
                        avatar={<Tag color="red">会</Tag>}
                        content={item.Name}
                        datetime={moment(item.BeginDate).format('YYYY-MM-DD hh:mm')}
                      />
                    </li>
                  )}
                />
              </div>
            </Col>
          </Row>
          <div />
          <div className={styles.margin}>
            <Card
              className="blue-bg grandient-bg"
              title={<div>服务中心</div>}
              style={{ marginTop: 20 }}
              bordered={false}
            >
              <div className={styles.serv}>
                <div style={{ width: '100%' }}>
                  <a>华谊信息运维</a>
                  <p>
                    6# 号楼: <br /> 李建新(703897) 丁毅(703895) <br /> 孟爽(703893) 钟强(703889){' '}
                    <br /> 李磊(709195)
                  </p>
                </div>
                <div style={{ width: '100%' }}>
                  <a>大楼设备维修</a>
                  <p>11# 号楼: 刘洪(703882)</p>
                </div>
                <div style={{ width: '100%' }}>
                  <a>联系电话</a>
                  <br />
                  <p className={styles.banci}>
                    <Icon
                      style={{ fontSize: '20px' }}
                      type="phone"
                      theme="twoTone"
                      twoToneColor="orange"
                    />
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'orange',
                        'line-height': 1.2,
                        marginTop: 12,
                        marginLeft: 10,
                      }}
                    >
                      64705888
                    </p>
                  </p>
                  <p style={{ color: 'orange', fontSize: '12px', marginBottom: 6 }}>
                    公司门卫24小时值班电话
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <Drawer
            title="完整日历"
            height={880}
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Cc />
          </Drawer>
        </div>
      </div>
    );
  }
}
