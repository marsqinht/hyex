import React from 'react';
import { Card, Icon, Tooltip } from 'antd';
import styles from './Home.less';
import { queryMenu } from '../../services/home';
import { Item } from 'rc-menu';
import { router } from 'umi';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1251765_mco4fu4f3kr.js',
});
export default class Workplace extends React.Component {
  state = {
    Items: [
      {
        icon: 'iconmonitor',
        name: 'HYPM平台',
        link: 'http://10.43.1.69/',
      },
      // {
      //   icon: 'icondingcan',
      //   name: '订餐系统',
      //   link: '',
      //   target: '_blank',
      // },
      {
        icon: 'iconchecklist',
        name: '本周菜单',
        link: '',
        target: '_blank',
      },
      {
        icon: 'icongroup',
        name: '员工信息',
        link: '/PowerService/#/PowerService/dashboard/yuanong',
      },
      // {
      //   icon: 'iconcalendar2',
      //   name: '请假系统'
      // },
      {
        icon: 'iconfolder',
        name: '图纸入库系统',
      },
    ],
  };

  componentDidMount() {
    this.initMenu();
  }

  initMenu = async () => {
    const { Items } = this.state;
    const { data, success } = await queryMenu();
    if (success && data.length) {
      Items[1].link = data[0].ServerUrl;
      this.setState({
        Items,
      });
    }
  };

  render() {
    const { Items } = this.state;
    return (
      <ul className={styles.uu}>
        {Items.map(v => {
          return (
            <li className={styles.uli}>
              <Tooltip placement="bottom" title={v.name}>
                <div className={styles.icon}>
                  <a href={v.link || 'javascript:;'} target={v.target || ''}>
                    <IconFont type={v.icon} />
                  </a>
                </div>
              </Tooltip>
              {/* <p className={styles.name}>{v.name}</p> */}
            </li>
          );
        })}
      </ul>
    );
  }
}
