import { Icon } from 'antd';
import React from 'react';
import styles from './detail.less';
// import { Document, Page } from 'react-pdf';
// // import 'react-pdf/dist/Page/AnnotationLayer.css';
// import moment from 'moment';

export default class Detail extends React.Component {


  componentDidMount() {
  }

  render() {
    const { location: { query } } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{query.title}</h3>
          <div>文件分类：<a>{query.type} </a>  &nbsp;
          &nbsp;发布日期：<a>{query.date}</a>  &nbsp;

          &nbsp;

发布人：<a>{query.people}</a>
          </div>
        </div>
        <iframe style={{ border: 0, padding: 0}} height="1000" name="pdf" width="100%" src={query.file} />
      </div>
    )
  }
}
