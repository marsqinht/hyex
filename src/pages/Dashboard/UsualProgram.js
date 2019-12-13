import { PureComponent } from 'react';
import { Card, Icon, Tooltip } from 'antd';
import styles from './Home.less';

const Items = [
  {
    icon: 'iconmonitor',
    name: 'HYPM平台',
    link: 'http://10.43.1.69/'
  },
  {
    icon: 'icondingcan',
    name: '订餐系统'
  },
  {
    icon: 'iconchecklist',
    name: '本周菜单'
  }, {
    icon: 'icongroup',
    name: '员工信息'
  },
  // {
  //   icon: 'iconcalendar2',
  //   name: '请假系统'
  // }, 
  {
    icon: 'iconfolder',
    name: '图纸入库系统'
  }
]


const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1251765_mco4fu4f3kr.js',
});
export default class Workplace extends PureComponent {
  render() {
    return (
      <ul className={styles.uu}>
        {
          Items.map(v => {
            return <li className={styles.uli}>
              <Tooltip placement="bottom" title={v.name}>
      
              <div className={styles.icon}>
                <a href={v.link || 'javascript:;'}>
                  <IconFont type={v.icon} />
                </a>
              </div>
            </Tooltip>
              {/* <p className={styles.name}>{v.name}</p> */}
                   </li>
          })
        }
      </ul>
    )
  }
}
