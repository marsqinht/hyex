
import { Card } from 'antd';
import { Component } from 'react';
import router from 'umi/router';
import styles from './party.less';

const { Meta } = Card;

export default class Huayi extends Component {
  goHuayi = ()=> {
    router.push('/dashboard/huayi')
  }
  
  render() {
    return (
      <div className={styles.party}>
        <Card
          hoverable
          style={{ width: 240 }}
          onClick={this.goHuayi}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}
