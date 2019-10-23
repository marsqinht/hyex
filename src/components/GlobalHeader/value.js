import React, { Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';

const { Element } = BannerAnim;

const textData = {
  content:
    'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
    ' the motorcycle referred to in the mainland, ' +
    'Hong Kong and Southeast Asia known as motorcycles [2], ' +
    'is a driven by the engine, ' +
    'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
    'In some military or police applications, will add a side compartment and a secondary wheel, ' +
    'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle',
};

const dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429',
    title: '公司愿景',
    content:
      'HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
    title: '公司使命',
    content: `HYEC 将人才视为最宝贵财富，鼓励承担责任和适度竞争，关注员工的态度和
    意愿，倡导员工持续的学习力，为员工职业发展提供合理的机制和空间；
    <br/>
    HYEC 将致力于为顾客提供满意服务，奉行高质量和高执行力标准，坚持职业
    操守。时刻关注顾客对项目安全、费用、进度和质量等环节控制的明确和潜在
    要求；
    <br/>
    
    HYEC 将对自己的承诺负责；坚持市场导向，把技术和服务作为立身之本，力
    求为股东提供战略支撑、长期内在价值和持续投资回报；
    <br/>
    HYEC 将分包商视作为顾客提供全过程服务链和争取合理利润的合作伙伴，倡
    导业内竞争性合作和联合共赢的业态，以对社会负责任的可持续的方式创造经
    济和社会的进步。`,
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
    title: '五年规划',
    content:
      'HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429',
    title: '核心价值观',
    content:
      'HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
    title: '人才观',
    content:
      'HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
    title: '职业发展观',
    content:
      'HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。',
  },
];
// / dataArray = dataArray.map(item => ({ ...item, ...textData }));

export default class DetailSwitchDemo extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'details-switch-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  };

  onLeft = () => {
    let { showInt } = this.state;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let { showInt } = this.state;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = e => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element
        key={i}
        style={{
          background: item.color,
          height: '100%',
        }}
        leaveChildHide
      >
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={['easeOutCubic', 'easeInQuad']}
          key="img-wrapper"
        >
          <div className={`${this.props.className}-map map${i}`} key="map">
            <img src={item.map} width="100%" />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key="pic">
            <img src={item.pic} width="100%" />
          </div>
        </QueueAnim>
      </Element>
    ));
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (
        <Element key={i}>
          <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
            <h1 key="h1">{title}</h1>
            <em key="em" style={{ background }} />
            <p key="p">{content}</p>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div
        className={`${this.props.className}-wrapper`}
        style={{ background: dataArray[this.state.showInt].background }}
      >
        <div className={this.props.className}>
          <BannerAnim
            prefixCls={`${this.props.className}-img-wrapper`}
            sync
            type="across"
            duration={1000}
            ease="easeInOutExpo"
            arrow={false}
            thumb={false}
            ref={c => {
              this.bannerImg = c;
            }}
            onChange={this.onChange}
            dragPlay={false}
          >
            {imgChildren}
          </BannerAnim>
          <BannerAnim
            prefixCls={`${this.props.className}-text-wrapper`}
            sync
            type="across"
            duration={1000}
            arrow={false}
            thumb={false}
            ease="easeInOutExpo"
            ref={c => {
              this.bannerText = c;
            }}
            dragPlay={false}
          >
            {textChildren}
          </BannerAnim>
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
            {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
            {this.state.showInt < dataArray.length - 1 && (
              <Icon type="right" key="right" onClick={this.onRight} />
            )}
          </TweenOneGroup>
        </div>
      </div>
    );
  }
}
