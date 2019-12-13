import { Icon } from 'antd';
import { Component } from 'react';
import { Document, Page } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import moment from 'moment';
import { queryNews } from '../../services/new';

export default class Detail extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    newsData: {},
    pdfContent: '//yun.dui88.com/h5/shopping/exchange/247a511e-c4ab-a5da-95cd-d5305e55d3de.pdf',
    pdfContent2: '//yun.dui88.com/h5/shopping/exchange/d9415fbd-4e3d-096d-23c1-ea7a0615399e.pdf'
  }

  // http://dev.p3china.com:16002/HYPO_OA_News/53c7cf02-1c49-4c09-b4f0-249756cb12ed/d9415fbd-4e3d-096d-23c1-ea7a0615399e.docx
  onDocumentLoadSuccess = ({ numPages }) => {// numPages是总页数
    this.setState({ numPages });
  };

  componentDidMount() {
    const { page, index } = this.props.match.params;
    this.getNewsList(page, index);
  }

  renderPdf = () => {
    const { page, index } = this.props.match.params;
    if(+page === 1 && +index === 0) {
      return this.state.pdfContent
    }
    if(+page === 1 && +index === 1) {
      return this.state.pdfContent2
    }
    return false
  }

  getNewsList = (page = 1, index = 0) => {
    queryNews({
      page,
      size: 15
    }).then(({ success, data, total }) => {
      if(success) {
        this.setState({
          newsData: data[index]
        })
      }
    })
  }

  render() {
    const { pageNumber, numPages, pdfContent, newsData } = this.state;
    return (
      <div style={{ backgroundColor: '#fff' }}>
        <div className="top-news">
          <div className="news-title">
            <h3>{newsData.NewsName}</h3>
            {/* <p>
              9月13日，中国共产党上海华谊工程有限公司第二次党员大会隆重召开，公司领导班子成员及全体党员出席大会。
            </p> */}
          </div>
        </div>

        <div className="news-content">
          <div>{newsData.NewsName}</div>
          <div className="commet">
            <Icon type="highlight" /> {moment(newsData.RegDate).format('YYYY-MM-DD')}
            <Icon type="printer" style={{ marginLeft: 10 }} /> 打印
          </div>

          <div className="news-detail">
            {this.renderPdf() && <Document
              file={this.renderPdf()}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
                                 </Document>}
          </div>
        </div>
      </div>
    );
  }
}
