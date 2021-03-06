import { Icon, Button, Table, Modal, Tabs, Upload, message, Pagination,List , Card} from 'antd';
import React from 'react';
import moment from 'moment';
import router from 'umi/router';
// import Detail from './detail';
import styles from './huayi.less';
import { querySystem } from '../../services/party';

// const { Option } = Select;
const { TabPane } = Tabs;
const { Dragger } = Upload;

const columns = [
  {
    title: '标题',
    dataIndex: 'Name',
    render: text => <a>{text}</a>,
  },
  {
    title: '更新时间',
    className: 'column-time',
    render: time => <div>{moment(time).format('YYYY-MM-DD')}</div>,
    dataIndex: 'RegDate',
  },
];

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class ZhiduHuibian extends React.Component {
  state = {
    visible: false,
    data: [],
    total: 0,
  };

  componentDidMount() {
    this.fetchApi(1);
  }

  fetchApi = async (page, type = '上级单位文件') => {
    const { data, success, total } = await querySystem({
      page,
      size: 10,
      type,
    });
    console.log(data);
    if (success) {
      this.setState({
        data,
        total,
      });
    }
  };


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

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  openEdit = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { visible, data, total } = this.state;
    return (
      <div className={styles.wrap}>
        <Tabs
          defaultActiveKey="上级单位文件"
          onChange={name => {
            this.fetchApi(1, name);
          }}
        >
          <TabPane tab="上级单位文件" key="上级单位文件">
            <Card
              title="上级单位文件"
              bordered={false}
            >
              <List
                header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <div className={styles.list}>
                      <a href="javascript:;" onClick={() => this.goDetail(item, '上级单位文件')}><div>{item.Name}</div></a>
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
                  onChange={page => this.fetchApi(page, '上级单位文件')}
                />
              </div>
            </Card>
            {/* <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={{
                total,
                pageSize: 10,
                onChange: page => this.fetchApi(page, '上级单位文件'),
              }}
              title={() => <div style={{ textAlign: 'center' }}>上级单位文件</div>}
            /> */}
          </TabPane>
          <TabPane tab="公司制度" key="公司制度">
            <Card
              title="公司制度"
              bordered={false}
            >
              <List
                header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <div className={styles.list}>
                      <a href="javascript:;" onClick={() => this.goDetail(item, '上级单位文件')}><div>{item.Name}</div></a>
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
                  onChange={page => this.fetchApi(page, '公司制度')}
                />
              </div>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
