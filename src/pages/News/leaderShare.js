import React from 'react';
import { Card, List, Select, Pagination } from 'antd';
import moment from 'moment';
import router from 'umi/router';
import styles from './huayi.less';
import { queryLeaderShare } from '../../services/home';

const { Option } = Select;
export default class Share extends React.Component {
  state = {
    data: [],
    total: 0
  }

  componentDidMount() {
    this.fetchApi();
  }

  goDetail = (item, type) => {
    const file = item.FileRow.length && item.FileRow[0].ServerUrl;
    const { Name, RegHumName, RegDate } = item
    if(!file) {
      return;
    }
    router.push({
      pathname: '/dashboard/commondetail',
      query: {
        title: Name,
        people: RegHumName,
        date: moment(RegDate).format('YYYY-MM-DD'),
        file,
        type
      },
    })
  }

  fetchApi = async () => {
    const { data, total, success } = await queryLeaderShare();
    if(success) {
      this.setState({
        data,
        total
      })
    }
    
  }

  render() {
    const { data, total } = this.state;
    return (<Card
      title="高层学习分享"
      bordered={false}
      extra={
        <div>
          <Select defaultValue="1" style={{ width: 120, marginRight: 14 }}>
            <Option value="1">年度筛选</Option>
          </Select>
        </div>
      }
    >
      <List
        header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className={styles.list}>
              <a href="javascript:;" onClick={() => this.goDetail(item, '高层学习分享')}><div>{item.Name}</div></a>
              <div>
                {moment(item.RegDate).format('YYYY-MM-DD')}
              </div>
            </div>
          </List.Item>
                    )}
      />
      <div className={styles.pe}>
        <Pagination
          defaultCurrent={1}
          total={total}
          pageSize={15}
          onChange={page => this.fetchApi(page)}
        />
      </div>
    </Card>)
  }
}