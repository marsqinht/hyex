import React from 'react';
import { Breadcrumb, Icon, Row, Col, Card, List, Calendar, Badge, Comment, Tooltip } from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './Home.less';
import UsualProgram from './UsualProgram';
import ImageList from './imageList';

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

const data = [
  {
    title: '中共上海华谊工程有限公司第二次党员大会隆重召开',
    time: '2019-06-06',
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

export default () => (
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
      <UsualProgram />
      <Row gutter={16}>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="profile" theme="twoTone" /> 最新新闻
                  </div>
                }
                bordered={false}
                cover={
                  <img
                    alt="example"
                    height={200}
                    src="http://ww1.sinaimg.cn/large/006tNc79ly1g46wd1wiqjj30y60fqwop.jpg"
                  />
                }
                extra={<a href="#">更多</a>}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <QueueAnim delay={300} className="queue-simple">
                      <List.Item actions={[<a>{item.time}</a>]}>
                        <List.Item.Meta
                          // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={<a href="https://www.hyec.com">{item.title}</a>}
                        />
                      </List.Item>
                    </QueueAnim>
                  )}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="tool" theme="twoTone" /> QHSE信息
                  </div>
                }
                bordered={false}
                cover={
                  <img
                    alt="example"
                    height={200}
                    src="http://ww3.sinaimg.cn/large/006tNc79ly1g46wi972fxj31020h4ttq.jpg"
                  />
                }
                extra={<a href="#">更多</a>}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item actions={[<a>{item.time}</a>]}>
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://www.hyec.com">{item.title}</a>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="bulb" theme="twoTone" /> 知识经验
                  </div>
                }
                bordered={false}
                cover={
                  <img
                    alt="example"
                    height={200}
                    src="http://ww2.sinaimg.cn/large/006tNc79ly1g46z9t63wmj310y0j64qp.jpg"
                  />
                }
                extra={<a href="#">更多</a>}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item actions={[<a>{item.time}</a>]}>
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://www.hyec.com">{item.title}</a>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="book" theme="twoTone" /> 近期培训
                  </div>
                }
                bordered={false}
                cover={
                  <img
                    alt="example"
                    height={200}
                    src="http://ww4.sinaimg.cn/large/006tNc79ly1g46zehotlmj310k0hcx2w.jpg"
                  />
                }
                extra={<a href="#">更多</a>}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item actions={[<a>{item.time}</a>]}>
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://www.hyec.com">{item.title}</a>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Card
            title={
              <div>
                <Icon type="like" theme="twoTone" /> 高层学习分享
              </div>
            }
            bordered={false}
          >
            <p>公司开展“大手牵小手，阳光谊路走”六一亲子活动</p>
            <p>公司召开庆“七一”党员、干部暨先进表彰大会</p>
            <p>公司召开党委、纪委换届选举启动</p>
            <p>公司党委下基层调研党建工作</p>
            <p>公司进行华谊园区停车场车棚建设</p>
          </Card>

          <Card
            style={{ marginTop: '20px', height: 553 }}
            title={
              <div>
                <Icon type="flag" theme="twoTone" /> 今日请假
              </div>
            }
            bordered={false}
          >
            <List
              size="small"
              split={false}
              dataSource={holidayData}
              renderItem={item => <List.Item actions={[<a>{item.type}</a>]}>{item.name}</List.Item>}
            />
          </Card>

          <Card
            style={{ marginTop: '20px' }}
            title={
              <div>
                <Icon type="appstore" theme="twoTone" /> 常用程序
              </div>
            }
            bordered={false}
          >
            <div style={{ fontSize: '16px' }}>
              <div className={styles.program}>
                <IconFont type="iconmonitor" />

                <p>HYPM 项目平台</p>
              </div>
              <div className={styles.program}>
                <IconFont type="icondingcan" />
                <p>订餐系统</p>
              </div>
              <div className={styles.program}>
                <IconFont type="iconchecklist" />
                <p> 本周菜单</p>
              </div>
              <div className={styles.program}>
                <IconFont type="icongroup" />
                <p>员工信息</p>
              </div>
              <div className={styles.program}>
                <IconFont type="iconcalendar2" />
                <p>请假系统</p>
              </div>
              <div className={styles.program}>
                <IconFont type="iconfolder" />
                <p> 图纸入库系统</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={14}>
          <div style={{ display: 'flex', height: '320px' }}>
            <img
              style={{ width: '260px' }}
              src="http://ww3.sinaimg.cn/large/006tNc79ly1g47yu3i6w5j30la0pawsx.jpg"
            />
            <div
              style={{
                // width: '400px',
                border: '1px solid #d9d9d9',
                borderRadius: 4,
                backgroundColor: '#fff',
                flex: 1,
              }}
            >
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div style={{ height: '100%' }}>
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
      <ImageList />
    </div>
  </div>
);
