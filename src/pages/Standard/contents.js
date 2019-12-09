import React from 'react';
import { Card, Badge } from 'antd';
import styles from './index.less';
const data = [
  {
    name: '工艺系统专业',
    link: '',
  },
  {
    name: '工艺管道专业',
    link: '',
  },
  {
    name: '粉体/工业炉,机泵专业',
    link: '',
  },
  {
    name: '自控专业',
    link: '',
  },
  {
    name: '电气专业',
    link: '',
  },
  {
    name: '电信专业',
    link: '',
  },
  {
    name: '土建专业',
    link: '',
  },
  {
    name: '给水排专业',
    link: '',
  },
  {
    name: '采暖通风专业',
    link: '',
  },
  {
    name: '热工、化学水处理专业',
    link: '',
  },
  {
    name: '总图专业',
    link: '',
  },
  {
    name: '消防专业',
    link: '',
  },
  {
    name: '环保专业',
    link: '',
  },
  {
    name: '安全基础标准及通用规范',
    link: '',
  },
  {
    name: '卫生防护标准',
    link: '',
  },
  {
    name: '节能设计标准',
    link: '',
  },
  {
    name: '安全施工及验收标砖规范',
    link: '',
  },
  {
    name: '总图专业',
    link: '',
  },
  {
    name: '消防专业',
    link: '',
  },
  {
    name: '环保专业',
    link: '',
  },
  {
    name: '工程造价评估',
    link: '',
  },
];
export default () => {
  return (
    <Card title="现行标准目录">
      <ul className={styles.ul}>
        {data.map(v => {
          return (
            <li className={styles.li}>
              <Badge status="processing"></Badge> {v.name}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
