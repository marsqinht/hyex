
import React from 'react';
import styles from './Link.less';

export default () => (
  <div className={styles.content}>
    <a href="http://www.shhuayi.com/" target="_blank">
      <div className={styles.a}>
        <img className={styles.img} src="https://tva1.sinaimg.cn/large/006y8mN6ly1g9dcpnxgccj310p0s9762.jpg" />
        <p style={{marginTop: '10px'}}>上海华谊(集团)公司</p>
      </div>
    </a>
    <a href="http://hyoa.shhuayi.com/" target="_blank">
      <div className={styles.a}>
        <img className={styles.img} src="https://tva1.sinaimg.cn/large/006y8mN6ly1g9dcpnxgccj310p0s9762.jpg" />
        <p style={{marginTop: '10px'}}>集团总部OA</p>
      </div>
    </a>
    <a href="http://www.tced.com/" target="_blank">
      <div className={styles.a}>
        <img className={styles.img} src="https://tva1.sinaimg.cn/large/006y8mN6ly1g9dcpnxgccj310p0s9762.jpg" />
        <p style={{marginTop: '10px'}}>全国化工设备设计技术中心站</p>
      </div>
    </a>
  </div>
);
