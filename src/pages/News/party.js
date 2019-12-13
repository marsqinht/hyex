import { Card } from 'antd';
import { Component } from 'react';
import router from 'umi/router';
import styles from './party.less';

const { Meta } = Card;

export default class Huayi extends Component {
  goHuayi = () => {
    router.push('/dashboard/huayi');
  };

  goZhidu = () => {
    router.push('/dashboard/zhiduHuibian');
  };

  render() {
    return (
      <div className={styles.party}>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={this.goHuayi}
          cover={
            <img
              alt="example"
              src="https://tva1.sinaimg.cn/large/006tNbRwgy1g9v3ghr330j30ro0ss0ud.jpg"
            />
          }
         />
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={this.goZhidu}
          cover={
            <img
              alt="example"
              src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8giq8eclgj30dw098q3l.jpg"
            />
          }
        >
          <Meta title="制度汇编" />
        </Card>
      </div>
    );
  }
}
