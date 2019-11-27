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
  Descriptions,Tag,
  Button,
  Carousel
} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import numeral from 'numeral';
import moment from 'moment';
import QueueAnim from 'rc-queue-anim';
import router from 'umi/router';
import Trend from '@/components/Trend';
import Yuan from '@/utils/Yuan';

import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import styles from './Home.less';
import UsualProgram from './UsualProgram';
import ImageList from './imageList';
import ImageD from './image3D';
import Cc from './Clendar';
import BarCharts from './Charts';
import HomeBanner from './HomeBanner';
import { queryNews } from '../../services/new';


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

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const info = (
  <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="http://pic2.52pk.com/files/150911/1283574_093700_6640.jpeg"
        width={50}
        height={50}
      />
      <div style={{ marginLeft: 14 }}>
        姓名: 李子煜
        <br />
        部门: 工程事业部
        <br />
        室号: 8508
        <br />
        分机: 703829
        <br />
      </div>
    </div>
    <div style={{ marginTop: 6 }}>
      <div>职位: 工程师</div>
      <div>Email: liziyu@heyc.com</div>
    </div>
  </div>
);
const data = [
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
  '调休': '#faad14',
  '公出': '#1890ff',
  '请假': '#f5222d'
}
const holidayData = [
  {
    name: '李翠',
    type: '调休',
  },
  {
    name: '秦奋',
    type: '公出',
  },
  {
    name: '李子煜',
    type: '公出',
  },
  {
    name: '郑淑婷',
    type: '请假',
  },
  {
    name: '秦奋',
    type: '公出',
  },
  {
    name: '李子煜',
    type: '公出',
  },
  {
    name: '郑淑婷',
    type: '调休',
  },
  {
    name: '李子煜',
    type: '公出',
  },
  {
    name: '郑淑婷',
    type: '调休',
  },
  {
    name: '秦奋',
    type: '公出',
  },
  {
    name: '李子煜',
    type: '公出',
  },
  {
    name: '郑淑婷',
    type: '调休',
  },
];

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
  state = { visible: false, placement: 'top', newsList: [] };

  componentDidMount() {
    this.getNewsList(1)
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  getNewsList = (page = 1) => {
    queryNews({
      page,
      size: 4
    }).then(({ success, data, total }) => {
      console.log(data)
      if(success) {
        this.setState({
          newsList: data
        })
      }
    })
  }

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

  renderNew = time => {
    return new Date().getTime() - new Date(time).getTime() < 259200000;
  };

  goDetail = (currentPage =1, index =1) => {
    router.push(`/dashboard/detail/${currentPage}/${index}`);
  };

  render() {
    const { newsList } = this.state;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>概况</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>详情</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.content}>
          <div className={styles.mb}>
            <HomeBanner />
          </div>
          <Row gutter={16}>
            <Col span={18}>
              {/* <div className={styles.mb}>
              </div> */}
              {/* <div style={{ background: '#fff', marginBottom: 12, padding: 10 }}>
                温馨提示:{' '}
                <img
                  width={20}
                  height={20}
                  src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8hrb9tgguj305k05kwed.jpg"
                />
                诚祝{' '}
                <Popover content={info} title="员工信息" placement="rightBottom">
                  <a href="javascript:;">李子煜</a>{' '}
                </Popover>
                生日快乐
              </div> */}
              <Row gutter={16}>
                <Col span={12}>
                  <Card
                    hoverable
                    title={
                      <div>
                        最新新闻
                      </div>
                    }
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
                    extra={<Icon style={{color: '#fff'}} type="more" />}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={newsList}
                      bordered={false}
                      split={false}
                      renderItem={(item,index) => (
                        <List.Item>
                          <div className={styles.newList} onClick={()=>this.goDetail(1,index)}>
                            <Tooltip placement="top" title={item.Name}>

                              <div className={styles.newsTitle}>{item.Name}</div>
                            </Tooltip>
                            {this.renderNew(moment(item.RegDate).format('YYYY-MM-DD')) && (<div className={styles.newTag} />)}
                            <div style={{color: '#333'}}>{moment(item.RegDate).format('YYYY-MM-DD')}</div>

                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title={
                      <div>
                     QHSE信息
                      </div>
                    }
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
                    extra={<Icon style={{color: '#fff'}} type="more" />}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList}>
                            <Tooltip placement="top" title={item.title}>

                              <div className={styles.newsTitle}>{item.title}</div>
                            </Tooltip>
                            {this.renderNew(item.time) && (<div className={styles.newTag} />)}
                            <div style={{color: '#333'}}>{item.time}</div>

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
                    title={
                      <div>
                   知识经验
                      </div>
                    }
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
                    extra={<Icon style={{color: '#fff'}} type="more" />}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList}>
                            <Tooltip placement="top" title={item.title}>

                              <div className={styles.newsTitle}>{item.title}</div>
                            </Tooltip>
                            {this.renderNew(item.time) && (<div className={styles.newTag} />)}
                            <div style={{color: '#333'}}>{item.time}</div>

                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    className="blue-bg"
                    title={
                      <div>
                      近期培训
                      </div>
                    }
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
                    extra={<Icon style={{color: '#fff'}} type="more" />}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      bordered={false}
                      split={false}
                      renderItem={item => (
                        <List.Item>
                          <div className={styles.newList}>
                            <Tooltip placement="top" title={item.title}>

                              <div className={styles.newsTitle}>{item.title}</div>
                            </Tooltip>
                            {this.renderNew(item.time) && (<div className={styles.newTag} />)}
                            <div style={{color: '#333'}}>{item.time}</div>

                          </div>
                        </List.Item>
                      )}
                    />
                  </Card>

                </Col>

              </Row>

            </Col>
            <Col span={6}>
              <Card
                className="blue-bg grandient-bg"
                title={
                  <div>
               学习分享
                  </div>
                }
                bordered={false}
              >
                <Popover placement="leftTop" content={content} title="活动" trigger="hover">
                  <p className={styles.gaoceng}>公司开展“大手牵小手，阳光谊路走</p>
                </Popover>
                <Popover placement="leftTop" content={content} title="活动" trigger="hover">
                  <p className={styles.gaoceng}>公司召开庆“七一”党员、干部暨先进表彰大会</p>
                </Popover>
                <Popover placement="leftTop" content={content} title="活动" trigger="hover">
                  <p className={styles.gaoceng}>公司召开党委、纪委换届选举启动</p>
                </Popover>
                <Popover placement="leftTop" content={content} title="活动" trigger="hover">
                  <p className={styles.gaoceng}>公司党委下基层调研党建工作</p>
                </Popover>

                <p className={styles.gaoceng}>公司进行华谊园区停车场车棚建设</p>
              </Card>
              <Card
                className="blue-bg grandient-bg"
                style={{ marginTop: 14, height: 320, overflow: 'hidden' }}
                title={
                  <div>
                今日请假
                  </div>
                }
                bordered={false}
              >
                <div style={{ overflow: 'hidden' }}>
                  <List
                    className="mymove"
                    style={{ position: 'relative' }}
                    size="small"
                    split={false}
                    dataSource={holidayData}
                    renderItem={item => (
                      <List.Item actions={[<a style={{color: colorMap[item.type]}}>{item.type}</a>]}>{item.name}</List.Item>
                    )}
                  />
                </div>
              </Card>
              <div className={styles.margin}>
                <UsualProgram />
              </div>
            </Col>
          </Row>

          <ImageD />
          <Row gutter={16} style={{ marginTop: 20 }}>
            <Col span={14}>
              <div style={{ display: 'flex', height: '320px' }}>
                <img
                  style={{ width: '260px', border: '1px solid #1890ff', 'borderRight': 'none'}}
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
                    dateCellRender={(time) => {
                    const day = moment(time).format('D');
                    if(day === '8' || day === '21' || day === '26') {
                      return  <div className="flex-center"><Tag color="red">会</Tag></div>
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
          <Card
            className="blue-bg grandient-bg"
            title={
              <div>
              服务中心
              </div>
            }
            style={{ marginTop: 20 }}
            bordered={false}
          >
            <div className={styles.serv}>
              <div style={{width: '25%'}}>
                <a>华谊信息运维</a>
                <p>6# 号楼: <br />李建新(703897) 丁毅(703895) 孟爽(703893) <br />钟强(703889) 李磊(709195)</p>
              </div>
              <div style={{width: '25%'}}>
                <a>大楼设备维修</a>
                <p>11# 号楼: <br />刘洪(703882)</p>
              </div>
              <div style={{width: '25%'}}>
                <a>联系电话</a>
                <p className={styles.banci}>
                  <Icon style={{fontSize: '38px'}} type="phone" theme="twoTone" twoToneColor="orange" />
                  <p style={{fontSize: '24px', color: 'orange', 'line-height': 1.2, 'marginTop': 14}}>6470588</p>
                  <p style={{color: 'orange'}}>公司门卫24小时值班电话</p>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
