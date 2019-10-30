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
              src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8gineojurj30n00dw0ss.jpg"
            />
          }
        >
          <Meta title="华谊工程" description="www.instagram.com" />
        </Card>
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
          <Meta title="制度汇编" description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}
