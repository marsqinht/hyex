import { Component } from 'react';
import { Carousel, Popover } from 'antd';

const info = (
  <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="http://pic2.52pk.com/files/150911/1283574_093700_6640.jpeg"
        width={50}
        height={50}
      />
      <div style={{ marginLeft: 14 }}>
        姓名: 李子煜
        <br />
        部门: 工程事业部
        <br />
        室号: 8508
        <br />
        分机: 703829
        <br />
      </div>
    </div>
    <div style={{ marginTop: 6 }}>
      <div>职位: 工程师</div>
      <div>Email: liziyu@heyc.com</div>
    </div>
  </div>
);

const content = (name) => {
  return (
    <div>
      <span style={{color: '#ff4d4f'}}>温馨提示:</span>{' '}
      <img
        width={20}
        height={20}
        src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8pq10s10tg305k05kq2r.gif"
      />
    诚祝{' '}
      <Popover content={info} title="员工信息" placement="rightBottom">
        <a href="javascript:;">李子煜</a>{' '}
      </Popover>
    生日快乐
    </div>
  )
}


const item = (name) => {
  return (
    <div>
      <div style={{display: 'flex', width: 300}}>
          <span style={{color: '#ff4d4f'}}>温馨提示:</span>{' '}
          <img
            width={20}
            height={20}
            src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8pq10s10tg305k05kq2r.gif"
          />
      诚祝{' '}
          <Popover content={info} title="员工信息" placement="rightBottom">
            <a href="javascript:;">{name}</a>{' '}
          </Popover>
      生日快乐
        </div>
    </div>
  )
}

export default class Birth extends Component {
  render() {
    return (
      <div style={{position: 'absolute', 'left': 66, top: 20, width: 300}}>
        <Carousel autoplay dotPosition="right" dots={false}>
           {item('李子煜')}
           {item('郑淑婷')}
         </Carousel>
      </div>
    )
  }
}