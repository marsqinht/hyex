import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0}}>
    <GlobalFooter 
      links={[
        {
          key: '33',
          title: '华谊工程首页',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 华谊工程
        </Fragment>
      }
      style={{ background: `url(https://tva1.sinaimg.cn/large/006y8mN6ly1g8wf5ec91pj30kk06qa9t.jpg) center bottom no-repeat`,
    'background-size': '100% 100%' }}
    />
  </Footer>
);
export default FooterView;
