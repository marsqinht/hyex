import { Component } from 'react';
import { Carousel, Popover } from 'antd';
import { queryBirthday } from '../../services/home';

const info = item => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={`data:image/jpg;base64,${  item.Picture}`} width={50} height={70} />
        <div style={{ marginLeft: 14 }}>
          姓名: {item.Name}
          <br />
          部门: {item.dept}
          <br />
          室号: {item.RegHumName}
          <br />
          分机: {item.Phone}
          <br />
          手机: {item.Mobile}
          <br />
        </div>
      </div>
      <div style={{ marginTop: 6 }}>
        <div>职位: {item.PosiName}</div>
        <div>Email: {item.Email}</div>
      </div>
    </div>
  );
};

// const content = name => {
//   return (
//     <div>
//       <span style={{ color: '#ff4d4f' }}>温馨提示:</span>{' '}
//       <img
//         width={20}
//         height={20}
//         src="https://tva1.sinaimg.cn/large/006y8mN6ly1g8pq10s10tg305k05kq2r.gif"
//       />
//       诚祝{' '}
//       <Popover content={info(item)} title="员工信息" placement="rightBottom">
//         <a href="javascript:;">李子煜</a>{' '}
//       </Popover>
//       生日快乐
//     </div>
//   );
// };

const item = item => {
  return (
    <div>
      <div style={{ display: 'flex', width: 300 }}>
        <span style={{ color: '#ff4d4f' }}>温馨提示:</span>{' '}
        <img
          width={20}
          height={20}
          src={require('../../../public/images/cake.gif')}
        />
        诚祝{' '}
        <Popover content={info(item)} title="员工信息" placement="rightBottom">
          <a href="javascript:;">{item.Name}</a>{' '}
        </Popover>
        生日快乐
      </div>
    </div>
  );
};

export default class Birth extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.fetchBirth();
  }

  fetchBirth = async () => {
    const { data } = await queryBirthday();
    console.log(data);
    this.setState({
      list: data,
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div style={{ position: 'absolute', left: 66, top: 20, width: 300 }}>
        <Carousel autoplay dotPosition="right" dots={false}>
          {list.map(v => item(v))}
        </Carousel>
      </div>
    );
  }
}
