import React, { PureComponent } from 'react';
import { Icon, Popover, Carousel } from 'antd';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';

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
export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed, isMobile, logo } = this.props;
    return (
      <div className={styles.header}>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <img src={logo} alt="logo" width="32" />
          </Link>
        )}
        <span className={styles.trigger} onClick={this.toggle}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </span>
        <div style={{ background: '#fff', marginBottom: 12, padding: 10, display: 'inline-block',
    'line-height': 1 }}>
                <span style={{color: '#ff4d4f'}}>温馨提示:</span>{' '}
                <img
                  width={20}
                  height={20}
                  src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8pq10s10tg305k05kq2r.gif"
                />
                诚祝{' '}
                <Popover content={info} title="员工信息" placement="rightBottom">
                  <a href="javascript:;">李子煜</a>{' '}
                </Popover>
                生日快乐
              </div>
        <RightContent {...this.props} />
      </div>
    );
  }
}
