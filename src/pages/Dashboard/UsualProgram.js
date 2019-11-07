import { PureComponent } from 'react';
import { Card, Icon } from 'antd';
import styles from './Home.less';

const Items = [
  {
    icon: 'iconmonitor',
    name: 'HYPM项目平台'
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
  {
    icon: 'iconcalendar2',
    name: '请假系统'
  }, {
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
      <div className={styles.margin}>
        <Card
          className="blue-bg "
          title={
            <div>
             常用程序
            </div>
        }
          bordered={false}
        >
          <ul className={styles.uu}>
            {
          Items.map(v => {
            return <li className={styles.uli}>
              <div className={styles.icon}>
                <IconFont type={v.icon} />
              </div>
              <p className={styles.name}>{v.name}</p>
            </li>
          })
        }
          </ul>
        </Card>
      </div>
    )
  }
}