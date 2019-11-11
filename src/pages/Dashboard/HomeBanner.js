import { Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const { Element, Arrow, Thumb } = BannerAnim;
const {BgElement} = Element;
export default class Demo extends Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8ph55ngx0j318g0la7dn.jpg',
        title: '五年规划',
        content: <div>
          战略定位： 化工领域的工程设计和项目管理服务商。。<br />
        一. 承担集团产业的工程化，包括推进集团工程管理的标准化、集团的技术资源协同集成。<br />
        二. 工程设计业务市场化运作，业内外结合。<br />
        工程服务特色化。<br />
        业务范围涵盖能源化工、氯碱化工、精细化工和环境保护四大业务板块，成为项目前期、技术许可、项目实施、开车服务和工厂运营等全过程的工程服务商；
                 </div>
      },
      {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8pzv8xbgbj31hc0u0b2a.jpg',
        title: '公司愿景',
        content: '将成为使顾客满意、让员工有为、对股东有利和被社会认可的，专业化的工程建设全过程服务商，并持之以恒地追求协力、创新和高效。'
      }, {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8ph55ngx0j318g0la7dn.jpg',
        title: '公司使命',
        content: <div>
          将致力于市场导向，为顾客提供超越期望的服务，坚持服务即营销、技术立司的理念，奉行高质量标准和职业操守，时刻关注顾客在项目建设全过程中服务的需求和合同履行过程中的满意程度。<br />
          将人才视为最宝贵财富，倡导正直务实的品质，鼓励承担责任和自我反省，提倡持续的学习和分享，为员工职业发展提供合理的机制和空间。<br />
          将打造生产型服务业差异化的竞争优势，力求为股东提供战略支撑、长期内在价值和持续投资回报。<br />
          将分包商视作为顾客提供全过程服务和争取合理利润的合作伙伴，倡导业内竞争性合作和共赢思维模式，以对社会负责任的可持续的方式推动社会经济和文明的进步。
                 </div>
      },
      {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8pzvct5vfj31hc0u0qv5.jpg',
        title: '核心价值观',
        content: ' HYEC 将人才视为最宝贵财富，鼓励承担责任和适度竞争，关注员工的态度和 意愿，倡导员工持续的学习力，为员工职业发展提供合理的机制和空间； HYEC 将致力于为顾客提供满意服务，奉行高质量和高执行力标准，坚持职业 操守。'
      },
      {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8pzyruyigj315o0nf79z.jpg',
        title: '人才观',
        content: ' HYEC 将人才视为最宝贵财富，鼓励承担责任和适度竞争，关注员工的态度和 意愿，倡导员工持续的学习力，为员工职业发展提供合理的机制和空间； HYEC 将致力于为顾客提供满意服务，奉行高质量和高执行力标准，坚持职业 操守。'
      },
      {
        img: 'https://tva1.sinaimg.cn/large/006y8mN6ly1g8ph55ngx0j318g0la7dn.jpg',
        title: '职业发展观',
        content: ' HYEC 将人才视为最宝贵财富，鼓励承担责任和适度竞争，关注员工的态度和 意愿，倡导员工持续的学习力，为员工职业发展提供合理的机制和空间； HYEC 将致力于为顾客提供满意服务，奉行高质量和高执行力标准，坚持职业 操守。'
      }
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((v, i) =>
      <span key={i}><i style={{ backgroundImage: `url(${v.img})` }} /></span>
        );
    return (
      <BannerAnim
        onChange={this.onChange}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        prefixCls="custom-arrow-thumb"
      >
        {this.imgArray.map((v,index) => {
          return (
            <Element
              key={index}
              prefixCls="banner-user-elem"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                backgroundImage: `url(${v.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                {v.title}
              </TweenOne>
              <TweenOne
                className="banner-user-text"
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                {v.content}
              </TweenOne>
            </Element>
          )
        })}

        <Arrow
          arrowType="prev"
          key="prev"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup
            enter={{ opacity: 0, type: 'from' }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]].img})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow
          arrowType="next"
          key="next"
          prefixCls="user-arrow"
          component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup
            enter={{ opacity: 0, type: 'from' }}
            leave={{ opacity: 0 }}
            appear={false}
            className="img-wrapper"
            component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]].img})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </BannerAnim>
    );
  }
}
