import { Component } from 'react';
import { Alert, Tabs } from 'antd';
import Banner from './Banner';

const { TabPane } = Tabs;


export default class Fawen extends Component {
  render() {
    return (
      <div>
        <div className="mb-20">
          <Alert message="行政提醒: 最新更新日期 2019-11-03" type="info" />
        </div>
        <Tabs type="card" className="mt-20" style={{background: '#fff'}}>
          <TabPane tab="计划与总结" key="1">
      Content of Tab Pane 1
          </TabPane>
          <TabPane tab="管理例会" key="2">
      Content of Tab Pane 2
          </TabPane>
          <TabPane tab="公司行政文件" key="3">
      Content of Tab Pane 3
          </TabPane>
          <TabPane tab="公司党群文件" key="4">
      Content of Tab Pane 3
          </TabPane>
        </Tabs>,
      </div>
    )
  }
}