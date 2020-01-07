import { Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import { Button, Icon } from 'antd';
import styles from './HomeBanner.less';

const { Element, Arrow, Thumb } = BannerAnim;
const { BgElement } = Element;
const bcolor = '';
const bgStyle = { color: '#fff', fontSize: 14, fontWeight: 'normal'}
export default class Demo extends Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      {
        img: require('../../../public/homeImages/carousel/1.jpg'),
        title: '五年规划',
        content: (
          <div>
            <p>
              <i className="web-font" style={bgStyle}>战略定位：</i>&nbsp;化工领域的工程设计和项目管理服务商。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>功能定位：</i>一.
              承担集团产业的工程化，包括推进集团工程管理的标准化、集团的技术资源协同集成。二.
              工程设计业务市场化运作，业内外结合。
            </p>
            <p />
            <p>
              <i className="web-font" style={bgStyle}>发展规划原则:</i>
              <div>
                <div>
                  <i className="web-font" style={bgStyle}>工程服务特色化：</i>
                  业务范围涵盖能源化工、氯碱化工、精细化工和环境保护四大业务板块，成为项目前期、技术许可、项目实施、开车服务和工厂运营等全过程的工程服务商；
                </div>
                <div>
                  <i className="web-font" style={bgStyle}>技术工程产业化：</i>
                  依托集团公司和外部技术开发资源，持续加大产业化开发投入，关注行业同类技术开发进展和竞争态势，形成独有或领先的产业化核心技术；
                </div>
                <div>
                  <i className="web-font" style={bgStyle}>环保工程运营化：</i>
                  借助合作方在运营方面的成功经验和品牌优势，在环保工程总承包的基础上，拓展环保工程运营服务并逐步建立竞争优势；
                </div>
                <div>
                  <i className="web-font" style={bgStyle}>海外工程合作化：</i>
                  坚持以“借船出海”的方式寻求突破点，逐步建立与具有海外成功经验的大型实体公司和国内外大型工程公司的长期合作关系，同时依托集团公司的海外投资，以公司擅长业务领域为起点逐步开拓、培育海外市场。
                </div>
              </div>
            </p>
            <p>
              <i className="web-font" style={bgStyle}>五年发展目标：</i>
              &nbsp;华谊工程立足于服务集团，面向市场，成为有特色、专业化的工程建设全过程服务商。到2023年实现营业收入8.7个亿，位列行业前50位。
            </p>
          </div>
        ),
      },
      {
        img: require('../../../public/homeImages/carousel/2.jpg'),
        title: '公司愿景',
        content:
          '将成为使顾客满意、让员工有为、对股东有利和被社会认可的，专业化的工程建设全过程服务商，并持之以恒地追求协力、创新和高效。',
      },
      {
        img: require('../../../public/homeImages/carousel/3.jpg'),
        title: '公司使命',
        content: (
          <div>
            将致力于市场导向，为顾客提供超越期望的服务，坚持服务即营销、技术立司的理念，奉行高质量标准和职业操守，时刻关注顾客在项目建设全过程中服务的需求和合同履行过程中的满意程度。
            <br />
            将人才视为最宝贵财富，倡导正直务实的品质，鼓励承担责任和自我反省，提倡持续的学习和分享，为员工职业发展提供合理的机制和空间。
            <br />
            将打造生产型服务业差异化的竞争优势，力求为股东提供战略支撑、长期内在价值和持续投资回报。
            <br />
            将分包商视作为顾客提供全过程服务和争取合理利润的合作伙伴，倡导业内竞争性合作和共赢思维模式，以对社会负责任的可持续的方式推动社会经济和文明的进步。
          </div>
        ),
      },
      {
        img: require('../../../public/homeImages/carousel/4.jpg'),
        title: '核心价值观',
        content: (
          <div>
            <p>协力形成合力，创新提供动力，高效产生竞争力</p>
            <p>
              <i className="web-font" style={bgStyle}>协力:</i>
              &nbsp;齐众力，则无敌；集众智，则无畏。公司上下同心协力，方能共赢。
              <br />
              协力是工程公司的行业特征和岗位职业要求，也是一种组织能力和价值取向。公司全体员工必须具有团队合作的强烈意识，才能保证项目实施和公司运行的渐进有序。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>创新:</i>
              &nbsp;公司追求服务创新、技术创新、管理创新；创新，是公司发展的原动力。
              <br />
              创新是公司发展的原动力。一个点子、一个创意、一个改变，只要提升了效率、解决了问题、改变了习惯，就是一种创新。公司允许质疑，鼓励创新并包容智慧型失败，追求创新和合规的平衡。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>高效:</i>
              &nbsp;快速响应顾客需求，提供使顾客满意的解决方案。
              <br />
              高效包含着及时完成、质量出色、费用合理等诸多方面，其评判的核心标准就是顾客满意。高效还意味着满足顾客个性化的项目进度要求，并以顾客的认可作为唯一评判标准。
            </p>
          </div>
        ),
      },
      {
        img: require('../../../public/homeImages/carousel/5.jpg'),
        title: '人才观',
        content: (
          <div>
            人才是具有一定的专业知识和技术能力，进行高效劳动，对公司做出贡献的人，是人力资源中品质、能力和绩效均较高的劳动者，是公司最宝贵的财富。
            <p>
              <i className="web-font" style={bgStyle}>品质：</i>&nbsp;正直、责任、务实、激情、共享。
              <br />
              作为工程咨询行业的从业者，需为人正直，顺道而行，顺理而言；需负责做事，遵守规章，敢于担当；需务实求果，平衡义利，脚踏实地；需激情梦想，求新求变，不拘一格；需乐于共享，提升他人，升华自我。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>能力：</i>&nbsp;博学、专业、自省、应变。
              <br />
              能以“专研于本岗，博学于本业”的标准要求自己；能够见贤思齐，见不贤而内自省；能以灵活的思维，审时度势，随机应变。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>贡献：</i>
              &nbsp;是指任何员工为公司直接或间接创造经济效益、并且持续超越其以往绩效的工作。
              <br />
              人才不仅具有出色的品质，很强的能力，还要在工作中创造价值和贡献。贡献不意味着学历、资历或想法，而是实实在在的付出。每个岗位都有基本的工作要求，只要员工能够在自己的岗位上做出持续超越其以往绩效的工作，就足以说明其是公司难得的人才。
            </p>
          </div>
        ),
      },
      {
        img: require('../../../public/homeImages/carousel/6.jpg'),
        title: '职业发展观',
        content: (
          <div>
            公司在培养员工成才过程中体现社会责任，员工在为公司创造价值的过程中体现自身价值。
            <p>
              <i className="web-font" style={bgStyle}>人材：</i>
              &nbsp;具备岗位任职资格和基本素质，有成才意愿和潜质，需公司进行系统培养。
              <br />
              具备人才的基本品质和渴望成长的意愿，能够快速融入工作环境，勤奋学习，踏实做事，灵活应变，成长为工作中高效的执行者，企业文化的践行者。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>人才：</i>
              &nbsp;具备岗位胜任力，能够快速融入工作、表现出色，为公司发展注入激情与活力。
              <br />
              通过自己的激情和努力，快速提升专业水平，能够独当一面，积极发挥带动团队一起成长的正能量，成长为业务骨干、各线条主要工作的负责人，解决问题的排头兵、企业文化的传承者。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>人财：</i>
              &nbsp;具有深厚的技术积累和丰富的工作经验，堪为表率，为公司不断创造巨大财富。
              <br />
              能够凭借自己的学识和经验为公司、部门、专业、项目提供合理、经济、创新、高效的解决方案，成长为业务的领军者、资深顾问和人才导师，企业文化的垂范者。
            </p>
          </div>
        ),
      },
      {
        img: require('../../../public/homeImages/carousel/7.jpg'),
        title: '司训',
        content: (
          <div>
            公司面对转型发展的挑战和机遇，唯有秉持“诚信、进取、感恩”之心，方能破茧成蝶。
            <p>
              <i className="web-font" style={bgStyle}>诚信：</i>&nbsp;以诚感人者，人亦诚而应。
              <br />
              百德诚为先，百事信为本。诚信是企业立身之道，它是一种无形资产，反映了企业的商业伦理和价值信仰。诚信是员工为人之道，公司选人以诚、教人以信。构建完善的守信用、讲信誉、重信义的商业环境和企业文化对企业健康发展具有深远意义。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>进取：</i>
              &nbsp;求知进取、追求卓越是公司发展壮大的内在驱动力。
              <br />
              公司积极倡导持续学习的理念，满足工程咨询行业对从业人员知识积累和能力增长的需求，满足改善心智模式的需求；围绕技术和服务，不断提高核心竞争力；激励员工汲取新知识、不断提升自我和与他人分享的意愿；为股东创造合理的利润和长期内在价值。
            </p>
            <p>
              <i className="web-font" style={bgStyle}>感恩：</i>
              &nbsp;快乐工作、关心亲人，对生活抱有一颗感恩的心。
              <br />
              给予是恩，合作是缘。公司希望每一位员工都能首先想到感谢生养自己的父母和默默陪伴给予支持的家人；其次，常怀感恩之心，常念合作之缘，回报那些曾经支持、关怀、鼓励、帮助过公司及自己的顾客、股东、分包商、同事、同行和社会。
            </p>
          </div>
        ),
      },
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
      isShouQi: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach(method => (this[method] = this[method].bind(this)));
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
    const thumbChildren = this.imgArray.map((v, i) => (
      <span key={i}>
        <i style={{ backgroundImage: `url(${v.img})` }} />
      </span>
    ));
    const { isShouQi } = this.state;
    return (
      <div>
        {' '}
        <Button
          style={{ display: !isShouQi ? 'none' : 'block' }}
          onClick={() => this.setState({ isShouQi: false })}
        >
          显示公司文化图
          <Icon type="down" />
        </Button>
        <div
          className={styles.content}
          style={{ display: isShouQi ? 'none' : 'block', height: isShouQi ? 0 : 'auto' }}
        >
          <div className={styles.arrow} onClick={() => this.setState({ isShouQi: true })}>
            <Icon type="up" />
            收起
          </div>
          <BannerAnim
            onChange={this.onChange}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            prefixCls="custom-arrow-thumb"
            autoPlay
            autoPlaySpeed={10000}
          >
            {this.imgArray.map((v, index) => {
              return (
                <Element key={index} prefixCls="banner-user-elem">
                  <BgElement
                    key="bg"
                    className="bg"
                    style={{
                      backgroundImage: `url(${v.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(1px)',
                    }}
                  />
                  <div className="home-banner-bg" />
                  <TweenOne
                    className="banner-user-title"
                    animation={{ y: 30, opacity: 0, type: 'from' }}
                  >
                    {v.title}
                  </TweenOne>
                  <TweenOne
                    className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                  >
                    {v.content}
                  </TweenOne>
                </Element>
              );
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
                <li
                  style={{ backgroundImage: `url(${this.imgArray[intArray[0]].img})` }}
                  key={intArray[0]}
                />
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
                <li
                  style={{ backgroundImage: `url(${this.imgArray[intArray[1]].img})` }}
                  key={intArray[1]}
                />
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
        </div>
      </div>
    );
  }
}
