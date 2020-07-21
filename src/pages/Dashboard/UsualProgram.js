import React from 'react';
import { Card, Icon, Tooltip, message } from 'antd';
import { Item } from 'rc-menu';
import { router } from 'umi';
import Cookies from 'js-cookie';
import styles from './Home.less';
import { queryMenu, goHse, doLogin } from '../../services/home';
import { goToEdit } from '@/utils/edit';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1251765_mco4fu4f3kr.js',
});
const noop = () => {}
export default class Workplace extends React.Component {
  state = {
    Items: [
      {
        icon: 'iconmonitor',
        name: 'HYPM平台',
        onClick() {
          try {
            const userInfo = JSON.parse(Cookies.get('userInfo') || '{}')
            if(userInfo.Code) {
              goHse({
                code: userInfo.Code,
              }).then(({ data, success }) => {
                if(success) {
                  window.open(data.url);
                }
              })
              
            } else {
              router.push(`/Login?redirect=${encodeURIComponent(window.location.href)}`)
            }
            
          } catch (error) {
            
          }
        }
        // link: 'http://10.43.1.69/',
        // target: '_blank'
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
        onClick() {
          message.warning('本周菜单未上传');
        }
      },
      {
        icon: 'icongroup',
        name: '员工信息',
        link: '/PowerService/#/PowerService/dashboard/yuanong',
      },
      {
        icon: 'iconcalendar2',
        name: '请假系统',
        onClick() {
          goToEdit('请假系统')
        }
      },
      {
        icon: 'iconfolder',
        name: '图纸入库系统',
        link: 'http://10.43.1.240/scei_other/ruku/ruku_sj_index.asp'
      },
      {
        icon: 'iconnotebook1',
        name: '企业文化',
        onClick() {
          const closeBannar = Cookies.get('closeBannar');
          Cookies.set('closeBannar', closeBannar === '1' ? '0' : '1');
        }
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
              {/* <Tooltip placement="bottom" title={v.name}> */}
              <div className={styles.icon}>
                <a href={v.link || 'javascript:;'} target={v.target || ''} onClick={v.onClick || noop}>
                  <IconFont type={v.icon} />
                  {/* <p className={styles.name}>{v.name}</p> */}
                </a>
              </div>
              <a href={v.link || 'javascript:;'} target={v.target || ''} onClick={v.onClick || noop}>
                <p className={styles.name}>{v.name}</p>
              </a>
              {/* </Tooltip> */}
            </li>
          );
        })}
      </ul>
    );
  }
}
