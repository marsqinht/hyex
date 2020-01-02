import { Card } from 'antd';
import { Component } from 'react';
import router from 'umi/router';
import styles from './party.less';

const { Meta } = Card;

export default class Huayi extends Component {
  goHuayi = () => {
    router.push('/dashboard/party/huayi');
  };

  goZhidu = () => {
    router.push('/dashboard/party/zhiduHuibian');
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
              src={require('../../../public/images/log_with_txt.jpg')}
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
              src={require('../../../public/images/zhiduhuibian.jpg')}
            />
          }
        >
          <Meta title="制度汇编" />
        </Card>
      </div>
    );
  }
}
