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
              width={240}
              height={160}
              src={require('../../../public/images/huayidd.jpeg')}
            />
          }
        >
          <Meta title="华谊工程" style={{textAlign: 'center'}} />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={this.goZhidu}
          cover={
            <img
              alt="example"
              width={240}
              height={160}
              src={require('../../../public/images/shu.jpeg')}
            />
          }
        >
          <Meta title="制度汇编" style={{textAlign: 'center'}} />
        </Card>
      </div>
    );
  }
}
