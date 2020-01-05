import React, { Component } from 'react';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Spin, Tag, Menu, Icon, Avatar, Tooltip, message, Drawer, Button, Popover } from 'antd';
import Cookies from 'js-cookie';
import moment from 'moment';
import Link from 'umi/link';
import groupBy from 'lodash/groupBy';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import HeaderDropdown from '../HeaderDropdown';
import SelectLang from '../SelectLang';
import ValueImg from './value';
import ImageList from '../../pages/Dashboard/imageList';
import Usual from '../../pages/Dashboard/UsualProgram';
import styles from './index.less';

export default class GlobalHeaderRight extends Component {
  state = { visible: false, placement: 'top', userInfo: {
    Name: ''
  }};

  componentDidMount() {
    setInterval(() => {
      this.getCookie();
    }, 1000);
    
  }

  showDrawer = () => {
    this.setState({
      visible: true,
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


  getNoticeData() {
    const { notices = [] } = this.props;
    if (notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }

  getCookie = () =>  {
    if(Cookies.get('userInfo')) {
      try {
        this.setState({
          userInfo: JSON.parse(Cookies.get('userInfo') || '{}')
        })
      } catch (error) {
        
      }
      
    }
  }

  getUnreadData = noticeData => {
    const unreadMsg = {};
    Object.entries(noticeData).forEach(([key, value]) => {
      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }
      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter(item => !item.read).length;
      }
    });
    return unreadMsg;
  };

  changeReadState = clickedItem => {
    const { id } = clickedItem;
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeNoticeReadState',
      payload: id,
    });
  };

  render() {
    const {
      currentUser,
      fetchingNotices,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
      theme,
    } = this.props;
    const { userInfo } = this.state;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        {/* <Menu.Item key="userCenter">
          <Icon type="user" />
          <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          <FormattedMessage id="menu.account.trigger" defaultMessage="Trigger Error" />
        </Menu.Item>
        <Menu.Divider /> */}
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        <div style={{display: 'flex', height: '100%'}}>
          <Usual />
          <Popover
            content={
              <div style={{ width: 350 }}>
                <div className="weixin">
                  <img
                    width="120"
                    height="120"
                    src="https://tva1.sinaimg.cn/large/006tNbRwly1g9r7yg7ke8j30by0byt9j.jpg"
                  />
                  <div>
                    <div style={{ marginTop: 6 }}>
                      <span style={{ color: 'blue' }}>步骤一: </span>打开手机的微信
                    </div>
                    <div>
                      <span style={{ color: 'blue' }}>步骤一: </span>点微信右上角的"+"号, 选择"扫一扫"
                    </div>
                    <div>
                      <span style={{ color: 'blue' }}>步骤一: </span>
                    把扫描框对准二维码扫描后,选择关注确认
                    </div>
                  </div>
                </div>
              </div>
          }
            trigger="hover"
          >
            <div style={{height: '40px', 'paddingRight': '30px'}}>
              <Tag color="#07C160" style={{ cursor: 'pointer' }}>
                <Icon type="wechat" />
                <span style={{ color: '#fff', cursor: 'pointer' }}>关注微信</span>
              </Tag>
            </div>
          </Popover>
          {userInfo.Name ? (

            <HeaderDropdown overlay={menu}>

              <span className={`${styles.action} ${styles.account}`}>

                <Avatar

                  size="small"

                  className={styles.avatar}

                  src="/images/user1.png"

                  alt="avatar"
                />

                <span className={styles.name}>{userInfo.Name}</span>

              </span>

            </HeaderDropdown>

        ) : <div style={{marginRight: 20}}><Link to="/Login"><a>登录</a></Link></div>}
        </div>
      </div>
    );
  }
}
