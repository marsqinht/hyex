import React from 'react';
import { Card, Alert, Tabs, Tree, Icon, Form, Input, Button, Select, Collapse } from 'antd';
import styles from './employee.less';

const { TreeNode } = Tree;
const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;

@Form.create()
class Employee extends React.Component {
  onSelect = () => {
    
  }

  render() {
    return (
      <div>
        <Alert
          message="友情提示"
          description="最近更新日期 2019-11-11"
          type="info"
          showIcon
        />

        <Tabs defaultActiveKey="1">
          <TabPane tab="员工信息" key="1">
            <div>
              <div>
                <Tree showLine defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect}>
                  <TreeNode title="公司" key="0-0" icon={<Icon type="apartment" />}>
                    <TreeNode title="公司高管" key="0-0-0" icon={<Icon type="apartment" />} />
                    <TreeNode title="副总工程师" key="0-0-1" />
                    <TreeNode title="设计事业部" key="0-0-2" />
                    <TreeNode title="综合管理部" key="0-0-3" />
                    <TreeNode title="总承包事业部" key="0-0-4" />
                    <TreeNode title="党群工作部" key="0-0-5" />
                    <TreeNode title="QHSE部" key="0-0-6" />
                    <TreeNode title="精细化工事业部" key="0-0-7" />
                    <TreeNode title="资产财务部" key="0-0-8" />
                    <TreeNode title="数字化中心" key="0-0-9" />
                    <TreeNode title="建筑设计分院" key="0-0-10" />
                    <TreeNode title="技术公司" key="0-0-11" />
                    <TreeNode title="华谊信息运维" key="0-0-12" />
                  </TreeNode>
                </Tree>
              </div>
              <div>
                <Card>
                  <div>
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                      <Option value="jack">按中文名</Option>
                      <Option value="lucy">按部门</Option>
                    </Select>
                    <Search
                      placeholder="请输入关键字"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 }}
                    />
                  </div>
                  <div>
                    <Collapse defaultActiveKey={['1', '2']}>
                      <Panel header="NO.234" key="1">
                        <p>333</p>
                      </Panel>
                      <Panel header="NO.235" key="2">
                        <p>5555</p>
                      </Panel>
                    </Collapse>
                  </div>
                </Card>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Employee;