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


import moment from 'moment';
import router from 'umi/router';
import Link from 'umi/link';

import styles from './Home.less';
import ImageD from './image3D';
import Cc from './Clendar';
import HomeBanner from './HomeBanner';
import { queryNews
 } from '../../services/new';
 import { queryLoginManage, queryLeave, queryLeaderShare, queryMenu } from '../../services/home';

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
        <img src={`data:image/jpg;base64,${  item.Picture}`} width={50} height={70} />
        <div style={{ marginLeft: 14 }}>
          姓名: {item.Name}
          <br />
          部门: {item.dept}
          <br />
          室号: {item.RegHumName}
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
    title: '中共上海华谊工程有限公司第二次党员大会隆重召开',
    time: '2019-11-11',
  },
  {
    title: '华谊工程召开2018年度QHSE体系管理评审会',
    time: '2019-06-04',
  },
  {
    title: '万华一期烧碱项目喜获2018年度工程建设项目优秀设计成果二等奖',
    time: '2019-05-06',
  },
  {
    title: '提供组织保障 加强业务发展——数字化中心正式成立',
    time: '2019-04-18',
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

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Home extends Component {
  state = { visible: false, placement: 'top', newsList: [], loginManageData: [], leaveData: [], leaderShareData: []};

  componentDidMount() {
    this.getNewsList(1);
    this.initLoginManage();
    this.initLeave();
    this.initLeaderShare();
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  initLoginManage = async () => {
    const { data } = await queryLoginManage();
    this.setState({
      loginManageData: data
    })
  }

  initLeave = async () => {
    const { data } = await queryLeave();
    console.log(data);
    this.setState({
      leaveData: data
    })
  }

  initLeaderShare = async () => {
    const { data } = await queryLeaderShare();
    this.setState({
      leaderShareData: data
    })
  }

  getNewsList = (page = 1) => {
    queryNews({
      page,
      size: 5,
    }).then(({ success, data, total }) => {
      console.log(data);
      if (success) {
        this.setState({
          newsList: data,
        });
      }
    });
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

  renderNew = time => {
    return new Date().getTime() - new Date(time).getTime() < 259200000;
  };

  // goDetail = (currentPage = 1, index = 1) => {
  //   router.push(`/dashboard/detail/${currentPage}/${index}`);
  // };

  render() {
    const { newsList, leaderShareData, leaveData, loginManageData } = this.state;

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
                        <img
                          alt="example"
                          src="http://5b0988e595225.cdn.sohucs.com/images/20180604/cec8268873f54e70acf9bed4d75fdc18.jpeg"
                        />
                        <img
                          alt="example"
                          src="http://ww1.sinaimg.cn/large/006tNc79ly1g46wd1wiqjj30y60fqwop.jpg"
                        />
                      </Carousel>
                    }
                    extra={<Link to="/dashboard/hyecnews"><Icon style={{ color: '#fff' }} type="more" /></Link>}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={newsList}
                      bordered={false}
                      split={false}
                      renderItem={(item) => (
                        <List.Item>
                          <div className={styles.newList} onClick={() => this.goDetail(item, '新闻')}>
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
                        <img
                          alt="example"
                          src="http://ww3.sinaimg.cn/large/006tNc79ly1g46wi972fxj31020h4ttq.jpg"
                        />
                        <img
                          alt="example"
                          src="http://5b0988e595225.cdn.sohucs.com/images/20180604/cec8268873f54e70acf9bed4d75fdc18.jpeg"
                        />

                        <img
                          alt="example"
                          src="http://ww1.sinaimg.cn/large/006tNc79ly1g46wd1wiqjj30y60fqwop.jpg"
                        />
                      </Carousel>
                    }
                    extra={<Link to="/HSE"><Icon style={{ color: '#fff' }} type="more" /></Link>}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={loginManageData}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList} onClick={() => this.goDetail(item, 'QHSE信息')}>
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
              </Row>
              <Row gutter={16} style={{ marginTop: 14 }}>
                <Col span={12}>
                  <Card
                    className="blue-bg"
                    title={<div>知识经验</div>}
                    bordered={false}
                    cover={
                      <Carousel autoplay>
                        <img
                          alt="example"
                          height={230}
                          src="http://ww2.sinaimg.cn/large/006tNc79ly1g46z9t63wmj310y0j64qp.jpg"
                        />
                      </Carousel>
                    }
                    extra={<Icon style={{ color: '#fff' }} type="more" />}
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
                <Col span={12}>
                  <Card
                    className="blue-bg"
                    title={<div>近期培训</div>}
                    bordered={false}
                    cover={
                      <Carousel autoplay>
                        <img
                          alt="example"
                          height={230}
                          src="http://ww4.sinaimg.cn/large/006tNc79ly1g46zehotlmj310k0hcx2w.jpg"
                        />
                      </Carousel>
                    }
                    extra={<Icon style={{ color: '#fff' }} type="more" />}
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
              <Card className="blue-bg grandient-bg" title={<div>学习分享</div>} bordered={false} extra={<Link to="/dashboard/leaderShare"><Icon style={{ color: '#fff' }} type="more" /></Link>}>
                <div style={{height: 210}}>

               
                  {leaderShareData.map(v => {
                  return <a onClick={() => this.goDetail(v, '学习分享')}><p className={styles.gaoceng}>{v.Name}</p></a>
                }).filter((v,index) => index < 6)}
                </div>
              </Card>
              <Card
                className="blue-bg grandient-bg"
                style={{ marginTop: 14, height: 320, overflow: 'hidden' }}
                title={<div>今日请假</div>}
                bordered={false}
              >
                <div style={{ overflow: 'hidden', height: 300 }}>
                  <List
                    className={leaveData.length > 8 ? 'mymove' : ''}
                    style={{ position: 'relative' }}
                    size="small"
                    split={false}
                    dataSource={leaveData}
                    renderItem={item => (
                      <List.Item
                        actions={[<a style={{ color: colorMap[item.LeaveType] }}>{item.LeaveType}</a>]}
                      >
                        <Popover content={leaveInfo(item)} title="员工信息" placement="left">
                          {item.Name}
                        </Popover>
                      </List.Item>
                    )}
                  />
                </div>
              </Card>
              <div className={styles.margin}>
                {/* <UsualProgram /> */}
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
                        6# 号楼: <br /> 李建新(703897)  丁毅(703895)  <br /> 孟爽(703893) 钟强(703889) <br /> 李磊(709195)
                      </p>
                    </div>
                    <div style={{ width: '100%' }}>
                      <a>大楼设备维修</a>
                      <p>
                        11# 号楼: 刘洪(703882)
                      </p>
                    </div>
                    <div style={{ width: '100%' }}>
                      <a>联系电话</a>
                      <br />
                      <p className={styles.banci}>
                        <Icon
                          style={{ fontSize: '24px' }}
                          type="phone"
                          theme="twoTone"
                          twoToneColor="orange"
                        />
                        <p
                          style={{
                            fontSize: '20px',
                            color: 'orange',
                            'line-height': 1.2,
                            marginTop: 12,
                            marginLeft:10
                          }}
                        >
                          6470588
                        </p>
                        
                      </p>
                      <p style={{ color: 'orange' }}>公司门卫24小时值班电话</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>

          <ImageD />
          <Row gutter={16} style={{ marginTop: 20 }}>
            <Col span={14}>
              <div style={{ display: 'flex', height: '320px' }}>
                <img
                  style={{ width: '260px', border: '1px solid #1890ff', borderRight: 'none' }}
                  onClick={this.showDrawer}
                  src="http://ww3.sinaimg.cn/large/006tNc79ly1g47yu3i6w5j30la0pawsx.jpg"
                />
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
                    onPanelChange={onPanelChange}
                    dateCellRender={time => {
                      const day = moment(time).format('D');
                      if (day === '8' || day === '21' || day === '26') {
                        return (
                          <div className="flex-center">
                            <Tag color="red">会</Tag>
                          </div>
                        );
                      }
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
                  dataSource={edata}
                  renderItem={item => (
                    <li>
                      <Comment
                        // actions={item.actions}
                        author={item.author}
                        // avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                      />
                    </li>
                  )}
                />
              </div>
            </Col>
          </Row>
          <div />

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
