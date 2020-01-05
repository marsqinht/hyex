import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <GlobalFooter 
    copyright={
      <Fragment>
       © 2020 Shanghai HuaYi Engineering Co.,Ltd. 版权所有. 保留所有权利 | 商标 | 隐私权声明
      </Fragment>
      }
  />
);
export default FooterView;
