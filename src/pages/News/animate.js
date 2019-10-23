import React, { Component, PureComponent } from 'react';
import { Tabs, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

const { TabPane } = Tabs;
export default class Animate extends Component {
  state = {
    show: true,
  };

  componentWillMount() {
    // setInterval(() => {
    //   this.setIframeStyle()
    // }, 200);
  }

  onClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  setIframeStyle = () => {
    const test = document
      .getElementById('aaa')
      .contentWindow.document.getElementsByClassName('header')[0];

    test.style.display = 'none';
  };

  render() {
    return (
      <iframe
        id="aaa"
        width="100%"
        height="9000px"
        frameBorder="no"
        border="0"
        marginWidth="0"
        marginHeight="0"
        scrolling="no"
        allowTransparency="yes"
        src="http://motion.ant.design/exhibition-cn/"
      />
    );
  }

  // render() {
  //   return (
  //     <div style={{backgroundColor:'#fff', 'minHeight': 600}}>
  //       <Tabs defaultActiveKey="1">
  //         <TabPane tab="进出场动画" key="1">
  //           <QueueAnim delay={300} className="queue-simple">
  //             <div key="a">Queue Demo</div>
  //             <div key="b">Queue Demo</div>
  //             <div key="c">Queue Demo</div>
  //             <div key="d">Queue Demo</div>
  //           </QueueAnim>

  //           <div className="queue-demo">
  //             <p className="buttons">
  //               <Button type="primary" onClick={this.onClick}>Switch</Button>
  //             </p>
  //             <QueueAnim className="demo-content">
  //               {this.state.show ? [
  //                 <div className="demo-thead" key="a">
  //                   <ul>
  //                     <li />
  //                     <li />
  //                     <li />
  //                   </ul>
  //                 </div>,
  //                 <div className="demo-tbody" key="b">
  //                   <ul>
  //                     <li />
  //                     <li />
  //                     <li />
  //                   </ul>
  //                 </div>
  //         ] : null}
  //             </QueueAnim>
  //           </div>
  //         </TabPane>
  //         <TabPane tab="Tab 2" key="2">
  //     Content of Tab Pane 2
  //         </TabPane>
  //         <TabPane tab="Tab 3" key="3">
  //     Content of Tab Pane 3
  //         </TabPane>
  //       </Tabs>
  //     </div>
  //   )
  // }
}
