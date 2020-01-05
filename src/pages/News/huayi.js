import { Icon, Button, Table, Modal, Tabs, Upload, message , Card, List, Pagination } from 'antd';
import React from 'react';
import moment from 'moment';
import router from 'umi/router';
import { goToEdit } from '@/utils/edit';
// import Detail from './detail';
import styles from './huayi.less';
import { queryParyConstruct } from '../../services/party';

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

// const data = [
//   {
//     key: '1',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-10',
//     address: 'New York No. 1 Lake Park',
//     commet: 'dd',
//   },
//   {
//     key: '2',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-20',
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-21',
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-21',
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-21',
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-21',
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: '中共上海华谊工程有限公司第二次党员大会隆重召',
//     time: '2019-09-21',
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

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

export default class Huayi extends React.Component {
  state = {
    visible: false,
    data: [],
    total: 0,
  };

  componentDidMount() {
    this.fetchApi(1);
  }

  fetchApi = async page => {
    const { data, success, total } = await queryParyConstruct({
      page,
      size: 10,
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
    const { data, visible, total } = this.state;
    return (
      <div className={styles.wrap}>
        <Card
          title="华谊工程"
          bordered={false}
          extra={<Button type="link" icon="edit" onClick={() => goToEdit('华谊工程')} size="small">编辑</Button>}
        >
          <List
            header={<div style={{ textAlign: 'center', color: '#1890FF' }}>文档主题</div>}
            bordered
            dataSource={data}
            size="small"
            renderItem={item => (
              <List.Item>
                <div className={styles.list}>
                  <a href="javascript:;" onClick={() => this.goDetail(item, '华谊工程')}><div>{item.Name}</div></a>
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
              onChange={page => this.fetchApi(page, 'toexamine')}
            />
          </div>
        </Card>
        {/* <Table
          columns={columns}
          dataSource={data}
          bordered={false}
          pagination={{
            total,
            pageSize: 10,
            onChange: page => this.fetchApi(page),
          }}
          title={() => <div style={{ textAlign: 'center' }}>华谊工程</div>}
        /> */}
      </div>
    );
  }
}
