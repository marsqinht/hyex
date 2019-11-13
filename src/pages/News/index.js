import React, { Component } from 'react';
import { List, Avatar, Icon, Button, Select, Modal, Tabs, Upload, message } from 'antd';
import router from 'umi/router';
import moment from 'moment';

// import Detail from './detail';

import { queryNews } from '../../services/new';

const { Option } = Select;
const { TabPane } = Tabs;
const { Dragger } = Upload;

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

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `中共上海华谊工程有限公司第二次党员大会隆重召开${i}`,
    avatar: 'http://ww2.sinaimg.cn/large/006tNc79ly1g459noddngj306e06ewei.jpg',
    description:
      '9月13日，中国共产党上海华谊工程有限公司第二次党员大会隆重召开，公司领导班子成员及全体党员出席大会。华谊集团党委副书记、工会主席黄岱列、组织部赵微到会指导',
    content:
      '黄岱列代表集团党委对大会的胜利召开表示祝贺，并对华谊工程新一届党委班子和全体党员提出希望：要始终如一地加强党的建设，要持之以恒地做好经济工作，要牢牢守住反腐倡廉的底线红线。',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class News extends Component {
  state = {
    visible: false,
    total: 0,
    list: []
  };

  componentDidMount() {
    this.getNewsList(1);
  }

  getNewsList = (page = 1) => {
    queryNews({
      page,
      size: 15
    }).then(({ success, data, total }) => {
      if(success) {
        this.setState({
          list: data,
          total
        })
      }
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

  goDetail = () => {
    router.push('/dashboard/detail/34');
  };

  render() {
    const { visible, list, total } = this.state;
    return (
      <div>
        <Modal
          title="编辑HYEC新闻"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="上传" key="1">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽到这个区域上传文件</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data
                  or other band files
                </p>
              </Dragger>
            </TabPane>
            <TabPane tab="修改" key="2">
              <Upload
                defaultFileList={[
                  {
                    uid: '1',
                    name: '华谊工程新闻.doc',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                  },
                ]}
              />
            </TabPane>
          </Tabs>
          ,
        </Modal>
        <div className="flex-right">
          <Select defaultValue="lucy" style={{ width: 120, marginBottom: 10 }}>
            <Option value="jack">2019</Option>
            <Option value="lucy">2018</Option>
            <Option value="Yiminghe">2017</Option>
          </Select>

          <Button type="link" icon="edit" onClick={this.openEdit}>
            编辑
          </Button>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          style={{ backgroundColor: '#fff', padding: '0 20px 30px' }}
          pagination={{
            onChange: page => {
              this.getNewsList(page);
            },
            total,
            pageSize: 15,
          }}
          dataSource={list}
          renderItem={item => (
            <List.Item
              key={item.NewsName}
              actions={[
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
                item.NewsData.length && <Button type="link" href={item.NewsData.length && item.NewsData[0].ServerUrl} target="blank">附件: {item.NewsData.length && item.NewsData[0].FileName}</Button>,
                <Button type="link">{moment(item.RegDate).format('YYYY-MM-DD')}</Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <a href="javascript:;" onClick={this.goDetail}>
                    {item.NewsName}
                  </a>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
