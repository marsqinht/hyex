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
      'https://tva1.sinaimg.cn/large/006y8mN6ly1g8ph58rc3nj318g0lzq8p.jpg',
      'https://tva1.sinaimg.cn/large/006y8mN6ly1g8ph55ngx0j318g0la7dn.jpg',
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
    const thumbChildren = this.imgArray.map((img, i) =>
      <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        );
    return (
      <BannerAnim 
        onChange={this.onChange} 
        onMouseEnter={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} 
        prefixCls="custom-arrow-thumb"
      >
        <Element
          key="aaa"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            公司愿景
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
          HYEC 将成为让员工有为、使顾客满意、对股东有利和被社会认可的工程公司，并持之以恒地追求协力、创新和高效。
          </TweenOne>
        </Element>
        <Element
          key="bbb"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          公司使命
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
          HYEC 将人才视为最宝贵财富，鼓励承担责任和适度竞争，关注员工的态度和 意愿，倡导员工持续的学习力，为员工职业发展提供合理的机制和空间； HYEC 将致力于为顾客提供满意服务，奉行高质量和高执行力标准，坚持职业 操守。
          </TweenOne>
        </Element>
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
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
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
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
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